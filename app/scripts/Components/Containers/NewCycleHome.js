import React from 'react'
import {browserHistory} from 'react-router';
import {Link} from 'react-router';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import store from '../../store';

import LoggedWorkouts from '../LoggedWorkouts';
import CycleWorkouts from '../CycleWorkouts';

export default React.createClass({

  getInitialState() {
    return {
      cycle: {
        cycleWorkouts: []
      },
      loggedWorkout: store.loggedWorkout.toJSON(),
      loggedCycle: store.loggedCycle.toJSON(),

    };
  },

  componentDidMount() {
    store.loggedWorkout.fetch();
    store.loggedWorkout.on('update change' , this.updateState);

    store.loggedCycle.fetch();
    store.loggedCycle.find(this.props.params);
    store.loggedCycle.on('update change' , this.updateCycleState);

    if(store.loggedCycle.find(this.props.params) === undefined) {
      store.loggedCycle.fetch(this.props.params)

    }
    else {
        this.updateCycleState();
    }
  },

  componentWillUnmount() {

    store.loggedWorkout.off('update change' , this.updateState);
    store.loggedCycle.off('update change' , this.updateCycleState);
  },

  updateState() {
    this.setState({
      loggedWorkout: store.loggedWorkout.toJSON(),
    })
  },

  updateCycleState() {
    if(store.loggedCycle.find(this.props.params) === undefined){
      this.setState({
      cycle: { cycleWorkouts: [] },
      loggedCycle: store.loggedCycle.toJSON()
    })
  } else {
    this.setState({
      cycle: store.loggedCycle.find(this.props.params).toJSON(),
      loggedCycle: store.loggedCycle.toJSON()
    });
  }
  },

  render() {
    console.log(this.props)
    let cycleLength;

    if(this.state.cycle.cycleStartDate === null && this.state.cycle.cycleEndDate === null) {
      cycleLength = (
        <div className="cycle-page">
          <button className="back-button" onClick={this.handleBack}>Back</button>
          <h2 className="logged-cycle-name">{this.props.params.name}</h2>
          <form>
            <span className="cycle-start"> Cycle Start:
              <DatePicker selected={this.state.startDate} selectsStart startDate={this.state.startDate} endDate={this.state.endDate} onChange={this.handleChangeStart} />
            </span>
            <span className="cycle-end"> Cycle End:
              <DatePicker selected={this.state.endDate} selectsEnd startDate={this.state.startDate} endDate={this.state.endDate} onChange={this.handleChangeEnd} />
            </span>
            <CycleWorkouts cycleWorkouts={this.state.cycle.cycleWorkouts} cycle={this.state.cycle} />
            <input type="submit" className="save-button" onClick={this.handleSaveCycle} value="Save Cycle!"/>
          </form>
          <span> Choose from Exsisting Cycles Below or
            <Link to = "workouts"> Create A New Workout </Link>
          </span>
          <LoggedWorkouts workouts={this.state.loggedWorkout} cycleId={this.state.cycle.objectId}/>
        </div>
      )
    }
    else {
      cycleLength = (
        <div className="cycle-page">
          <button className="back-button" onClick={this.handleBack}>Back</button>
          <h2 className="logged-cycle-name">{this.props.params.name}</h2>
          <form>
            <span className="cycle-start"> Cycle Start:
              <DatePicker selected={moment(this.state.cycle.cycleStartDate)} selectsStart startDate={this.state.startDate} endDate={this.state.endDate} onChange={this.handleChangeStart} />
            </span>
            <span className="cycle-end"> Cycle End:
              <DatePicker selected={moment(this.state.cycle.cycleEndDate)} selectsEnd startDate={this.state.startDate} endDate={this.state.endDate} onChange={this.handleChangeEnd} />
            </span>
            <CycleWorkouts cycleWorkouts={this.state.cycle.cycleWorkouts} cycle={this.state.cycle} />
            <input type="submit" className="save-button" onClick={this.handleSaveCycle} value="Save Cycle!"/>
          </form>
          <LoggedWorkouts workouts={this.state.loggedWorkout} cycleId={this.state.cycle.objectId}/>
        </div>
    );
    }
    return (
      <div className="main-container">
        {cycleLength}
      </div>
    );
  },

  handleSaveCycle(e) {
    browserHistory.push('/cycles')
  },

  handleBack () {
    browserHistory.goBack()
  },

  handleChangeStart(startDate) {
    let cycleStart = startDate;
    let end = this.state.cycle.cycleEndDate
    store.loggedCycle.get(this.state.cycle.objectId).addDatesToCycle(cycleStart, end);
  },

  handleChangeEnd(endDate) {
    let cycleEnd = endDate;
    let start = this.state.cycle.cycleStartDate
    store.loggedCycle.get(this.state.cycle.objectId).addDatesToCycle(start, cycleEnd);
  }
});

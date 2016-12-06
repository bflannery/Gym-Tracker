import React from 'react'
import {browserHistory} from 'react-router';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import store from '../../store';

import LoggedWorkouts from '../LoggedWorkouts';
import CycleWorkouts from '../CycleWorkouts';

export default React.createClass({

  getInitialState() {
    return {
      cycle: {cycleWorkouts: []},
      loggedWorkout: store.loggedWorkout.toJSON(),
      loggedCycle: store.loggedCycle.toJSON(),
      startDate: moment()
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
    this.setState({
      cycle: store.loggedCycle.find(this.props.params).toJSON(),
      loggedCycle: store.loggedCycle.toJSON()
    });
  },

  render() {
    console.log(this.state)
    return (
      <div className="main-container">
        <div className="cycle-page">
          <input type="button" className="back-button" value="Back" onClick={this.handleBack}/>
          <h2 className="logged-cycle-name">{this.props.params.name}</h2>
          <span className="cycle-start"> Cycle Start:
          <DatePicker selected={this.state.startDate} selectsStart startDate={this.state.startDate} endDate={this.state.endDate} onChange={this.handleChangeStart} />
          </span>
          <span className="cycle-end"> Cycle End:
          <DatePicker selected={this.state.endDate} selectsEnd startDate={this.state.startDate} endDate={this.state.endDate} onChange={this.handleChangeEnd} />
          </span>
          <CycleWorkouts workouts={this.state.cycle.workouts} cycleId={this.state.cycle.objectId} />
          <input type="submit" className="save-button" onClick={this.handleSaveCycle} value="Save Cycle!"/>
          <LoggedWorkouts workouts={this.state.loggedWorkout} cycleId={this.state.cycle.objectId}/>
        </div>
      </div>
    );
  },

  handleSaveCycle() {
    let cycleStart = this.state.startDate._d;
    let cycleEnd = this.state.endDate._d;
    store.loggedCycle.get(this.state.cycle.objectId).addDatesToCycle(cycleStart, cycleEnd);
    browserHistory.push('/cycles')
  },

  handleBack () {
    browserHistory.push('/cycles')
  },

  handleChangeStart(startDate) {
    this.setState({
      startDate: startDate,
      // cycle: store.loggedCycle.find(this.props.params).toJSON(),
      // loggedCycle: store.loggedCycle.toJSON()
    })
  },

  handleChangeEnd(endDate) {
    this.setState({
      endDate: endDate,
      // cycle: store.loggedCycle.find(this.props.params).toJSON(),
      // loggedCycle: store.loggedCycle.toJSON()
    })
  }
});

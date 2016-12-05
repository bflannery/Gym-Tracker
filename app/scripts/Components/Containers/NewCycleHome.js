import React from 'react'
import store from '../../store';
import {browserHistory} from 'react-router';

import LoggedWorkouts from '../LoggedWorkouts';
import CycleWorkouts from '../CycleWorkouts';

export default React.createClass({

  getInitialState() {
    return {
      cycle: {workouts: []},
      loggedWorkout: store.loggedWorkout.toJSON(),
      loggedCycle: store.loggedCycle.toJSON()
    }
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
          <input type="submit" className="save-button" onClick={this.SaveCycle} value="Save Cycle!"/>

          <CycleWorkouts workouts={this.state.cycle.workouts} cycleId={this.state.cycle.objectId} />
          <LoggedWorkouts workouts={this.state.loggedWorkout} cycleId={this.state.cycle.objectId}/>
        </div>
      </div>
    );
  },

  SaveCycle() {
    console.log('saved')
    browserHistory.push('/cycles')
  },

  handleBack () {
    browserHistory.push('/cycles')
  }
});

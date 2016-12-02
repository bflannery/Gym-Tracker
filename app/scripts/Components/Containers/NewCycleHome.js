import React from 'react'
import store from '../../store';
import {browserHistory} from 'react-router';

import LoggedWorkouts from '../LoggedWorkouts';
import CycleWorkouts from '../CycleWorkouts';

export default React.createClass({

  getInitialState() {
    return {
      cycle: {},
      loggedCycle: store.loggedCycle.toJSON(),
      loggedWorkout: store.loggedWorkout.toJSON()
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
    } else {
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
      loggedCycle: store.loggedCycle.toJSON()
    })
  },

  updateCycleState() {
    this.setState({
      cycle: store.loggedCycle.find(this.props.params).toJSON()});
  },

  render() {

    return (
      <div className="main-container">
      <h2>{this.props.params.name}</h2>
      <CycleWorkouts workouts={this.state.cycle} />
      <input type="submit" onClick={this.SaveWorkout} value="Save Workout!"/>
      <h4> Select Workouts </h4>
      <LoggedWorkouts workouts={this.state.loggedWorkout} cycleId={this.state.cycle.objectId}/>
      </div>
    )
  },

  SaveWorkout() {
    console.log('saved')
  }
})

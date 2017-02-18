import React from 'react';
import {browserHistory} from 'react-router';

import store from '../../store';

import MovementSearch from '../MovementSearch';
import LoggedMovements from '../LoggedMovements';

export default React.createClass ({

  getInitialState() {
    return {
      workout: {
        movements: []
        },
      loggedWorkout: store.loggedWorkout.toJSON(),
      session: store.session.toJSON()
    };
  },

  componentDidMount() {

    if(store.movements.length < 1){
    store.movements.getToken();
  }

    store.session.fetch();
    store.session.on('change update', this.updateWorkoutState);

    store.loggedWorkout.fetch();
    store.loggedWorkout.find(this.props.params);
    store.loggedWorkout.on('change update', this.updateWorkoutState);

    if(store.loggedWorkout.find(this.props.params) === undefined) {
      store.loggedWorkout.fetch(this.props.params)
    }
    else {
        this.updateWorkoutState();
      }

  },
  componentWillUnmount() {
    store.loggedWorkout.off('change update', this.updateWorkoutState);
    store.session.off('change update', this.updateWorkoutState);
  },
  updateWorkoutState() {
    if(store.loggedWorkout.find(this.props.params) === undefined) {
      this.setState({
        loggedWorkout: store.loggedWorkout.toJSON(),
        workout: { movements: []},
        session: store.session.toJSON()
      });
    } else {
    this.setState({
      workout: store.loggedWorkout.find(this.props.params).toJSON(),
      loggedWorkout: store.loggedWorkout.toJSON(),
      session: store.session.toJSON()
    });
  }
},
  render () {
    console.log(this.state)
    let workoutContainer;

    if(this.state.workout.movements < 1) {

      workoutContainer = (
        <div className="workout-page">
          <h2 className="section-title">{this.props.params.name}</h2>
          <MovementSearch workouts={this.state.loggedWorkout} workoutId={this.state.workout.objectId}/>
        </div>
      );
    } else {
      workoutContainer = (
          <div className="workout-page">
            <h2 className="section-title">{this.props.params.name}</h2>
            <form className="workout-form">
            <LoggedMovements movements={this.state.workout.movements} workoutId={this.state.workout.objectId}/>
            <input type="submit" className="save-button" onClick={this.handleSaveWorkout} value="Save Workout!"/>
            </form>
            <MovementSearch workouts={this.state.loggedWorkout} workoutId={this.state.workout.objectId}/>
          </div>
      );
    }
    return (
      <div className="main-container">
      <div className="workout-hero"></div>
      {workoutContainer}
      </div>
    );
  },

  handleSaveWorkout() {
  browserHistory.push('/workouts')
  }
});

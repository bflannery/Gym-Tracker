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
    };
  },

  componentDidMount() {

    if(store.movements.length < 1){
    store.movements.getToken();
  }
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
  },
  updateWorkoutState() {
    if(store.loggedWorkout.find(this.props.params) === undefined) {
      this.setState({
        loggedWorkout: store.loggedWorkout.toJSON(),
        workout: { movements: []}
      });
    } else {
    this.setState({
      workout: store.loggedWorkout.find(this.props.params).toJSON(),
      loggedWorkout: store.loggedWorkout.toJSON()
    });
  }
},
  render () {
    return (
      <div className="main-container">
        <div className="workout-hero"></div>
          <div className="workout-page">
            <h2 className="section-title">{this.props.params.name}</h2>
            <LoggedMovements movements={this.state.workout.movements} workoutId={this.state.workout.objectId}/>
            <input type="submit" className="save-button" onClick={this.handleSaveWorkout} value="Save Workout!"/>
            <MovementSearch workouts={this.state.loggedWorkout} workoutId={this.state.workout.objectId}/>
          </div>
      </div>
    );
  },

  handleSaveWorkout() {
  browserHistory.push('/workouts')
  }
});

import React from 'react';
import { Link } from 'react-router';
import { browserHistory} from 'react-router';

import store from '../store';

import LoggedMovements from './LoggedMovements';

export default React.createClass({
  render() {
    let workoutInfo;

    if(this.props.workout.description === null) {
        workoutInfo = (
          <div>
            <h4 className="workout-name"> {this.props.workout.name}</h4>
          </div>
        )
    } else {
      workoutInfo = (
        <div>
          <h4 className="workout-name"> {this.props.workout.name} </h4>
          <span className="workout-description"> {this.props.workout.description} </span>
        </div>
      )
    }
  return (
    <li className="workout-preview-container">
      <div className="workout-preview" onClick={this.onClick}>
        {workoutInfo}
      </div>
      <div className="remove-container">
        <input type="button" value="Delete Workout" className="workout-remove-button" onClick={this.removeWorkout}/>
      </div>
    </li>
    )
  },

removeWorkout() {
  let id = this.props.workout.objectId
  store.loggedWorkout.get(this.props.workoutId).deleteWorkout(id)
},

onClick() {
  browserHistory.push(`/workouts/${this.props.workout.name}`)
}
});

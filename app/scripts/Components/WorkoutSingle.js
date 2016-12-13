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
            <input type="button" value="Delete Workout" className="workout-remove-button" onClick={this.removeWorkout}/>
          </div>
        )
    } else {
      workoutInfo = (
        <div>
          <h4 className="workout-name"> {this.props.workout.name} </h4>
          <span> {this.props.workout.description} </span>
          <input type="button" value="Delete Workout" className="workout-remove-button" onClick={this.removeWorkout}/>
        </div>
      )
    }
  return (
    <li className="workout-preview" onClick={this.onClick}>
      {workoutInfo}
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

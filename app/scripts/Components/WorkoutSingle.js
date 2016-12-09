import React from 'react';
import { Link } from 'react-router';

import store from '../store';

import LoggedMovements from './LoggedMovements';


export default React.createClass({
  render() {
    console.log(this.props)
    let workoutInfo;

    if(this.props.workout.description === null) {
        workoutInfo = (
          <div>
            <Link to = {`/workouts/${this.props.workout.name}`} onClick={this.onClick}>
                <h4 className="workout-name"> {this.props.workout.name}</h4>
                <input type="button" value="Delete Workout" className="workout-remove-button" onClick={this.removeWorkout}/>
            </Link>
          </div>

        )
    } else {

      workoutInfo = (
        <div>
          <Link to = {`/workouts/${this.props.workout.name}`} onClick={this.onClick}>
            <h4 className="workout-name"> {this.props.workout.name} </h4>
          </Link>
          <span> {this.props.workout.description} </span>
          <input type="button" value="Delete Workout" className="workout-remove-button" onClick={this.removeWorkout}/>
        </div>

      )
    }
  return (
    <li className="workout-preview">
    {workoutInfo}
    </li>
  )
},

removeWorkout() {
  let id = this.props.workout.objectId
  console.log(this.props.workoutId)
  store.loggedWorkout.get(this.props.workoutId).deleteWorkout(id)
 }
});

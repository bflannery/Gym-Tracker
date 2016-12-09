import React from 'react';
import store from '../store';
import { Link } from 'react-router';
import LoggedMovements from './LoggedMovements';
import moment from 'moment';


export default React.createClass({
  render() {


    let workoutInfo;
    console.log(this.props)
    if(this.props.workout.description === null) {
        workoutInfo = (
          <li className="workout-preview">
            <Link to = {`/workouts/${this.props.workout.name}`} onClick={this.onClick}>
              <h4 className="workout-name"> {this.props.workout.name}</h4>
              <input type="button" value="Remove From Cycle" className="workout-remove-button" onClick={this.removeWorkout}/>
            </Link>
          </li>
        )
    } else {
      workoutInfo = (
        <li className="workout-preview">
          <Link to = {`/workouts/${this.props.workout.name}`} onClick={this.onClick}>
            <h4 className="workout-name"> {this.props.workout.name} </h4>
          </Link>
          <span> {this.props.workout.description} </span>
          <input type="button" value="Delete Workout" className="workout-remove-button" onClick={this.removeWorkout}/>
        </li>

      )
    }
  return (
    <div>
    {workoutInfo}
    </div>
  )
},

removeWorkout() {
  let id = this.props.workout.objectId
  console.log(id)
  store.loggedWorkout.get(this.props.workout.objectId).deleteWorkout(id)
 }
});

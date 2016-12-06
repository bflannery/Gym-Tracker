import React from 'react';
import { Link } from 'react-router';
import store from '../store';
import moment from 'moment';



export default React.createClass({

  render() {
    let cycleWorkout;

    if(this.props.workout.workoutDate === "") {
      cycleWorkout = (

          <li className="cycle-workout">
            <Link to={`/workouts/${this.props.workout.name}`}>
              <h4 className="cycle-name">{this.props.workout.name}</h4>
            </Link>
            <input type="button" value="remove" className="workout-remove-button" onClick={this.removeWorkout}/>
          </li>

      );
    } else {
      cycleWorkout = (

        <li className="cycle-workout">
          <Link to={`/workouts/${this.props.workout.name}`}>
            <h4 className="cycle-name">{this.props.workout.name}</h4>
          </Link>
            <span> {moment(this.props.workout.workoutDate).format('L')} </span>
          <input type="button" value="remove" className="workout-remove-button" onClick={this.removeWorkout}/>
        </li>
      );
  }
  return (
    <div>
      {cycleWorkout}
    </div>
  )
},

removeWorkout() {
  store.loggedCycle.get(this.props.cycleId).removeWorkoutFromCycle(this.props.workout.objectId)
}
})

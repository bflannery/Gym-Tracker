import React from 'react';
import { Link } from 'react-router';
import store from '../store';
import moment from 'moment';



export default React.createClass({

  render() {
    let cycleWorkout;

    if(this.props.cycleWorkout.workoutDate === "") {
      cycleWorkout = (

          <li className="cycle-workout">
            <Link to={`/workouts/${this.props.cycleWorkout.workoutname}`}>
              <h4 className="cycle-name">{this.props.cycleWorkout.workout.name}</h4>
            </Link>
            <input type="button" value="remove" className="workout-remove-button" onClick={this.removeWorkout}/>
          </li>

      );
    } else {
      cycleWorkout = (

        <li className="cycle-workout">
          <Link to={`/workouts/${this.props.cycleWorkout.workout.name}`}>
            <h4 className="cycle-name">{this.props.cycleWorkout.workout.name}</h4>
          </Link>
            <span> {moment(this.props.cycleWorkout.workoutDate).format('L')} </span>
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
  let id = this.props.cycleWorkout.objectId
  store.loggedCycle.get(this.props.cycleId).removeWorkoutFromCycle(id)
}
})

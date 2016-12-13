import React from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router';
import store from '../store';
import moment from 'moment';

export default React.createClass({

  getInitialState() {
    return {
      startDate: moment()
    }
  },

  render() {
    let cycleWorkout;

    if(!this.props.cycleWorkout.workoutDate) {

      cycleWorkout = (
          <li className="cycle-workout-preview">
            <Link to={`/workouts/${this.props.cycleWorkout.workout.name}`}>
              <h4 className="cycle-name">{this.props.cycleWorkout.workout.name}</h4>
            </Link>
            <span className="date"> Workout Date:
              <DatePicker className="date-picker" selected={this.props.startDate} onChange={this.handleChange}/>
            </span>
            <input type="button" value="Remove From Cycle" className="workout-remove-button" onClick={this.removeWorkout}/>
          </li>
        );
      } else {
      cycleWorkout = (
        <li className="workout-preview">
          <Link to={`/workouts/${this.props.cycleWorkout.workout.name}`}>
            <h4 className="cycle-name">{this.props.cycleWorkout.workout.name}</h4>
          </Link>
          <span className="date"> Workout Date:
            <DatePicker className="date-picker"  selected={moment(this.props.cycleWorkout.workoutDate)} onChange={this.handleChange} />
          </span>
          <input type="button" value="Remove From Cycle" className="workout-remove-button" onClick={this.removeWorkout}/>
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
},

handleChange(date) {
  let workoutDate = date.format()
  let cycleWorkoutId = this.props.cycleWorkout.objectId
  store.loggedCycle.get(this.props.cycleId).addDateToWorkout(workoutDate, cycleWorkoutId)
},

});

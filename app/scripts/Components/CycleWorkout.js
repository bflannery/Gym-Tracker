import React from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router';
import {browserHistory} from 'react-router';
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
          <div className="cycle-name-date">
            <h4 className="cycle-workout-name" onClick={this.onClick}>{this.props.cycleWorkout.workout.name}</h4>
            <span className="date"> Workout Date:
              <DatePicker className="date-picker" selected={this.props.startDate} onChange={this.handleChange}/>
            </span>
          </div>
        );
      } else {
      cycleWorkout = (
        <div className="cycle-name-date">
          <h4 className="cycle-workout-name" onClick={this.onClick}>{this.props.cycleWorkout.workout.name}</h4>
          <span className="date"> Workout Date:
            <DatePicker className="date-picker"  selected={moment(this.props.cycleWorkout.workoutDate)} onChange={this.handleChange} />
          </span>
        </div>
      );
    }
  return (
    <li className="cycle-workout-preview" >
        {cycleWorkout}
      <div className="remove-button-container">
        <input type="button" value="Remove From Cycle" className="workout-remove-button" onClick={this.removeWorkout}/>
      </div>
    </li>
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
onClick(){
  browserHistory.push(`/workouts/${this.props.cycleWorkout.workout.name}`)
}
});

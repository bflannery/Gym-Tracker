import React from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router';
import store from '../store';
import moment from 'moment';



export default React.createClass({

  getInitialState: function() {
    return {
      startDate: moment()
    };
  },

  handleChange: function(date) {
    this.setState({ startDate: date });
  },

  render() {
    let cycleWorkout;

    if(this.props.cycleWorkout.workoutDate === "") {
      cycleWorkout = (

          <li className="cycle-workout">
            <Link to={`/workouts/${this.props.cycleWorkout.workoutname}`}>
              <h4 className="cycle-name">{this.props.cycleWorkout.workout.name}</h4>
            </Link>
            <span className="date"> Workout Date:
              <DatePicker className="date-picker" ref="startDate" selected={this.state.startDate} onChange={this.handleChange} onSubmit={this.setWorkoutDate}/>
            </span>
            <input type="button" value="Remove From Cycle" className="workout-remove-button" onClick={this.removeWorkout}/>
          </li>

      );
    } else {
      cycleWorkout = (

        <li className="cycle-workout">
          <Link to={`/workouts/${this.props.cycleWorkout.workout.name}`}>
            <h4 className="cycle-name">{this.props.cycleWorkout.workout.name}</h4>
          </Link>
          <span className="date"> Workout Date:
            <DatePicker className="date-picker" ref="startDate" selected={this.state.startDate} onChange={this.handleChange} onSubmit={this.setWorkoutDate}/>
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

})

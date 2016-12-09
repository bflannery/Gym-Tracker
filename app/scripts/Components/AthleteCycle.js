import React from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router';
import store from '../store';



export default React.createClass({

  render() {
    console.log(this.props)
    return (
      <div>
      <li className="athlete-cycle">
          <Link to={`/cycles/${this.props.athleteCycle.cycle.name}`}>
            <h4 className="cycle-name">{this.props.athleteCycle.cycle.name}</h4>
          </Link>
          <input type="button" value="Remove From Athlete" className="workout-remove-button" onClick={this.removeWorkout}/>
        </li>
      </div>
    )
  }
})

//
// removeWorkout() {
//   let id = this.props.cycleWorkout.objectId
//   store.loggedCycle.get(this.props.cycleId).removeWorkoutFromCycle(id)
// },
//
// handleChange(date) {
//   let workoutDate = date.format()
//   let cycleWorkoutId = this.props.cycleWorkout.objectId
//   store.loggedCycle.get(this.props.cycleId).addDateToWorkout(workoutDate, cycleWorkoutId)
// },
//
// })

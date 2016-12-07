import React from 'react';
import store from '../store';
import { Link } from 'react-router';
import moment from 'moment';


export default React.createClass({
  render() {

    let loggedWorkout;

    if(this.props.workout.workoutDate === "") {
      loggedWorkout = (

          <li className="workout-preview">
            <Link to = {`/workouts/${this.props.workout.name}`} onClick={this.onClick}>
            <h4 className="workout-name"> {this.props.workout.name} </h4>
            </Link>
            <input type="submit" className="add-button" value="Add To Cycle" onClick={this.handleSubmit}/>
          </li>

      );
    } else {
      loggedWorkout = (

        <li className="workout-preview">
          <Link to = {`/workouts/${this.props.workout.name}`} onClick={this.onClick}>
          <h4 className="workout-name"> {this.props.workout.name} </h4>
          </Link>

          <span> {moment(this.props.workout.workoutDate).format('L')}</span>
          <input type="submit" className="add-button" value="Add To Cycle" onClick={this.handleSubmit}/>
        </li>

    );
  }
  return (
    <div>
      {loggedWorkout}
    </div>
  )
},

  handleSubmit(e) {
    e.preventDefault();
    let id = this.props.workout.objectId
    let date = this.props.workout.workoutDate
    store.loggedCycle.get(this.props.cycleId).addWorkoutToCycle({id: id, date: date})
  },

  removeWorkout() {
    store.loggedCycle.get(this.props.workout.objectId).remove()
  }
});

import React from 'react';
import store from '../store';
import { Link } from 'react-router';


export default React.createClass({
  render() {
    console.log(this.props.cycleId)
    return (
      <div className="workout-container">
        <li className="workout-preview">
          <Link to = {`/workouts/${this.props.workout.name}`} onClick={this.onClick}><h2> {this.props.workout.name} </h2>
          <input type="submit" value="Add To Cycle" onClick={this.handleSubmit}/>
          </Link>
        </li>
      </div>
    );
  },

  handleSubmit(e) {
    e.preventDefault();
    let workoutName = this.props.workout.name

    store.loggedCycle.get(this.props.cycleId).addWorkoutToCycle({
      name : workoutName
    });
  }
});

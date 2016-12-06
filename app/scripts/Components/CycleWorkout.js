import React from 'react';
import store from '../store';
import { Link } from 'react-router';


export default React.createClass({

  render() {
    return (

        <li className="cycle-workout">
          <Link to={`/workouts/${this.props.workout.name}`}>
            <h4 className="cycle-name">{this.props.workout.name}</h4>
          </Link>
          <input type="button" value="remove" className="workout-remove-button" onClick={this.removeWorkout}/>
        </li>

    );
},

removeWorkout() {
  store.loggedCycle.get(this.props.cycleId).removeWorkoutFromCycle(this.props.workout.objectId)
}
})

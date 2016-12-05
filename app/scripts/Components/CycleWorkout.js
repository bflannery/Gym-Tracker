import React from 'react';
import store from '../store';
import { Link } from 'react-router';


export default React.createClass({

  render() {

    console.log(this.props)
    return (
      <div>
        <li>
          <Link to={`/workouts/${this.props.workout.name}`}>
            <h4>{this.props.workout.name}</h4>
          </Link>
          <input type="button" value="remove" className="remove-button" onClick={this.removeWorkout}/>
        </li>
      </div>
    );
},

removeWorkout() {
  store.loggedCycle.get(this.props.cycleId).removeWorkoutFromCycle(this.props.workout.objectId)
}
})

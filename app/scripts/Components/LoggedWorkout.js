import React from 'react';
import store from '../store';
import { Link } from 'react-router';
import LoggedMovements from './LoggedMovements';


export default React.createClass({
  render() {
    console.log(this.props)
    return (
      <div className="workout-container">
        <li className="workout-preview">
          <Link to = {`/workouts/${this.props.workout.name}`} onClick={this.onClick}><h2> {this.props.workout.name} </h2>
          </Link>
          <LoggedMovements movements={this.props.workout}/>
          <input type="submit" value="Add To Cycle" onClick={this.handleSubmit}/>

        </li>
      </div>
    );
  },

  handleSubmit(e) {
    e.preventDefault();

    let id = this.props.workout.objectId
    store.loggedCycle.get(this.props.cycleId).addWorkoutToCycle({

      id : id
    });
  }
});

import React from 'react';
import store from '../store';
import { Link } from 'react-router';
import {browserHistory} from 'react-router';
import moment from 'moment';


export default React.createClass({

  render() {
    return (
      <li className="workout-preview-container">
        <div className="workout-preview" onClick={this.onClick}>
          <h4 className="workout-name"> {this.props.workout.name} </h4>
          <span className="workout-description"> {this.props.workout.description} </span>
        </div>
        <div>
          <input type="submit" className="add-workout-button" value="Add To Cycle" onClick={this.handleSubmit}/>
        </div>
      </li>
  )
},
  handleSubmit(e) {
    e.preventDefault();
    let id = this.props.workout.objectId
    let name = this.props.workout.name
    store.loggedCycle.get(this.props.cycleId).addWorkoutToCycle({id: id, name: name})
  },
  removeWorkout() {
    store.loggedCycle.get(this.props.workout.objectId).remove()
  },

  onClick() {
    browserHistory.push(`/workouts/${this.props.workout.name}`)
  }
});

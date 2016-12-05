import React from 'react';
import store from '../store';
import { Link } from 'react-router';
import moment from 'moment';


export default React.createClass({
  render() {
console.log(this.props)
    return (

        <li className="workout-preview">
          <Link to = {`/workouts/${this.props.workout.name}`} onClick={this.onClick}>
          <h4 className="workout-name"> {this.props.workout.name} </h4>
          </Link>
          <span> {moment(this.props.workout.created).format('L')}</span>
          <input type="submit" className="add-button" value="Add To Cycle" onClick={this.handleSubmit}/>
        </li>

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

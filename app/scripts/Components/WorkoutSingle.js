import React from 'react';
import store from '../store';
import { Link } from 'react-router';


export default React.createClass({
  render() {
    return (
      <div className="workout-container">
        <li className="workout-preview">
          <Link to = {`/workouts/${this.props.workout.name}`} onClick={this.onClick}><h2> {this.props.workout.name} </h2>
          </Link>
        </li>
      </div>
    );
  }
});

import React from 'react';
import store from '../store';
import { Link } from 'react-router';
import LoggedMovements from './LoggedMovements';
import moment from 'moment';


export default React.createClass({
  render() {

    return (
        <li className="workout-preview">
          <Link to = {`/workouts/${this.props.workout.name}`} onClick={this.onClick}>
          <h4 className="workout-name"> {this.props.workout.name} </h4>
          </Link>
            <span> {moment(this.props.workout.created).format('L')} </span>
            <LoggedMovements movements={this.props.workout}/>
        </li>
    );
  }
});

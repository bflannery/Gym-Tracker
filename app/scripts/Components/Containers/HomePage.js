import React from 'react'
import store from '../../store';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

export default React.createClass({

  render(){
    return (
      <div className="main-container">
      <li className="home-workout-container">
        <Link to="/workouts" className="home-container-nav"> Workouts </Link>
      </li>
      <li className="home-cycle-container">
        <Link to="/cycles" className="home-container-nav"> Cycles </Link>
      </li>
      <li className="home-program-container">
        <Link to="/programs" className="home-container-nav"> Programs </Link>
      </li>
      </div>
    )
  }
})

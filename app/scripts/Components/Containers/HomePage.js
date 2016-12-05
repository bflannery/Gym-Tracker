import React from 'react'
import store from '../../store';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

export default React.createClass({

  render(){
    return (
      <div className="main-container">
      <div className="home-workout" onClick={this.WorkoutLink}>
        <h2 className="section-title"> Workouts </h2>
        <div className="home-workout-container"></div>
      </div>
      <div className="home-cycle" onClick={this.CycleLink}>
        <h2 className="section-title"> Cycles </h2>
        <div className="home-cycle-container"></div>
      </div>
      </div>


    )
  },

  WorkoutLink () {
      browserHistory.push('/workouts')
  },

  CycleLink() {
    browserHistory.push('/cycles')
  }


});

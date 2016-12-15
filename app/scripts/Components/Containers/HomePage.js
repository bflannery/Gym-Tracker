import React from 'react'
import store from '../../store';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import LoggedWorkouts from '../LoggedWorkouts';
import LoggedCycles from '../LoggedCycles';
import AthleteList from '../AthleteList';

export default React.createClass({
  render(){
    return (
      <div className="main-container">
        <div className="home-hero"></div>

        <div className="routes-container">

        <div className="home-workout-container" onClick={this.WorkoutLink}>
        <img src="../../assets/images/weight.png" height="75" weight="75" className="home-icon"/>
          <h2 className="section-title"> Workouts </h2>
        </div>

        <div className="home-cycle-container" onClick={this.CycleLink}>
            <img src="../../assets/images/cycle-icon.png" height="75" weight="75" className="home-icon"/>
          <h2 className="section-title"> Cycles </h2>
        </div>

        <div className="home-athlete-container" onClick={this.AthleteLink}>
          <img src="../../assets/images/athletes-icon.png" height="75" weight="75" className="home-icon"/>
          <h2 className="section-title"> Athletes </h2>
        </div>
      </div>
      </div>
    )
  },
  WorkoutLink () {
    browserHistory.push('/workouts')
  },
  CycleLink() {
    browserHistory.push('/cycles')
  },

  AthleteLink () {
    browserHistory.push('/athletes')
  }
});

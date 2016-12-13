import React from 'react'
import store from '../../store';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import LoggedWorkouts from '../LoggedWorkouts';

export default React.createClass({

  getInitialState() {
        return {
          loggedWorkout: store.loggedWorkout.toJSON()
        }
      },
      componentDidMount() {
        store.loggedWorkout.fetch();
        store.loggedWorkout.on('update change', this.updateStatus);
      },
      componentWillUnmount() {
        store.loggedWorkout.off('update change', this.updateStatus);
      },
      updateStatus(){
        if(store.loggedWorkout.find(this.props.params)=== undefined) {
          this.setState({
            loggedWorkout: store.loggedWorkout.toJSON()
        });
      } else {
          this.setState({
            loggedWorkout: store.loggedWorkout.toJSON()
          });
        }
      },

  render(){
    console.log(this.state)
    return (

      <div className="main-container">
        <div className="home-hero"></div>
        <div className="routes-container">
          <div className="home-workout" onClick={this.WorkoutLink}>
            <div className="home-workout-container"></div>
            <h2 className="section-title"> Workouts </h2>
          </div>

          <div className="home-cycle" onClick={this.CycleLink}>
            <div className="home-cycle-container"></div>
            <h2 className="section-title"> Cycles </h2>
          </div>

          <div className="home-athletes" onClick={this.AthleteLink}>
            <div className="home-athlete-container"></div>
            <h2 className="section-title"> Athletes </h2>
          </div>
        </div>
        <div className="recent workouts">
          <h2> Recent Workouts </h2>
          <LoggedWorkouts workouts={this.state.loggedWorkout}/>

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

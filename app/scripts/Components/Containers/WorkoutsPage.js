import React from 'react';
import { Link } from 'react-router';

import store from '../../store';

import WorkoutList from '../WorkoutList'
import NewWorkoutPage from './NewWorkoutPage';

export default React.createClass ({

  getInitialState() {
    return {
      loggedWorkout: store.loggedWorkout.toJSON()
    }
  },
  componentWillMount() {
    store.loggedWorkout.fetch();
  },

  componentDidMount() {
    store.loggedWorkout.fetch();
    store.loggedWorkout.on('update change', this.updateStatus);
  },
  componentWillUnmount() {
    store.loggedWorkout.off('update change', this.updateStatus);
  },
  updateStatus(){
    this.setState({loggedWorkout: store.loggedWorkout.toJSON()})
},

  render() {
    return (
      <div className="main-container">
        <h2> Workouts </h2>
        <div className="workouts">
          <WorkoutList workouts={this.state.loggedWorkout}/>
          <Link to="/workouts/new"> Make New Workout </Link>
        </div>
      </div>
    );
  }
});

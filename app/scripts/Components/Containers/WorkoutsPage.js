import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

import store from '../../store';

import WorkoutList from '../WorkoutList'
import NewWorkoutForm from '../NewWorkoutForm';

export default React.createClass ({

  getInitialState() {
    return {
      workoutList: {},
      loggedWorkout: store.loggedWorkout.toJSON(),
      session: store.session.toJSON()
    }
  },
  componentDidMount() {
    store.loggedWorkout.fetch();
    store.loggedWorkout.on('update change', this.updateStatus);

  store.session.fetch();
  store.session.on('update change', this.updateStatus);
  },
  componentWillUnmount() {
    store.loggedWorkout.off('update change', this.updateStatus);
    store.session.off('update change', this.updateStatus);

  },
  updateStatus(){
    if(store.loggedWorkout.find(this.props.params)=== undefined) {
      this.setState({
        workoutList: {},
        loggedWorkout: store.loggedWorkout.toJSON(),
        session: store.session.toJSON()
    });
  } else {
      this.setState({
        workoutList: store.loggedWorkout.find(this.props.params).toJSON(),
        loggedWorkout: store.loggedWorkout.toJSON(),
        session: store.session.toJSON()
      });
    }
  },
  render() {
    return (
      <div className="main-container">
      <div className="workout-hero"></div>
        <div className="workout-page">
          <h2 className="section-title"> Workouts </h2>
            <div className="workouts">
              <NewWorkoutForm/>
              <WorkoutList workouts={this.state.loggedWorkout} workoutId={this.state.workoutList.objectId}/>
            </div>
        </div>
      </div>
    );
  }
});

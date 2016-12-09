import React from 'react';
import { Link } from 'react-router';
import { browserHistory} from 'react-router';

import store from '../../store';

import WorkoutList from '../WorkoutList'
import NewWorkoutForm from '../NewWorkoutForm';

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
    console.log(this.state)
    return (
      <div className="main-container">
        <div className="workout-page">
          <h2> Workouts </h2>
            <div className="workouts">
              <NewWorkoutForm/>
              <WorkoutList workouts={this.state.loggedWorkout}/>
            </div>
        </div>
      </div>
    );
  },

});

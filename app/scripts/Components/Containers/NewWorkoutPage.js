import React from 'react';

import store from '../../store';

import NewWorkoutForm from '../NewWorkoutForm';
import MovementList from '../MovementList';


export default React.createClass ({
  render() {
    return (
      <div className="workout-container">
      <h2> Make a New Workout </h2>
      <NewWorkoutForm />
      <MovementList />
      </div>
    );
  }
});

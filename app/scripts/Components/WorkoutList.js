import React from 'react';
import WorkoutSingle from './WorkoutSingle';


//Will display a list of Workouts
//Needs to pull from workout collection

export default React.createClass({
  render() {
    return (
        <ul className="workout-list">
          <WorkoutSingle />
        </ul>
    );
  }
});

// display a form to set new workout made of movements
// will pull from movements collection
// will push to workouts collection
import React from 'react';
import NewWorkoutListItem from './NewWorkoutListItem';

export default React.createClass({

  render() {

    let newWorkoutMovementList = this.props.workout.movements.map((movement, i ,arr) => {
      return <NewWorkoutListItem key={i} movement={movement}/>;
  });

    return (
      <div className="workout-template-container">
        <h2> New Workout Template </h2>
          <ul className="results">
            {newWorkoutMovementList}
          </ul>
      </div>
    );
  }
});

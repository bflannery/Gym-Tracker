import React from 'react';



//Will display a single work made up of a list of movements
//Will pull from movements collection
//Will push to workouts collection

export default React.createClass({
  render() {
    return (
      <div className="workout-container">
        <h2> Workout </h2>
        <li className="workout-preview">
          <span> {this.props.workout.movement}</span>
          <span> Reps: {this.props.workout.reps}</span>
          <span> Sets: {this.props.workout.sets}</span>
          <span> Weight: {this.props.workout.weight}</span>
        </li>
      </div>
    );
  }
});

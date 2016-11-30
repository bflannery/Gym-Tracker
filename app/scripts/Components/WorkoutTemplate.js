import React from 'react';
import WorkoutTemplateItem from './WorkoutTemplateItem';

export default React.createClass({

  render() {
    console.log(this.props)

    let movementList = this.props.workout.movements.map((movement, i ,arr) => {
      return <WorkoutTemplateItem key={i} movement={movement}/>;
  });

    return (
      <div className="workout-template-container">
        <h2> New Workout Template </h2>
          <ul className="results">
            {movementList}
          </ul>
      </div>
    );
  }
});

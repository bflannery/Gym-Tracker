// display a form to set new workout made of movements
// will pull from movements collection
// will push to workouts collection
import React from 'react';
import NewWorkoutListItem from './NewWorkoutListItem';

export default React.createClass({
  render() {
  console.log(this.props)
    return(

      <div className="new-workout">
        <h3> New Workout </h3>
        <ul>
          <NewWorkoutListItem />
        </ul>
      </div>
    );
  }
});

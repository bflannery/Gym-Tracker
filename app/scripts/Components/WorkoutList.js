import React from 'react';
import WorkoutSingle from './WorkoutSingle';

export default React.createClass({
  render() {
    console.log(this.props)
    let workouts;

    if(this.props.workouts === undefined) {
      workouts = <li> No Workouts </li>;
      } else {
          workouts = this.props.workouts.map((workout,i,arr) =>{
            return <WorkoutSingle key={i} workout={workout} workoutId={this.props.workoutId}/>;
          });
        }

    return (
        <ul className="workout-list">
          {workouts}
        </ul>
      );
    }
});

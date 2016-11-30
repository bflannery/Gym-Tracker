import React from 'react';
import WorkoutSingle from './WorkoutSingle';

export default React.createClass({
  render() {

    let workouts;

    if(this.props.workouts.length < 1) {
      workouts = <li> No Workouts </li>;

    } else {
      workouts = this.props.workouts.map((workout,i,arr) =>{
        return <WorkoutSingle key={i} workout={workout}/>;

      });
    }

    return (

        <ul className="workout-list">
          {workouts}
        </ul>
    );
  }
});

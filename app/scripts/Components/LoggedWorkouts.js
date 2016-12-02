import React from 'react';
import LoggedWorkout from './LoggedWorkout';

export default React.createClass({
  render() {

    let workouts;

    if(this.props.workouts.length < 1) {
      workouts = <li> No Workouts </li>;

    } else {
      workouts = this.props.workouts.map((workout,i,arr) =>{
        return <LoggedWorkout key={i} workout={workout} cycleId={this.props.cycleId}/>;

      });
    }

    return (

        <ul className="workout-list">
          {workouts}
        </ul>
    );
  }
});

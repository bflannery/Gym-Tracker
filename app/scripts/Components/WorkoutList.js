import React from 'react';
import WorkoutSingle from './WorkoutSingle';


//Will display a list of Workouts
//Needs to pull from workout collection

export default React.createClass({
  render() {
    console.log(this.props)
    
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

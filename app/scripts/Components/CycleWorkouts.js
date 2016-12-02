import React from 'react';
import CycleWorkout from './CycleWorkout';

import store from '../store';

export default React.createClass({
  render(){


    let cycleWorkouts;

    if(this.props.workouts.workouts === undefined) {
      cycleWorkouts = <div />
    } else {

      cycleWorkouts = this.props.workouts.workouts.map((workout, i, arr)=>{
      return (
      <CycleWorkout key={i} workout={workout}/>
    )
    })
    }

    return (
      <div>
        <ul>
          {cycleWorkouts}
        </ul>
      </div>
    )
  }
})


//

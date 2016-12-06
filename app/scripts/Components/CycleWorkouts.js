import React from 'react';
import CycleWorkout from './CycleWorkout';

import store from '../store';

export default React.createClass({
  render(){
    console.log(this.props)
    let cycleWorkouts;

    if(this.props.workouts=== undefined) {
      cycleWorkouts = <div />
    } else {

      cycleWorkouts = this.props.workouts.map((workout, i, arr)=>{
      return (
      <CycleWorkout key={i} workout={workout} cycleId={this.props.cycleId}/>
    )
    })
    }

    return (

        <ul className="cycle-workout-list">
          {cycleWorkouts}
        </ul>

    )
  }
})


//

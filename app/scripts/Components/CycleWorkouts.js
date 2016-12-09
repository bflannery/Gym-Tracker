import React from 'react';
import CycleWorkout from './CycleWorkout';

import store from '../store';

export default React.createClass({
  render(){
    let cycleWorkouts;

    if(this.props.cycleWorkouts === undefined) {

      cycleWorkouts = <div />
        } else {
      cycleWorkouts = this.props.cycleWorkouts.map((cycleWorkout, i, arr)=>{
        return  <CycleWorkout key={i} cycleWorkout={cycleWorkout} cycleId={this.props.cycle.objectId} cycleStartDate={this.props.cycle.cycleStartDate}/>
        });
      }

    return (

        <ul className="cycle-workout-list">
          {cycleWorkouts}
        </ul>

    )
  }
})

//

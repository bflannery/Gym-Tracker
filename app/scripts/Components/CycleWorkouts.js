import React from 'react';
import CycleWorkout from './CycleWorkout';

import store from '../store';

export default React.createClass({
  render(){
    let cycleWorkouts;

    if(!this.props.cycleWorkouts) {
      cycleWorkouts = <div />
        } else {
      cycleWorkouts = this.props.cycleWorkouts.map((cycleWorkout, i, arr)=>{
        if(window.localStorage.getItem('ownerId') === this.props.cycleWorkouts[i].ownerId) {
        return  <CycleWorkout key={i} cycleWorkout={cycleWorkout} cycleId={this.props.cycle.objectId} cycleStartDate={this.props.cycle.cycleStartDate}/>
      }
        });
      }
    return (
      <ul className="cycle-workout-list">
        {cycleWorkouts}
      </ul>
    )
  }
});

import React from 'react';

import store from '../store';

import LoggedMovement from './LoggedMovement';

export default React.createClass({
  render(){
      let workoutMovements;

      if(this.props.movements === null) {
        workoutMovements = <div />
      } else {
        workoutMovements = this.props.movements.map((movement, i, arr)=>{
        return (
        <LoggedMovement key={i} movement={movement} workoutId={this.props.workoutId}/>
        )
      });
    }
    return (
      <ul className="logged-workout-container">
        {workoutMovements}
      </ul>
      )
    }
});

import React from 'react';

import store from '../store';

import LoggedMovement from './LoggedMovement';

export default React.createClass({
  render(){
    let workoutMovements;

    if(this.props.movements === undefined) {
      workoutMovements = <div />
    } else {

      workoutMovements = this.props.movements.map((movement, i, arr)=>{
      return (
      <LoggedMovement key={i} movement={movement}/>
    )
    })
  }
    return (
      <div>
      <ul>{workoutMovements}</ul>
      </div>
    )
  }
})

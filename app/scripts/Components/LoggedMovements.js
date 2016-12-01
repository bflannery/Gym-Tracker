import React from 'react';

import store from '../store';

import LoggedMovement from './LoggedMovement';

export default React.createClass({
  render(){
    console.log(this.props)

    let workoutMovements = this.props.movements((movement, i, arr)=>{
      return <LoggedMovement key={i} movement={movement}/>

    })
    return (
      <div>
      <ul>{workoutMovements}</ul>
      </div>
    )
  }
})

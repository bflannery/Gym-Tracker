import React from 'react';
// import Buttons from './buttons';
import store from '../store';


export default React.createClass({

  render() {

    return (

        <li>
          <span> {this.props.movement.name} : </span>
          <span> {this.props.movement.sets} X {this.props.movement.reps} at {this.props.movement.weight} </span>
          <button value="remove" className="remove-button" onClick={this.removeMovement}>Remove</button>
        </li>

    );
},

removeMovement() {
  store.loggedWorkout.get(this.props.workoutId).removeMovementFromWorkout(this.props.movement.objectId);
}
})

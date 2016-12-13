import React from 'react';
import store from '../store';

export default React.createClass({
  render() {
    return (
        <li className="logged-movement">
          <h4 className="logged-movement-name"> {this.props.movement.name} : </h4>
          <span> {this.props.movement.sets} X {this.props.movement.reps} at {this.props.movement.weight} </span>
          <button value="remove" className="remove-button" onClick={this.removeMovement}>Remove</button>
        </li>
      );
    },
removeMovement(e) {
  e.preventDefault();
  store.loggedWorkout.get(this.props.workoutId).removeMovementFromWorkout(this.props.movement.objectId);
  }
});

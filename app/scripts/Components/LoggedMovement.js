import React from 'react';
// import Buttons from './buttons';
import store from '../store';


export default React.createClass({

  render() {

    return (
      <div>
        <li>
          <span> {this.props.movement.name} : </span>
          <span> {this.props.movement.sets} X {this.props.movement.reps} at {this.props.movement.weight} </span>
          <input type="button" value="remove" className="remove-button" onClick={this.removeMovement}/>
        </li>
      </div>
    );
},

removeMovement() {
  store.loggedWorkout.get(this.props.workoutId).removeMovementFromWorkout(this.props.movement.objectId);
}
})

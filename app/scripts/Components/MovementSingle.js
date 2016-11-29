import React from 'react';
import Buttons from './buttons';
import store from'../store';


export default React.createClass({
  render() {
    return (
      <li className="movement-preview">
        <Buttons add={this.addToWorkout}/>
        <div className="movement-name"> {this.props.movement.get('name')}</div>

      </li>
    );
  },

  addToWorkout() {
    store.workout.addMovement(this.props.movement);
  }
});

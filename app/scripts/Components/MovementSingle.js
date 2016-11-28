import React from 'react';
import Buttons from './buttons';
import store from'../store';


export default React.createClass({
  render() {
    return (
      <li className="movement-preview">
        <div className="movement-name"> {this.props.movement.get('name')}</div>
        <Buttons add={this.addToWorkout}/>
      </li>
    );
  },

  addToWorkout() {
    store.workout.addMovement(this.props.movement);
  }
});

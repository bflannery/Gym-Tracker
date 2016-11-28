import React from 'react';
import Buttons from './Buttons';
import Efforts from './Efforts'
import store from'../store';


export default React.createClass({
  render() {
    console.log(this.props)
    return (
      <li className="movement-preview">
        <div className="movement-name"> {this.props.movement.get('name')}</div>
        <Buttons add={this.addToWorkout} remove={this.removeFromWorkout}/>
        <Efforts />
        <input onClick={this.handleClick} type="submit" value="Save Workout"/>
      </li>
    );
  },

  addToWorkout() {
    store.workout.addMovement(this.props.movement);
  },

  removeFromWorkout() {
    store.workout.removeMovement(this.props.movement);
  },

  handleClick() {
    console.log('save this to backend!')
  }

});

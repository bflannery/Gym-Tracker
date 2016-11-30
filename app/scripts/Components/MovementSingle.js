import React from 'react';
// import Buttons from './buttons';
import store from '../store';


export default React.createClass({
  render() {
    console.log(this.props)
    return (
      <li className="movement-preview">
        <div className="movement-name" ref="movement"> {this.props.movement.get('name')}</div>
        <input type="submit" value="Add To Workout" onClick={this.handleSubmit}/>
      </li>
    );
  },

  handleSubmit(e) {
    e.preventDefault();
    let name = this.props.movement.get('name')
    console.log('name')
    console.log(this.props.workoutId)
    store.loggedWorkout.get(this.props.workoutId).addMovementToWorkout({name});
  }
});

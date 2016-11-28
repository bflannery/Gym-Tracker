import React from 'react';
import Buttons from './buttons';
import store from'../store';


export default React.createClass({
  render() {
    console.log(this.props)
    return (
      <li className="movement-preview">
        <div className="movement-name"> {this.props.movement.get('name')}</div>
        <Buttons add={this.addToWorkout}/>
      </li>
    );
  },

  addToWorkout() {
    store.workout.addItem(this.props.movement);
  }
});

import React from 'react';
import store from '../store';

export default React.createClass({
  render() {
    return (
      <div className="create-workout">
        <input type="text" ref="create" className="new-input" placeholder="Create New Workout"/>
        <input type="submit" value="Create" className="create-button" onClick={this.handleClick}/>
      </div>
    );
  },

  handleClick(){
    let workoutName = this.refs.create.value;
    store.loggedWorkout.create({ name : workoutName });
  }
});

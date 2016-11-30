import React from 'react';

import store from '../store'

export default React.createClass ({
  render () {
    return (
      <div className="create-workout">
        <h2> Create New Workout </h2>
        <input type="text" ref="create" placeholder="Create New Workout"/>
        <input type="submit" value="Create" onClick={this.handleClick}/>
      </div>
    );
  },
  handleClick(){
    let workoutName = this.refs.create.value;
    store.loggedWorkout.addWorkout({
    name : workoutName
    });

  }
});

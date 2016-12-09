import React from 'react';
import store from '../store';

export default React.createClass({
  render() {
    return (
      <div className="create-workout">
        <input type="text" ref="create" className="new-input" placeholder="Create New Workout"/>
        <input type="text" ref="workoutDescription" className="workout-info" placeholder="Description"/>
        <input type="submit" value="Create" className="create-button" onClick={this.createWorkout}/>
      </div>
    );
  },

  createWorkout(){
    let workoutName = this.refs.create.value;
    let workoutDescription = this.refs.workoutDescription.value;
    store.loggedWorkout.create({ name : workoutName , description : workoutDescription });
  }
});

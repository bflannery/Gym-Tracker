import React from 'react';
import Buttons from './Buttons';
import store from'../store';


export default React.createClass({
  render() {
    return (
      <li className="movement-preview">
        <div className="movement-name" ref="movement"> {this.props.movement.get('name')}</div>
          <Buttons remove={this.removeFromWorkout}/>
          <label>Reps:
            <input type="text" placeholder="0" ref="reps" id="reps"/>
          </label>
          <label> Sets:
            <input type="text" placeholder="0" ref="sets" id="sets"/>
          </label>
          <label> Weight:
            <input type="text" placeholder="0" ref="weight" id="weight"/>
          </label>
        <input onClick={this.handleClick} type="submit" value="Save Workout"/>
      </li>
    );
  },

  removeFromWorkout() {
    store.workout.removeMovement(this.props.movement);
  },

  handleClick() {
    let reps = this.refs.reps.value;
    let sets = this.refs.sets.value;
    let weight = this.refs.weight.value;
    let name = this.props.movement.get('name');


    store.loggedWorkout.addWorkout({

    movement   : name,
    reps   : reps,
    sets   : sets,
    weight : weight

  });
  }

});

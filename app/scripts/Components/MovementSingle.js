import React from 'react';
// import Buttons from './buttons';
import store from '../store';


export default React.createClass({
  render() {
    return (
      <li className="movement-preview">
        <form>
        <h2 className="movement-name" ref="movement"> {this.props.movement.get('name')}</h2>
        <ul>
          <li className="movement-info">
          <label>Reps:
            <input type="text" placeholder="0" ref="reps" className="workout-details"/>
          </label>
          </li>

          <li className="movement-info">
            <label> Sets:
              <input type="text" placeholder="0" ref="sets" className="workout-details"/>
              </label>
          </li>

        <li className="movement-info">
          <label> Weight:
            <input type="text" placeholder="0" ref="weight" className="workout-details"/>
          </label>
        </li>

        <li className="movement-info">
          <label> Notes:
            <textarea type="text" placeholder="Notes" ref="notes" className="workout-details"/>
          </label>
        </li>

        <input type="submit" value="Add To Workout" onClick={this.handleSubmit}/>
        </ul>
        </form>
      </li>
    );
  },


  handleSubmit(e) {
    e.preventDefault();
    let name = this.props.movement.get('name')
    let reps = this.refs.reps.value;
    let sets = this.refs.sets.value;
    let weight = this.refs.weight.value;
    let notes = this.refs.notes.value;

    store.loggedWorkout.get(this.props.workoutId).addMovementToWorkout({

      name   : name,
      reps   : reps,
      sets   : sets,
      weight : weight,
      notes  : notes,
      created : new Date()

    });

    this.refs.reps.value = "";
    this.refs.sets.value = "";
    this.refs.weight.value = "";
    this.refs.notes.value = "";
  }
});

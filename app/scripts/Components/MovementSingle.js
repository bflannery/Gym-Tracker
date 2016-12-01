import React from 'react';
// import Buttons from './buttons';
import store from '../store';


export default React.createClass({
  render() {
    return (
      <li className="movement-preview">
        <div className="movement-name" ref="movement"> {this.props.movement.get('name')}</div>
        <ul className="movement-info">
          <li>
          <label>Reps:
            <input type="text" placeholder="0" ref="reps" className="workout-details"/>
          </label>
        </li>

        <li>
          <label> Sets:
            <input type="text" placeholder="0" ref="sets" className="workout-details"/>
          </label>
        </li>

        <li>
          <label> Weight:
            <input type="text" placeholder="0" ref="weight" className="workout-details"/>
          </label>
        </li>

        <li>
          <label> Time:
            <input type="text" placeholder="Notes" ref="time" className="workout-details"/>
          </label>
        </li>

        <li>
          <label> Notes:
            <textarea type="text" placeholder="Notes" ref="notes" className="workout-details"/>
          </label>
        </li>

        <input type="submit" value="Add To Workout" onClick={this.handleSubmit}/>
        </ul>

      </li>
    );
  },

  handleSubmit(e) {
    e.preventDefault();
    let name = this.props.movement.get('name')
    let reps = this.refs.reps.value;
    let sets = this.refs.sets.value;
    let weight = this.refs.weight.value;
    let time = this.refs.time.value;
    let notes = this.refs.notes.value;

    store.loggedWorkout.get(this.props.workoutId).addMovementToWorkout({

      name   : name,
      reps   : reps,
      sets   : sets,
      weight : weight,
      time   : time,
      notes  : notes,

    });
  }
});

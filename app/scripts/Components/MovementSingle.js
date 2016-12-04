import React from 'react';
import moment from 'moment';
// import Buttons from './buttons';
import store from '../store';


export default React.createClass({
  render() {
    return (
      <li className="movement-preview">
        <form>
        <h4 className="movement-name" ref="movement"> {this.props.movement.get('name')}</h4>
        <ul className= "movement-list-info">
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
    let created = new Date();

    store.loggedWorkout.get(this.props.workoutId).addMovementToWorkout({

      name   : name,
      reps   : reps,
      sets   : sets,
      weight : weight,
      created : created

    });

    this.refs.reps.value = "";
    this.refs.sets.value = "";
    this.refs.weight.value = "";
  }
});

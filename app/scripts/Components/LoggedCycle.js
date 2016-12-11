import React from 'react';
import store from '../store';
import { Link } from 'react-router';
import moment from 'moment';


export default React.createClass({
  render() {
    console.log(this.props)
    return (
      <div>
          <li className="workout-preview">
              <Link to = {`/workouts/${this.props.cycle.name}`} onClick={this.onClick}>
              <h4 className="workout-name"> {this.props.cycle.name} </h4>
              </Link>
              <input type="submit" className="add-button" value="Add Cycle" onClick={this.handleSubmit}/>
            </li>
    </div>
  )
},

  handleSubmit(e) {
    e.preventDefault();
    let id = this.props.cycle.objectId
    let name = this.props.cycle.name
    store.athletes.get(this.props.athleteId).addCycleToAthlete({id: id, name: name})
  },

  removeWorkout() {
    store.athletes.get(this.props.athlete.objectId).remove()
  }
});

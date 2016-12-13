import React from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router';
import store from '../store';



export default React.createClass({

  render() {
    return (
      <div>
      <li className="athlete-cycle">
          <Link to={`/cycles/${this.props.athleteCycle.cycle.name}`}>
            <h4 className="cycle-name">{this.props.athleteCycle.cycle.name}</h4>
          </Link>
          <input type="button" value="Remove From Athlete" className="workout-remove-button" onClick={this.removeWorkout}/>
        </li>
      </div>
    )
  },
  removeWorkout() {
    let id = this.props.athleteCycle.objectId
    store.athletes.get(this.props.athleteId).removeCycleFromAthlete(id)
  }
})

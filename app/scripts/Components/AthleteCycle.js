import React from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router';
import store from '../store';
import moment from 'moment';



export default React.createClass({

  render() {
    let athleteCycle;

    if(!this.props.athleteCycle.cycle.cycleStartDate) {
      athleteCycle = (
        <li className="athlete-cycle">
            <Link to={`/cycles/${this.props.athleteCycle.cycle.name}`}>
              <h4 className="athlete-cycle-name">{this.props.athleteCycle.cycle.name}</h4>
            </Link>
            <input type="button" value="Remove From Athlete" className="workout-remove-button" onClick={this.removeWorkout}/>
        </li>
      )
    } else {
      athleteCycle = (
        <li className="athlete-cycle">
            <Link to={`/cycles/${this.props.athleteCycle.cycle.name}`}>
              <h4 className="athlete-cycle-name">{this.props.athleteCycle.cycle.name}</h4>
              <span> {moment(this.props.athleteCycle.cycleStartDate).format('L')} - {moment(this.props.athleteCycle.cycle.cycleEndDate).format('L')}</span>
            </Link>
            <input type="button" value="Remove From Athlete" className="workout-remove-button" onClick={this.removeWorkout}/>
        </li>
      )
    }
    return (
      <div>
      {athleteCycle}
      </div>
    )
  },
  removeWorkout() {
    let id = this.props.athleteCycle.objectId
    store.athletes.get(this.props.athleteId).removeCycleFromAthlete(id)
  }
})

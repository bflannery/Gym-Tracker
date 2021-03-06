import React from 'react';
import store from '../store';
import { Link } from 'react-router';
import moment from 'moment';


export default React.createClass({

  render() {
  let loggedCycle;
  if(!this.props.cycle.cycleStartDate) {
    loggedCycle = (

        <li className="cycle-preview">
          <Link to = {`/cycles/${this.props.cycle.name}`} onClick={this.onClick}>
            <h4 className="workout-name"> {this.props.cycle.name} </h4>
          </Link>
          <input type="submit" className="add-button" value="Add Cycle" onClick={this.handleSubmit}/>
        </li>

      )
    } else {
      loggedCycle = (

          <li className="cycle-preview">
            <Link to = {`/cycles/${this.props.cycle.name}`} onClick={this.onClick}>
              <h4 className="workout-name"> {this.props.cycle.name} </h4>
                <span> {moment(this.props.cycle.cycleStartDate).format('L')} - {moment(this.props.cycle.cycleEndDate).format('L')}</span>
            </Link>
            <input type="submit" className="add-button" value="Add Cycle" onClick={this.handleSubmit}/>
          </li>

      )
    }
    return (
      <div className="cycle-preview-container">
      {loggedCycle}
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

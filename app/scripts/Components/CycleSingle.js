import React from 'react';
import store from '../store';
import { Link } from 'react-router';
import moment from 'moment';


export default React.createClass({
  render() {
    console.log(this.props)
    let cycle;

    if(this.props.cycle.cycleStartDate === null && this.props.cycle.cycleEndDate === null) {

      cycle = (
          <li className="cycle-preview">
            <Link to = {`/cycles/${this.props.cycle.name}`} onClick={this.onClick}>
              <h4> {this.props.cycle.name} </h4>
            </Link>
              <span> {this.props.cycle.description} </span>
                <input type="button" value="Delete Cycle" className="cycle-remove-button" onClick={this.removeCycle}/>
          </li>
      )
    } else {

      cycle = (
        <li className="cycle-preview">
          <Link to = {`/cycles/${this.props.cycle.name}`} onClick={this.onClick}>
            <h4> {this.props.cycle.name} </h4>
          </Link>
          <span> {moment(this.props.cycle.cycleStartDate).format('L')} - {moment(this.props.cycle.cycleEndDate).format('L')}</span>
          <span> {this.props.cycle.description} </span>
          <input type="button" value="Delete Cycle" className="cycle-remove-button" onClick={this.removeCycle}/>
        </li>
    )
  }
  return (
    <div>
      {cycle}
    </div>
  )
},
removeCycle() {
  let id = this.props.cycle.objectId
  console.log(this.props.cycleId)
  store.loggedCycle.get(this.props.cycleId).deleteCycle(id)
 }
});

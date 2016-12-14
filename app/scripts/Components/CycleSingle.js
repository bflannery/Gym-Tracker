import React from 'react';
import store from '../store';
import { Link } from 'react-router';
import { browserHistory} from 'react-router';
import moment from 'moment';


export default React.createClass({
  render() {
    let cycle;
    if(!this.props.cycle.cycleStartDate) {
      cycle = (
          <div>
            <h4 className="cycle-name"> {this.props.cycle.name} </h4>
            <span> {this.props.cycle.description} </span>
            <input type="button" value="Delete Cycle" className="cycle-remove-button" onClick={this.removeCycle}/>
          </div>
        )
      } else {
      cycle = (
          <div>
            <h4 className="cycle-name"> {this.props.cycle.name} </h4>
            <span> {moment(this.props.cycle.cycleStartDate).format('L')} - {moment(this.props.cycle.cycleEndDate).format('L')}</span>
            <span className="cycle-description"> {this.props.cycle.description} </span>
            <input type="button" value="Delete Cycle" className="cycle-remove-button" onClick={this.removeCycle}/>
          </div>
        );
      }
      return (
        <li className="cycle-preview" onClick={this.onClick}>
        {cycle}
      </li>
    )
  },
removeCycle() {
  let id = this.props.cycle.objectId
  store.loggedCycle.get(this.props.cycleId).deleteCycle(id)
},

onClick() {
   browserHistory.push(`/cycles/${this.props.cycle.name}`)
}
});

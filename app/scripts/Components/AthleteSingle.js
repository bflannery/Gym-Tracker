import React from 'react';
import store from '../store';
import { Link } from 'react-router';
import {browserHistory} from 'react-router';


export default React.createClass({
  render() {
    let athlete;
    if(!this.props.athlete.pic){
      athlete = (
        <div className="athlete-info">
          <h4 className="athlete-name" onClick={this.onClick}> {this.props.athlete.name} </h4>
            <span> Age: {this.props.athlete.age} </span>
            <span> Weight: {this.props.athlete.weight} </span>
            <span> Goal: {this.props.athlete.goal} </span>
        </div>
      );
    } else {
      athlete = (
        <div>
          <img src={this.props.athlete.pic} height="100" width="100" className="athlete-pic"/>
          <div className="athlete-info">
            <h4 className="athlete-name"> {this.props.athlete.name} </h4>
              <span> Age: {this.props.athlete.age} </span>
              <span> Weight: {this.props.athlete.weight} </span>
              <span> Goal: {this.props.athlete.goal} </span>
          </div>
        </div>
      )
    }
    return (
      <li className="athlete-preview-container">
        <div className="athlete-preview" onClick={this.onClick}>
        {athlete}
        </div>
        <div className="remove-container">
          <input type="button" value="Delete Athlete" className="athlete-remove-button" onClick={this.removeAthlete}/>
        </div>
      </li>
    );
  },
  removeAthlete() {
    let id = this.props.athleteId
    store.athletes.get(this.props.athleteId).deleteAthlete(id)
  },

   onClick() {
     browserHistory.push(`/athletes/${this.props.athlete.objectId}`)
   }
});

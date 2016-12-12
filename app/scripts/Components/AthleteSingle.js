import React from 'react';
import store from '../store';
import { Link } from 'react-router';


export default React.createClass({
  render() {
    return (
      <li className="athlete-preview">
        <Link to= {`/athletes/${this.props.athlete.name}`} onClick={this.onClick}>
          <h4 className="athlete-name"> {this.props.athlete.name} </h4>
        </Link>
        <span> {this.props.athlete.age} </span>
        <span> {this.props.athlete.weight} </span>
        <span> {this.props.athlete.goal} </span>
        <input type="button" value="Delete Athlete" className="athlete-remove-button" onClick={this.removeAthlete}/>
      </li>
    );
  },
  removeAthlete() {
    let id = this.props.athlete.objectId
    store.athletes.get(this.props.athleteId).deleteAthlete(id)
   }
});

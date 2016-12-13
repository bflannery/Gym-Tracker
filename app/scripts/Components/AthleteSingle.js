import React from 'react';
import store from '../store';
import { Link } from 'react-router';


export default React.createClass({
  render() {
    console.log(this.props)
    let athlete;
    if(!this.props.athlete.pic){
      athlete = (
        <li className="athlete-preview">
          <Link to= {`/athletes/${this.props.athleteId}`} onClick={this.onClick}>
            <h4 className="athlete-name"> {this.props.athlete.name} </h4>
          </Link>
          <span> {this.props.athlete.age} </span>
          <span> {this.props.athlete.weight} </span>
          <span> {this.props.athlete.goal} </span>
          <input type="button" value="Delete Athlete" className="athlete-remove-button" onClick={this.removeAthlete}/>
        </li>
      );
    } else {
      athlete = (
        <li className="athlete-preview">
          <Link to= {`/athletes/${this.props.athleteId}`} onClick={this.onClick}>
            <img src={this.props.athlete.pic} height="50" width="50"/>
            <h4 className="athlete-name"> {this.props.athlete.name} </h4>
          </Link>
          <span> {this.props.athlete.age} </span>
          <span> {this.props.athlete.weight} </span>
          <span> {this.props.athlete.goal} </span>
          <input type="button" value="Delete Athlete" className="athlete-remove-button" onClick={this.removeAthlete}/>
        </li>
      )
    }
    return (
      <div>
      {athlete}
      </div>
    );
  },
  removeAthlete() {
    let id = this.props.athleteId
    store.athletes.get(this.props.athleteId).deleteAthlete(id)
   }
});

import React from 'react';
import {browserHistory} from 'react-router';
import { Link } from 'react-router';

import store from '../../store';
import Athlete from '../../Models/athleteModel'

import AthleteCycles from '../AthleteCycles';
import LoggedCycles from '../LoggedCycles';


export default React.createClass ({
    getInitialState() {
      return {
        loggedCycle: store.loggedCycle.toJSON(),
          athlete: {
            athleteCycles: []
          },
          session: store.session.toJSON()
      };
    },

    componentDidMount() {

      let athlete = store.athletes.get(this.props.params.id)
        if(!athlete) {
          athlete = new Athlete({objectId: this.props.params.id});
          store.athletes.add(athlete);
        }
        athlete.fetch();
        athlete.on('update change' , this.updateState);

        store.loggedCycle.fetch();
        store.loggedCycle.on('update change' , this.updateState);

        store.session.fetch();
        store.session.on('update change', this.updateState);

    },

    componentWillUnmount() {
      store.loggedCycle.off('update change' , this.updateState);
      store.athletes.get(this.props.params.id).off('update change', this.updatState);
      store.session.off('update change' , this.updateState);
    },
    updateState() {
      if(store.athletes.get(this.props.params.id) !== undefined) {
      this.setState({
        athlete: store.athletes.get(this.props.params.id).toJSON()
      });
    }
    this.setState({
      loggedCycle: store.loggedCycle.toJSON(),
      session: store.session.toJSON()
    })
  },

  render() {
    let photo;
    if(this.state.athlete.pic) {
      photo = this.state.athlete.pic
    } else {
      photo = '../../assets/images/no-image.png';
    }
    return (
      <div className="main-container">
        <div className="athletes-hero"></div>
        <h2 className="section-title"> Athlete Profile</h2>
        <div className="profile-page">
          <img src={photo} height="250" width="250"/>
          <input className="edit-button" onClick={this.handlePhoto} type="button" value="Edit Photo"/>
          <h3 className="athlete-profile-name"> {this.state.athlete.name}</h3>
          <div className="athlete-info-container">
            <span> Age: {this.state.athlete.age} </span>
            <span> Weight: {this.state.athlete.weight} </span>
            <span> Goal: {this.state.athlete.goal} </span>
          </div>
          <AthleteCycles athleteCycles={this.state.athlete.athleteCycles} athlete={this.state.athlete}/>
        </div>
          <span className="cycle-choose"> Choose An Exsisting Cycles Below or
            <Link to="cycles"> Create A New Cycle </Link>
          </span>
          <LoggedCycles cycles={this.state.loggedCycle} athleteId={this.state.athlete.objectId}/>
      </div>
    );
  },
handlePhoto(e) {
  browserHistory.push('/athletes/images/'+this.props.params.id)
}
});

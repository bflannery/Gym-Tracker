import React from 'react';
import {browserHistory} from 'react-router';
import { Link } from 'react-router';

import store from '../../store';

import AthleteCycles from '../AthleteCycles';
import LoggedCycles from '../LoggedCycles';


export default React.createClass ({
    getInitialState() {
      return {
        athlete: {
          athleteCycles: []
        },
        loggedCycle: store.loggedCycle.toJSON(),
        athletes: store.athletes.toJSON(),
        committed: true,
        editing: false,
      };
    },
    componentDidMount() {
      store.loggedCycle.fetch();
      store.loggedCycle.on('update change' , this.updateState);

      store.athletes.fetch();
      store.athletes.find(this.props.params);
      store.athletes.on('update change' , this.updateAthleteState);

      if(store.athletes.find(this.props.params) === undefined) {
        store.athletes.fetch(this.props.params)
      }
      else{
        this.updateAthleteState();
      }
    },

    componentWillUnmount() {
      store.loggedCycle.off('update change' , this.updateState);
      store.athletes.off('update change', this.updateAthleteState);

    },

    updateState() {
      this.setState({
        loggedCycle: store.loggedCycle.toJSON(),
      })
    },

    updateAthleteState() {
      if(store.athletes.find(this.props.params)=== undefined){
        this.setState({
          athlete: { athleteCycles: []}
        })
      } else {
        this.setState({
          athlete: store.athletes.find(this.props.params).toJSON()

        });
      }
  },

  render() {

    console.log(this.state)
    console.log(this.props)
    return (
      <div className="main-container">
      <button className="back-button" onClick={this.handleBack}>Back</button>
        <h2> Athletes Profile</h2>
        <h3> {this.state.athlete.name}</h3>
        <div className="athlete-info-container">
          <span> Age: {this.state.athlete.age} </span>
          <span> Weight: {this.state.athlete.weight} </span>
          <span> Goal: {this.state.athlete.goal} </span>
        </div>
        <AthleteCycles athleteCycles={this.state.athlete.athleteCycles} athlete={this.state.athlete}/>
        <span> Choose An Exsisting Cycles Below or
          <Link to="cycles"> Create A New Cycle </Link>
        </span>
        <LoggedCycles cycles={this.state.loggedCycle} athleteId={this.state.athlete.objectId}/>
      </div>
    );
  },
  handleBack() {
  browserHistory.goBack()
  }
});

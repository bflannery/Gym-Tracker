import React from 'react';
import {browserHistory} from 'react-router';

import store from '../../store';

import AthleteList from '../AthleteList';
import NewAthleteForm from '../NewAthleteForm';


export default React.createClass ({
  getInitialState() {
    return {
      athleteList: {},
      athletes: store.athletes.toJSON()
    }
  },
  componentDidMount(){
    store.athletes.fetch();
    store.athletes.on('update change', this.updateStatus);
  },
  componentWillUnmount() {
    store.athletes.off('update change', this.updateStatus);
  },
  updateStatus() {
    if(store.athletes.find(this.props.params) === undefined){
      this.setState({
        athleteList: {},
        athletes: store.athletes.toJSON()
      });
    } else {
      this.setState({
        athleteList: store.athletes.find(this.props.params).toJSON(),
        athletes: store.athletes.toJSON()
      });
    }
  },
  render() {
    return (
      <div className="main-container">
        <div className="athletes-hero"></div>
        <h2 className= "section-title"> Athletes </h2>
          <div className="athletes-page">
        <NewAthleteForm/>
        <AthleteList athletes={this.state.athletes} athleteId={this.state.athleteList.objectId}/>
     </div>
     </div>
    );
  }
});

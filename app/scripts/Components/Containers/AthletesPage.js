import React from 'react';
import {browserHistory} from 'react-router';

import store from '../../store';

import AthleteList from '../AthleteList';
import NewAthleteForm from '../NewAthleteForm';
import AthleteModal from './AthleteModal';


export default React.createClass ({
  getInitialState() {
    return {
      isModalOpen: false,
      athleteList: {},
      athletes: store.athletes.toJSON(),
      session: store.session.toJSON()
    }
  },
  componentDidMount(){
    store.athletes.fetch();
    store.athletes.on('update change', this.updateStatus);

    store.session.fetch();
    store.session.on('update change', this.updateStatus);
  },
  componentWillUnmount() {
    store.athletes.off('update change', this.updateStatus);
    store.session.off('update change', this.updateStatus);
  },
  updateStatus() {
    if(store.athletes.find(this.props.params) === undefined){
      this.setState({
        athleteList: {},
        athletes: store.athletes.toJSON(),
        session: store.session.toJSON()
      });
    } else {
      this.setState({
        athleteList: store.athletes.find(this.props.params).toJSON(),
        athletes: store.athletes.toJSON(),
        session: store.session.toJSON()
      });
    }
  },
  render() {
    return (
      <div className="main-container">
        <div className="athletes-hero"></div>
        <div className="athletes-page">
          <h2 className= "section-title"> Athletes </h2>
        <div className="athletes">
          <button onClick={() => this.openModal()}> New Athlete</button>
          <AthleteModal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <NewAthleteForm modalState={this.state.isModalOpen} athletes={this.state.athletes} athleteId={this.state.athleteList.objectId}/>
          </AthleteModal>
          <AthleteList athletes={this.state.athletes} athleteId={this.state.athleteList.objectId}/>
        </div>
      </div>
     </div>
    );
  },
  openModal() {
  this.setState({ isModalOpen: true })
}
});

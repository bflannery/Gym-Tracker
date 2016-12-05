import React from 'react';
import {browserHistory} from 'react-router';
import store from '../../store';

import MovementSearch from '../MovementSearch';
import LoggedMovements from '../LoggedMovements';


export default React.createClass ({

  getInitialState() {
    return {

      loggedWorkout: store.loggedWorkout.toJSON()
    }
  },

  componentDidMount() {

    if(store.movements.length < 1){
    store.movements.getToken();
  }


    store.loggedWorkout.fetch();
    store.loggedWorkout.find(this.props.params);
    store.loggedWorkout.on('change update', this.updateState);

    if(store.loggedWorkout.find(this.props.params) === undefined) {
      store.loggedWorkout.fetch(this.props.params)

    }
    else {
        this.updateState();
    }
  },
    componentWillUnmount() {
      store.loggedWorkout.off('change update' , this.updateState);
  },

  updateState() {
    if(store.loggedWorkout.find(this.props.params) !== undefined) {
        this.setState({loggedWorkout: store.loggedWorkout.find(this.props.params).toJSON()})
    }
  },

  render () {
    return (

      <div className="main-container">
        <div className="workout-page">
                  <input type="button" className="back-button" value="Back" onClick={this.handleBack}/>
          <h2 className="logged-workout-name">{this.props.params.name}</h2>
          <input type="submit" className="save-button" onClick={this.SaveWorkout} value="Save Workout!"/>
          <LoggedMovements movements={this.state.loggedWorkout}/>
          <MovementSearch workout={this.state.loggedWorkout}/>
        </div>
      </div>
    );
  },
  SaveWorkout() {
    console.log('saved')
    browserHistory.push('/workouts')
  },

  handleBack () {
    browserHistory.push('/workouts')
  }
});

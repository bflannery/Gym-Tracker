import React from 'react';
import {browserHistory} from 'react-router';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import store from '../../store';

import MovementSearch from '../MovementSearch';
import LoggedMovements from '../LoggedMovements';

export default React.createClass ({

  getInitialState() {
    return {
      workout: {movements: []},
      // loggedMovement: store.loggedMovement.toJSON(),
      loggedWorkout: store.loggedWorkout.toJSON(),
      startDate: moment()
    };
  },

  componentDidMount() {

    if(store.movements.length < 1){
    store.movements.getToken();
  }

    // store.loggedMovement.fetch();
    // store.loggedMovement.on('update change' , this.updateState);

    store.loggedWorkout.fetch();
    store.loggedWorkout.find(this.props.params);
    store.loggedWorkout.on('change update', this.updateWorkoutState);

    if(store.loggedWorkout.find(this.props.params) === undefined) {
      store.loggedWorkout.fetch(this.props.params)

    }
    else {
        this.updateWorkoutState();
    }
  },
    componentWillUnmount() {
      // store.loggedMovement.off('change update' , this.updateState);
      store.loggedWorkout.off('change update', this.updateWorkoutState);
  },

  updateState() {
    this.setState({
        // loggedMovement: store.loggedMovement.toJSON(),

      })
  },

  updateWorkoutState() {
    this.setState({
      workout: store.loggedWorkout.find(this.props.params).toJSON(),
      loggedWorkout: store.loggedWorkout.toJSON()
    });
  },


  render () {
    return (
      <div className="main-container">
        <div className="workout-page">
          <input type="button" className="back-button" value="Back" onClick={this.handleBack}/>
          <h2 className="logged-workout-name">{this.props.params.name}</h2>
          <span className="date"> Workout Date:
            <DatePicker className="date-picker" refs="startDate" selected={this.state.startDate} onChange={this.handleChange} />
          </span>
          <LoggedMovements movements={this.state.workout.movements} workoutId={this.state.workout.objectId}/>
          <input type="submit" className="save-button" onClick={this.handleSaveWorkout} value="Save Workout!"/>
          <MovementSearch workout={this.state.loggedWorkout} workoutId={this.state.workout.objectId}/>
        </div>
      </div>
    );
  },
  
  handleSaveWorkout() {
  let workoutDate = this.state.startDate._d;
  store.loggedWorkout.get(this.state.workout.objectId).addDateToWorkout(workoutDate);
  browserHistory.push('/workouts')
  },

  handleBack () {
    browserHistory.push('/workouts')
  },

  handleChange (date) {
    this.setState({
      startDate: date,
      workout: store.loggedWorkout.find(this.props.params).toJSON(),
      loggedWorkout: store.loggedWorkout.toJSON()
    });
  }
});

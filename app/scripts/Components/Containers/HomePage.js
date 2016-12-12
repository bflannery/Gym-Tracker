import React from 'react'
import store from '../../store';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import AthleteList from '../AthleteList';

export default React.createClass({
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

  render(){
    return (
      <div className="main-container">
        <div className="current-container">
          <h2> Todays Workout </h2>
        </div>
        <div className="home-workout" onClick={this.WorkoutLink}>
          <h2 className="section-title"> Workouts </h2>
          <div className="home-workout-container"></div>
        </div>

        <div className="home-cycle" onClick={this.CycleLink}>
          <h2 className="section-title"> Cycles </h2>
          <div className="home-cycle-container"></div>
        </div>

        <div className="home-athletes">
          <h2 className="section-title"> Athletes </h2>
          <div className="home-athlete-container">
            <AthleteList athletes={this.state.athletes} athleteId={this.state.athleteList.objectId}/>
          </div>
        </div>
      </div>
    )
  },
  WorkoutLink () {
    browserHistory.push('/workouts')
  },
  CycleLink() {
    browserHistory.push('/cycles')
  }
});

import React from 'react'
import store from '../../store';

import LoggedWorkouts from '../LoggedWorkouts';

export default React.createClass({

  getInitialState() {
    return {
      loggedWorkout: store.loggedWorkout.toJSON(),
      cycle: {}
    }
  },
  componentWillMount(){
    store.loggedWorkout.fetch();
  },
  componentDidMount() {
    store.loggedWorkout.fetch();
    store.loggedWorkout.on('update change' , this.updateState);

    store.loggedCycle.find(this.props.params);
    store.loggedCycle.on('update change' , this.updateCycleState);

    if(store.loggedCycle.find(this.props.params) === undefined) {
      store.loggedCycle.fetch(this.props.params)
    } else {
        this.updateCycleState();
    }
},

  componentWillUnmount() {

    store.loggedWorkout.off('update change' , this.updateState);
    store.loggedCycle.off('update change' , this.updateCycleState);
  },

  updateState() {
    this.setState({loggedWorkout: store.loggedWorkout.toJSON()});
  },

  updateCycleState() {
    this.setState({cycle: store.loggedCycle.find(this.props.params).toJSON()});
  },

  render() {
    console.log(this.state)
    return (
      <div className="main-container">
      <h2>{this.props.params.name}</h2>
      <h4> Select Workouts </h4>
      <LoggedWorkouts workouts={this.state.loggedWorkout} cycleId={this.state.cycle.objectId}/>
      </div>
    )
  }
})

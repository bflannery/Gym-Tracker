import React from 'react';

import store from '../../store';

import CycleList from '../CycleList'


export default React.createClass ({

  getInitialState() {
    return {
      session: store.session.toJSON(),
      movement: store.movement.toJSON(),
      workout: store.workout.toJSON()
    }
  },
  componentWillMount() {
    store.loggedWorkout.fetch();
  },

  componentDidMount() {
    store.loggedWorkout.fetch();
    store.loggedWorkout.on('update change', this.updateStatus);
  },
  componentWillUnmount() {
    store.loggedWorkout.off('update change', this.updateStatus);
  },
  updateStatus(){
    this.setState({loggedWorkout: store.voted.toJSON()})
},

  render() {
    return (
      <div className="program-container">
        <h2> Programs </h2>
        <div className="program">
          <CycleList cycles={this.state.loggedWorkout}/>
        </div>
      </div>
    );
  }
});

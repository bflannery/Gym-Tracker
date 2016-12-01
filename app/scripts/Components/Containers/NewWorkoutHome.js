import React from 'react';
import store from '../../store';

import MovementSearch from '../MovementSearch';
import LoggedMovements from '../LoggedMovements';


export default React.createClass ({

  getInitialState() {
    return {
      workout: {},
      loggedMovements: store.loggedMovement.toJSON()
    }
  },
  componentWillMount() {
    store.loggedMovement.fetch();
  },

  componentDidMount() {
    store.loggedMovement.fetch();
    store.loggedMovement.on('update change' , this.updateMovementsState);

    store.loggedWorkout.find(this.props.params);
    store.loggedWorkout.on('change update', this.updateState);

    if(store.loggedWorkout.find(this.props.params) === undefined) {
      store.loggedWorkout.fetch(this.props.params)
    } else {
        this.updateState();
    }
  },
    componentWillUnmount() {
      store.loggedWorkout.off('update change' , this.updateState);
      store.loggedMovement.off('update change' , this.updateMovementsState);
  },

  updateState() {
        this.setState({workout: store.loggedWorkout.find(this.props.params).toJSON()});
      },
  updateMovementsState() {
      this.setState({loggedMovements: store.loggedMovement.toJSON()});
  },

  render () {
    return (
      <div className="main-container">
        <h2>{this.props.params.name}</h2>
        <LoggedMovements movements={this.state.loggedMovements}/>
        <MovementSearch workout={this.state.workout}/>
      </div>
    );
  }
});

import React from 'react';

import store from '../../store';

import NewWorkoutForm from '../NewWorkoutForm';
import MovementList from '../MovementList';


export default React.createClass ({

  getInitialState() {
    return {
      session: store.session.toJSON(),
      movement: store.movement.toJSON()
    }
  },
  componentDidMount() {
    store.session.on('change update', () => {
    });
    store.movement.on('change update', () => {
      this.setState({movement: store.movement.toJSON()})
    });
  },

  render() {
    return (
      <div className="workout-container">
        <div className="workout-form">
      <h2> Make a New Workout </h2>
      <NewWorkoutForm />
      </div>
      <div className="search-movement-container">
          <form onSubmit={this.handleSubmit} className="search-form">
            <input id="search" ref="search" type="text" placeholder="Search Artist" className="search"/>
            <input type="submit" value="Search" className = "search-submit-button"/>
          </form>
      </div>

      <MovementList movements={this.state.movement} />
      </div>
    );
  },
  handleSubmit(e){
    e.preventDefault();
    let movementSearch = this.refs.search.value;
    store.movement.getMovements(movementSearch);
  }
});

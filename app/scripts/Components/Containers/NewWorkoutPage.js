import React from 'react';

import store from '../../store';

import MovementList from '../MovementList';
import NewWorkoutList from '../NewWorkoutList';


export default React.createClass ({

  getInitialState() {
    return {
      session: store.session.toJSON(),
      movement: store.movement.toJSON(),
      workout: store.workout.toJSON()
    }
  },

  componentDidMount() {
    store.session.on('change update', () => {
    });

    store.movement.on('change update', () => {
      this.setState({movement: store.movement.toJSON()})
    });

    store.workout.on('change update', () => {
      this.setState({workout: store.workout.toJSON()})
    });
  },

  render() {
    let filteredSearch=store.movement.search(this.state.searchTerm);

    return (
      <div className="workout-container">
        <div className="workout-form">
            <h2> Make a New Workout </h2>
              <div className="search-movement-container">
                  <form className="search" onSubmit={this.handleSubmit}>
                    <input type="text" ref="search" placeholder="Search Movements..."/>
                    <input type="submit" value="Search"/>
                  </form>
              </div>
          </div>
          <MovementList movements={filteredSearch} />
          <NewWorkoutList workout={this.state.workout} />

        </div>
    );
  },
  handleSubmit(e){
    e.preventDefault();
    this.setState({searchTerm : this.refs.search.value });

  }
});

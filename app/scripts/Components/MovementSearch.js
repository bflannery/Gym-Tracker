import React from 'react';

import store from '../store';

import MovementList from './MovementList';


export default React.createClass ({

  getInitialState() {
    return {
      session: store.session.toJSON(),
      movements: store.movements.toJSON()
    }
  },

  componentDidMount() {
    store.session.on('change update', () => {
    });

    store.movements.on('change update', () => {
      this.setState({movements: store.movements.toJSON()})
    });
  },
  render() {
  let filteredSearch=store.movements.search(this.state.searchTerm);
    return (

      <div className="workout-form">
        <h2> Search Movements </h2>
          <div className="search-movement-container">
              <form className="search" onSubmit={this.handleSubmit}>
                <input type="text" ref="search" placeholder="Search Movements..."/>
                <input type="submit" value="Search"/>
              </form>
          </div>
          <MovementList movements={filteredSearch} workoutId={this.props.workout.objectId}/>
      </div>
    )
  },

  handleSubmit(e){
    e.preventDefault();

    this.setState({searchTerm : this.refs.search.value });
  }

});

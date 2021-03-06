import React from 'react';

import store from '../store';

import MovementList from './MovementList';

export default React.createClass ({
  getInitialState() {
    return {
      movements: store.movements.toJSON(),
    };
  },
  componentDidMount() {
    store.movements.on('change update', () => {
      this.setState({movements: store.movements.toJSON()});
    });
  },
  render() {
    console.log(this.state)
  let filteredSearch=store.movements.search(this.state.searchTerm);
    return (
      <div className="workout-search-container">
        <h2> Search Movements </h2>
          <div className="search-movement-container">
              <form className="search" onSubmit={this.handleSubmit}>
                <input type="text" ref="search" className="search-movements" placeholder="Search Movements..."/>
                <input type="submit" value="Search" className="search-button"/>
              </form>
          </div>
          <MovementList movements={filteredSearch} workoutId={this.props.workoutId}/>
      </div>
    );
  },
  handleSubmit(e){
    e.preventDefault();
    let search = this.refs.search.value;
    let lowerSearch = search.toLowerCase();
    this.setState({searchTerm : lowerSearch});
  }
});

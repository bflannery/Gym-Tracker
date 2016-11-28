import React from 'react';

import store from '../../store';
//
// import NewWorkoutForm from '../NewWorkoutForm';
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
    let filteredSearch =store.movement.search(this.state.searchTerm);

    return (
      <div className="workout-container">
        <div className="workout-form">
            <h2> Make a New Workout </h2>
              <div className="search-movement-container">
                <section className="main">
                  <form className="search" onSubmit={this.handleSubmit}>
                    <input type="text" ref="search" placeholder="Search Movements..."/>
                    <input type="submit" value="Search"/>

                  </form>
                </section>
              </div>
          </div>
          <div className="search-results-container">
          <MovementList movements={filteredSearch} />
          </div>
        </div>
    );
  },
  handleSubmit(e){
    e.preventDefault();
    this.setState({searchTerm : this.refs.search.value });

  }
});

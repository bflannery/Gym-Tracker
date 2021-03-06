import React from 'react';
import MovementSingle from './MovementSingle';

export default React.createClass({
  render() {
    let movements = this.props.movements.map((movement, i ,arr) => {
      return <MovementSingle key={i} movement={movement} workoutId={this.props.workoutId}/>;
    });
    return (
      <div className="search-results-container">
        <h2> Search Results </h2>
          <ul className="results">
            {movements}
          </ul>
      </div>
    );
  }
});

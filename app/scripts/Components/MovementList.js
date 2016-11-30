import React from 'react';
import MovementSingle from './MovementSingle';

//will display a list of movements
//will need movement props


export default React.createClass({

  render() {

    console.log(this.props.workoutId)
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

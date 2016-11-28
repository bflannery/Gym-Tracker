import React from 'react';
import MovementSingle from './MovementSingle';

//will display a list of movements
//will need movement props


export default React.createClass({

  render() {

    let movements = this.props.movements.map((movement, i ,arr) => {
      return <MovementSingle key={i} movement={movement}/>;
    });


    return (
        <ul className="results">
          {movements}
        </ul>
    );
  }
});

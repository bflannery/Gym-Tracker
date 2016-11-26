import React from 'react';
import MovementSingle from './MovementSingle';

//will display a list of movements
//will need movement props 


export default React.createClass({
  render() {
    return (
        <ul className="movement-list">
          <MovementSingle />
        </ul>
    );
  }
});

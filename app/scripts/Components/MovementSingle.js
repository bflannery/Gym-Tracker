import React from 'react';

//display a single movement
//will pull from movement collection


export default React.createClass({
  render() {
    return (
      <li className="movement-preview">
        <span className="movement-name"> {this.props.movement.name} </span>
      </li>
    );
  }
});

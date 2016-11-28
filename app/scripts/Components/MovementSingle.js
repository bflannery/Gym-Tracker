import React from 'react';

//display a single movement
//will pull from movement collection


export default React.createClass({
  render() {
    console.log(this.props.movement.get('name'))
    return (
      <li className="movement-preview">
        <div className="movement-name"> {this.props.movement.get('name')} </div>
      </li>
    );
  }
});

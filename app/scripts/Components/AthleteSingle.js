import React from 'react';

export default React.createClass({
  render() {
    return (
      <li className="athlete-preview">
        <span className="athlete-info"> Name: Brian </span>
        <span className="athlete-info"> Age: 29 </span>
        <span className="athlete-info"> Weight: 185 lbs  </span>
        <span className="athlete-info"> Goal: Endurance </span>
      </li>
    );
  }
});

import React from 'react';
import CycleSingle from './CycleSingle';

//will display list of Cycles
// will need cycles collection props 

export default React.createClass({
  render() {
    return (
        <ul className="cycle-list">
          <CycleSingle />
        </ul>
    );
  }
});

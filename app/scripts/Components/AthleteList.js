import React from 'react';
import AthleteSingle from './AthleteSingle';

export default React.createClass({
  render() {
    return (
        <ul className="athlete-list">
          <AthleteSingle />
        </ul>
    );
  }
});

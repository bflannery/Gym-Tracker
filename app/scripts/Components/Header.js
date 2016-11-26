import React from 'react';

import store from '../store';
import HeaderNav from './HeaderNav';

export default React.createClass({
  render() {
    return (
      <div className="header">
        <h1>Gym Tracker</h1>
        <HeaderNav />
        </div>
    );
  }
});

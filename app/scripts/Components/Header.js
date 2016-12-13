import React from 'react';
import {Link} from 'react-router';
import store from '../store';
import HeaderNav from './HeaderNav';

export default React.createClass({
  render() {
    return (
      <div className="header">
        <Link to = "/home">
        <h1 className="app-title">Gym Tracker</h1>
        </Link>
        <HeaderNav />
        <div className="hero">
        </div>
        </div>
    );
  }
});

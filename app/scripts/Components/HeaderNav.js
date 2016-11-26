import React from 'react';
import {Link} from 'react-router';
import store from '../store';

export default React.createClass({
  render() {
    return (
      <nav className="nav-container">
        <ul className="loggedIn-navContainer">
          <li className="nav-list">
            <Link to = "home" className="home-nav">Home</Link>
          </li>
          <li className="nav-list">
            <Link to ="athletes" className="athletes">Athletes</Link>
          </li>
          <li className="nav-list">
              <Link to ="workout">New Workout</Link>
          </li>
          <li className="nav-list">
              <Link to ="programs"> Programs</Link>
          </li>
        </ul>
      </nav>
    );
  }
})

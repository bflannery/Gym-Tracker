import React from 'react';
import {Link} from 'react-router';
import store from '../store';


export default React.createClass({
  getInitialState(){
    return {authenticated: store.session.get('authenticated')}
  },

  componentWillMount() {
    store.session.on('change', () => {
      this.setState({authenticated: store.session.get('authenticated')});
    });
  },
  render() {

  let nav = <ul className="logged-out-nav-container"></ul>;

  if(this.state.authenticated) {
    nav = (
      <ul className="loggedIn-navContainer">
        <li className="nav-list">
            <Link to="/workouts"> Workouts</Link>
        </li>
        <li className="nav-list">
            <Link to="/cycles"> Cycles</Link>
        </li>
        <li className="nav-list">
            <Link to="/athletes"> Athletes</Link>
        </li>
        <li className="nav-list">
            <Link to="/landing-page" onClick={this.handleLogout}>Log Out</Link>
        </li>
      </ul>
    )
  }
  return (
      <nav className="nav-container">
        {nav}
      </nav>
    );
  },

  handleLogout(e) {
    e.preventDefault();
    store.session.logout();
  }
})

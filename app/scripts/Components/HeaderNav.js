import React from 'react';
import {Link} from 'react-router';
import store from '../store';


export default React.createClass({
  getInitialState(){
    return { authenticated: store.session.get('authenticated')}
  },

  componentWillMount() {
    store.session.on('change', () => {
      this.setState({authenticated: store.session.get('authenticated')});
    });
  },
  render() {

  let nav= <ul className="logged-out-nav-container">
              <li className="nav-list">
                  <Link to ='/' className="login"> Log In
                  </Link>
              </li>
              <li className="nav-list">
                  <Link to = "register" className="signup">Sign Up
                  </Link>
              </li>
            </ul>;

if(this.state.authenticated) {
  nav = (
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
      <li className="nav-list" id="logout">
        <input type="button" className="logout-button" onClick={this.handleLogout} value="Log Out"/>
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

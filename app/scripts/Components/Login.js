import React from 'react';
import {Link} from 'react-router';
import store from '../store';
import Register from './RegisterPage';


export default React.createClass({
  render(){
    return (

      <div className="form-container">
        <img src="../../assets/images/blue-user.png" height="75" width="75" className="user-icon"/>
        <form onSubmit={this.handleSubmit} className="login-form">
          <input className="login-input" ref="login" type="email" placeholder="Email"/>
          <input className="login-input" ref="password" type="password" placeholder="Password"/>
          <input className="login-button" id="login-button" type="submit" value="Log In"/>
          <span className="redirect-link"> Not A Member? <Link to="/register">Signup Here!</Link></span>
          <span className="redirect-link"> Forgot Password? <Link to="/forgotpassword">Click here</Link></span>
        </form>
      </div>

    );
  },

  handleSubmit(e){
    e.preventDefault();
    const email = this.refs.login.value;
    const password = this.refs.password.value;
    store.session.login(email, password);
    store.movements.getToken();
  }
})

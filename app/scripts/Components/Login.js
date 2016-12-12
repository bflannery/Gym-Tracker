import React from 'react';
import {Link} from 'react-router';
import store from '../store';
import Register from './RegisterPage';


export default React.createClass({
  render(){
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit} className="login-form">
          <input ref="login" type="email" placeholder="email"/>
          <input ref="password" type="password" placeholder="password"/>
          <input id="login-button" type="submit" value="Log In"/>
          <span> Not A Member? <Link to="/register">Signup Here!</Link></span>
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

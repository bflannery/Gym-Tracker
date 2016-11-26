import React from 'react';
import {Link} from 'react-router';
import store from '../store';
import Register from './RegisterPage';


export default React.createClass({
  render(){
    return (
      <form onSubmit={this.handleSubmit} className="login-form">
        <input ref="login" type="email" placeholder="Email"/>
        <input ref="password" type="password" placeholder="Password"/>
        <input type="submit" value="Log In"/>
        <span> Not A Member?<Link to="/register">Signup Here!</Link></span>
      </form>
    );
  },

  handleSubmit(e){
    e.preventDefault();
    const email = this.refs.login.value;
    const password = this.refs.password.value;
    store.session.login(email, password);
    store.movement.getToken();
  }
})

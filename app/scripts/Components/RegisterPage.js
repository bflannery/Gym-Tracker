import React from 'react';
import {Link} from 'react-router';
import store from '../store';

export default React.createClass({
  render() {

    return (
      <div className="register-page">
        <div className="form-container">
          <form onSubmit={this.handleSubmit} className="register-form">
            <input ref="name" type="text" placeholder="Name"/>
            <input ref="email" type="email" placeholder="Email"/>
            <input ref="password" type="password" placeholder="Password"/>
            <input ref="confirmPassword" type="password" placeholder="Confirm Password"/>
            <input type="submit" value="submit"/>
            <span>Already A Member? <Link to="/"> Login Here!</Link></span>
          </form>
        </div>
      </div>
    );
  },

  handleSubmit(e) {
    e.preventDefault();
      const name = this.refs.name.value;
      const email= this.refs.email.value;
      const password= this.refs.password.value;
      const confirmPassword= this.refs.confirmPassword.value;
      store.session.register(name, email, password);
      store.movement.getToken();
  }

});

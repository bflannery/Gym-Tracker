import React from 'react';

import store from '../store';

export default React.createClass({
  getInitialState() {
    return {
      message: null
    };
  },
  componentDidMount() {
    store.session.on('update change', () => {
      this.setState({ message: store.session.get('passwordReset') });
    });
  },
  componentWillUnmount() {
    store.session.off();
  },
  render() {
    let message = null;
    if (this.state.message) {
      message = (
        <div className="reset-message">
          { this.state.message }
        </div>
      );
    }
    return (
      <form className="login-register" onSubmit={ this.handleSubmit }>
        <input type="email" name="email" ref="email" placeholder="Your Email"/>
        <input type="submit" id="submit" name="submit" value="Submit" />
        { message }
      </form>
    );
  },
  handleSubmit(e) {
    e.preventDefault();
    let email = this.refs.email.value;
    return store.session.newPassword(email);
  }
});

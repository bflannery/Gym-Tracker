import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {browserHistory} from 'react-router';

export default React.createClass({
  render() {
    return (
      <div className="app-container">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
});

import React from 'react';
import {browserHistory} from 'react-router';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';


export default React.createClass({
  render() {
    return (
      <div className="app-container">
        <Header />
        <Sidebar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
});

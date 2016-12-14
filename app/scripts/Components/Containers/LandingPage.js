import React from 'react';
import store from '../../store';

import Login from '../Login';

export default React.createClass({

  getInitialState(){
    return {
      session: store.session.toJSON(),
    }
  },
  componentDidMount(){
    store.session.on('update change', this.updateStatus);
  },
  componentWillUnmount() {
    store.session.off('update change', this.updateStatus);
  },

  render() {
    return (

        <div className="main-container">
          <div className="landing-page-container">
          <Login session={this.state.session} />
          </div>
        </div>
    );
  },

  updateStatus(){
    this.setState({session: store.session.toJSON()})
  }
});

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
      <div className="landing-page">
        <Login session={this.state.session} />
        </div>
    );
  },

  updateStatus(){
    this.setState({session: store.session.toJSON()})
  }
});

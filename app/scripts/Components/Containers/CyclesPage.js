import React from 'react'
import { Link } from 'react-router';
import { browserHistory} from 'react-router';

import store from '../../store';

import CyclesList from '../CyclesList';

export default React.createClass({

  getInitialState() {
    return {
      loggedCycle: store.loggedCycle.toJSON()
    }
  },
  componentWillMount() {
    store.loggedCycle.fetch();
  },

  componentDidMount() {
    store.loggedCycle.fetch();
    store.loggedCycle.on('update change', this.updateStatus);
  },
  componentWillUnmount() {
    store.loggedCycle.off('update change', this.updateStatus);
  },
  updateStatus(){
    this.setState({loggedCycle: store.loggedCycle.toJSON()})
},


  render() {
    return (
      <div className="main-container">
        <h2> Cycles </h2>
        <div className="cycles">
          <CyclesList cycles={this.state.loggedCycle}/>
          <Link to="/cycles/newcycle"> Make a New Cycle</Link>
        </div>
      </div>
    );
  }
});

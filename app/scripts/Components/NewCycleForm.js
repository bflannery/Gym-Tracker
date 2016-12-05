import React from 'react'
import store from '../store';
import { browserHistory } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div className="create-cycle">
        <input type="text" ref="createCycle" className="new-input" placeholder="Create New Cycle"/>
        <input type="submit" value="Create" className="create-button" onClick={this.handleCycleCreate}/>
      </div>
  );
},

handleCycleCreate(){
  let cycleName = this.refs.createCycle.value;
  store.loggedCycle.create({ name : cycleName });
  }
});

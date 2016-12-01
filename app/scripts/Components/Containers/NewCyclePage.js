import React from 'react'
import store from '../../store';
import { browserHistory } from 'react-router';

export default React.createClass({
  render() {
    
    return (
      <div className="create-cycle">
        <h2> Create New Cycle </h2>
        <input type="text" ref="createCycle" placeholder="Create New Cycle"/>
        <input type="submit" value="Create" onClick={this.handleClick}/>
      </div>
  );
},

handleClick(){
  let cycleName = this.refs.createCycle.value;
  store.loggedCycle.create({
  name : cycleName
  });
  browserHistory.push("/cycles");
}
});

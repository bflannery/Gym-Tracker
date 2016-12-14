import React from 'react'
import store from '../store';
import {browserHistory} from 'react-router'

export default React.createClass({
  render() {
    return (
      <form className="create-cycle">
        <input type="text" ref="createCycle" className="new-input" placeholder="Create New Cycle"/>
        <textarea type="text" ref="cycleDescription" className="cycle-info" placeholder="Description"/>
        <input type="submit" value="Create" className="create-button" onClick={this.createCycle}/>
      </form>
  );
},
createCycle(e){
  e.preventDefault();
  let cycleName = this.refs.createCycle.value;
  let cycleDescription = this.refs.cycleDescription.value;
  store.loggedCycle.create({
     name : cycleName ,
     description : cycleDescription
   });
   this.refs.createCycle.value = "";
   this.refs.cycleDescription.value="";
  }
});

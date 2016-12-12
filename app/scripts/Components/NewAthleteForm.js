import React from 'react'
import store from '../store';
import {browserHistory} from 'react-router'

export default React.createClass({
  render() {
    return (
      <form className="athlete-form">
        <input type="text" ref="name" className="athlete-info" placeholder="Name"/>
        <input type="text" ref="age" className="athlete-info" placeholder="Age"/>
        <input type="text" ref="weight" className="athlete-info" placeholder="Weight"/>
        <input type="text" ref="goal" className="athlete-info" placeholder="Goal"/>
        <input type="submit" value="Create New Athlete" className="create-button" onClick={this.createAthlete}/>
      </form>
  );
},
createAthlete(e){
  e.preventDefault();
  let athleteName = this.refs.name.value;
  let athleteAge = this.refs.age.value;
  let athleteWeight = this.refs.weight.value;
  let athleteGoal = this.refs.goal.value;

  store.athletes.create({
      name: athleteName,
      age: athleteAge,
      weight: athleteWeight,
      goal: athleteGoal
   });
   this.refs.name.value = "";
   this.refs.age.value = "";
   this.refs.weight.value = "";
   this.refs.goal.value = "";
  }
});

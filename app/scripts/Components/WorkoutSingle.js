import React from 'react';



//Will display a single work made up of a list of movements
//Will pull from movements collection
//Will push to workouts collection



export default React.createClass({
  render() {
    return (
      <li className="workout-preview">
        <span className="workout-name"> Legs </span>
      </li>
    );
  }
});

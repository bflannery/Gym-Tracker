// display a form to set new workout made of movements
// will pull from movements collection
// will push to workouts collection
import React from 'react';

export default React.createClass({
  render() {
    return(
      <div className="workout-form-container">
    <form className="workout-form">
      <input  type="text" placeholder="Name"/>
      <input  type="text" placeholder="Name"/>
      <input  type="text" placeholder="Name"/>
      <input  type="text" placeholder="Name"/>
      <input  type="text" placeholder="Name"/>
      <input type="submit" value="submit"/>
    </form>
    </div>
    );
  }
});

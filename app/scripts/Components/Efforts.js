import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
      <label>Reps:
      <input type="text" placeholder="0" id="reps"/>
      </label>
      <label> Sets:
      <input type="text" placeholder="0" id="sets"/>
      </label>
      <label> Weight:
      <input type="text" placeholder="0" id="weight"/>
      </label>
      </div>
    );
  }
})

import React from 'react';
import store from '../store';


export default React.createClass({

  render() {


    return (
      <div>
        <li>
          <span> {this.props.workout.name} </span>
        </li>
      </div>
    );
}
})

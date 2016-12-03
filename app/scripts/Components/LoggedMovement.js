import React from 'react';
// import Buttons from './buttons';
import store from '../store';


export default React.createClass({

  render() {


    return (
      <div>
        <li>
          <span> {this.props.movement.name} </span>
          <span> Reps: {this.props.movement.reps} </span>
          <span> Sets: {this.props.movement.sets} </span>
          <span> Weight: {this.props.movement.weight} </span>
          <input type="button" value="remove" onClick={this.Remove}/>
        </li>
      </div>
    );
},

Remove() {
  console.log('remove this from workout on backend')
}
})

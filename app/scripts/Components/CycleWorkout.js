import React from 'react';
import store from '../store';
import { Link } from 'react-router';


export default React.createClass({

  render() {


    return (
      <div>
        <li>
          <Link to={this.props.workout.name}><span>{this.props.workout.name}</span>
          </Link>
        </li>
      </div>
    );
}
})

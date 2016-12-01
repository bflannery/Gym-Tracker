import React from 'react';
import store from '../store';
import { Link } from 'react-router';


export default React.createClass({
  render() {
    return (
      <div className="cycle-container">
        <li className="cycle-preview">
          <Link to = {`/cycles/${this.props.cycle.name}`} onClick={this.onClick}><h2> {this.props.cycle.name} </h2>
          </Link>
        </li>
      </div>
    );
  }
});

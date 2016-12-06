import React from 'react';
import store from '../store';
import { Link } from 'react-router';

import moment from 'moment';

export default React.createClass({
  render() {
    return (
        <li className="cycle-preview">
          <Link to = {`/cycles/${this.props.cycle.name}`} onClick={this.onClick}>
          <h4> {this.props.cycle.name} </h4>
          </Link>
          <span> {moment(this.props.cycle.created).format('L')} </span>
        </li>
    );
  }
});

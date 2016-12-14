import React from 'react';

import store from '../store';

import LoggedCycle from './LoggedCycle';

export default React.createClass({
  render() {
    let cycles;

    if(this.props.cycles === undefined) {
      cycles = <li></li>;
    } else {
      cycles = this.props.cycles.map((cycle,i,arr) =>{
        if(window.localStorage.getItem('ownerId') === this.props.cycles[i].ownerId)
        return <LoggedCycle key={i} cycle={cycle} athleteId={this.props.athleteId}/>;
      });
    }
    return (
      <div className="cycles">
      <ul className="cycles-list">
        {cycles}
      </ul>
      </div>
    );
  }
});

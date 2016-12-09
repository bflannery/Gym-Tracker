import React from 'react';

import store from '../store';

import LoggedCycle from './LoggedCycle';

export default React.createClass({


  render() {
    console.log(this.props)
    let cycles;

    if(this.props.cycles === undefined) {

      cycles = <li></li>;

    } else {
      cycles = this.props.cycles.map((cycle,i,arr) =>{
        return <LoggedCycle key={i} cycle={cycle} athleteId={this.props.athleteId}/>;

      });
    }

    return (

        <ul className="cycles-list">
          {cycles}
        </ul>
    );
  }
});

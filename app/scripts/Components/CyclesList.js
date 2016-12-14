import React from 'react';
import CycleSingle from './CycleSingle';

export default React.createClass({
  render() {

    let cycles;

    if(this.props.cycles.length < 1) {
      cycles = <li> No Cycles </li>;
    } else {
      cycles = this.props.cycles.map((cycle,i,arr) =>{
          if(window.localStorage.getItem('ownerId') === this.props.cycles[i].ownerId) {
        return <CycleSingle key={i} cycle={cycle} cycleId={this.props.cycleId}/>;
        }
        });
      }
    return (
      <ul className="cycles-list">
        {cycles}
      </ul>
    );
  }
});

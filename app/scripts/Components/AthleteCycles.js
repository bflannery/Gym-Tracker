import React from 'react';
import AthleteCycle from './AthleteCycle';

import store from '../store';

export default React.createClass({
  render(){
    let athleteCycles;

    if(!this.props.athleteCycles) {
      athleteCycles = <div />
      } else {
      athleteCycles = this.props.athleteCycles.map((athleteCycle, i, arr)=>{

      return  <AthleteCycle key={i} athleteCycle={athleteCycle} athleteId={this.props.athlete.objectId}/>

        });
      }

    return (
        <ul className="athlete-cycle-list">
          {athleteCycles}
        </ul>
      )
    }
});

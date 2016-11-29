import React from 'react';
import CycleSingle from './CycleSingle';

export default React.createClass({

  render() {

    console.log(this.props)
    let cycles;

    if(this.props.cycles.length < 1){
      cycles = <li> No Votes Yet </li>;

    } else {
      cycles = this.props.cycles.map((cycle, i ,arr) => {
        return <CycleSingle key={i} cycle={cycle}/>;
      });
    }

    return (

      <ul className = "cycles-list">
        {cycles}
      </ul>

    );
  }
});

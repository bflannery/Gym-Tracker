import React from 'react';
import AthleteSingle from './AthleteSingle';

export default React.createClass({
  render() {
    let athletes;

    if(this.props.athletes.length < 1) {
      athletes = <li> No Athletes </li>

    } else {
      athletes = this.props.athletes.map((athlete, i ,arr) => {
        return <AthleteSingle key={i} athlete={athlete} athleteId={this.props.athleteId}/>
      });
    }
    return (
      <ul className="athlete-list">
        {athletes}
      </ul>
    );
  }
});

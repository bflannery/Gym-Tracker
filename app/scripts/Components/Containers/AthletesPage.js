import React from 'react';

import store from '../../store';

import AthleteList from '../AthleteList';


export default React.createClass ({
  render() {
    return (
      <div className="athletes-container">
      <h2> Athletes </h2>
      <AthleteList />
      </div>
    );
  }
});

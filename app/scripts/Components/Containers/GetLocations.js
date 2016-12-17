import React from 'react';
import store from '../../store';

export default React.createClass ({
  render() {
    return (
      <button className="locator-button" onClick={this.getCurrentLocation}>
        <i className="fa fa-compass" aria-hidden="true"></i>
      </button>
    );
  },

  getCurrentLocation(e) {
    e.preventDefault();
    store.session.translateCurrentLocation().then((positionData) => {
      console.log(positionData)
    })
  }
})

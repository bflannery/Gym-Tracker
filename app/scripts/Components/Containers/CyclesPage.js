import React from 'react'
import { browserHistory} from 'react-router';
import { Link } from 'react-router';
import store from '../../store';

import CyclesList from '../CyclesList';
import NewCycleForm from '../NewCycleForm';

export default React.createClass({

  getInitialState() {
    return {
      cycleList: {},
      loggedCycle: store.loggedCycle.toJSON(),
      session: store.session.toJSON()
    }
  },
  componentDidMount() {
    store.loggedCycle.fetch();
    store.loggedCycle.on('update change', this.updateStatus);

    store.session.fetch();
    store.session.on('update change', this.updateStatus);
  },
  componentWillUnmount() {
    store.loggedCycle.off('update change', this.updateStatus);
    store.session.off('update change', this.updateStatus);
  },
  updateStatus(){
    if(store.loggedCycle.find(this.props.params) === undefined){
    this.setState({
      cycleList: {},
      loggedCycle: store.loggedCycle.toJSON(),
      session: store.session.toJSON()
    })
  }else {
    this.setState({
      cycleList: store.loggedCycle.find(this.props.params).toJSON(),
      loggedCycle: store.loggedCycle.toJSON(),
      session: store.session.toJSON()
    })
  }
},


  render() {
    console.log(this.state)
    return (
      <div className="main-container">
        <div className="cycle-hero"></div>
          <div className="cycle-page">
            <h2 className= "section-title"> Cycles </h2>
            <div className="cycles">
              <NewCycleForm/>
              <CyclesList cycles={this.state.loggedCycle} cycleId={this.state.cycleList.objectId}/>
            </div>
          </div>
        </div>
    );
  }
});

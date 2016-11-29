import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import $ from 'jquery';

import App from './Components/Containers/App';
import Register from './Components/RegisterPage';
import HomePage from './Components/Containers/HomePage';
import LandingPage from './Components/Containers/LandingPage';
import CyclesPage from './Components/Containers/CyclesPage';
import NewWorkoutPage from './Components/Containers/NewWorkoutPage';
import AthletePage from './Components/Containers/AthletesPage';
import store from './store';

let getAuth = function(nextState, replace, callback){
    store.movement.getToken(nextState.location.query.code);
}

const router = (

    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={LandingPage}/>
        <Route path='/oauth' onEnter={getAuth}/>
        <Route path='/register' component={Register}/>
        <Route path='/home' component={HomePage}/>
        <Route path='/workout' component={NewWorkoutPage}/>
        <Route path='/cycles' component={CyclesPage}/>
        <Route path='/athletes' component={AthletePage}/>
      </Route>
    </Router>
);

export default router;

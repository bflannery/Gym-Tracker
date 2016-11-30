import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import $ from 'jquery';

import App from './Components/Containers/App';
import Register from './Components/RegisterPage';
import LandingPage from './Components/Containers/LandingPage';


import WorkoutsPage from './Components/Containers/WorkoutsPage';
import NewWorkoutPage from './Components/Containers/NewWorkoutPage';
import NewWorkoutHome from './Components/Containers/NewWorkoutHome';

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
        <Route path='/workouts' component={WorkoutsPage}/>
        <Route path='/workouts/new' component={NewWorkoutPage}/>
        <Route path='/workouts/:name' component={NewWorkoutHome}/>
      </Route>
    </Router>
);

export default router;

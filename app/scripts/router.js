import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import $ from 'jquery';

import App from './Components/Containers/App';
import Register from './Components/RegisterPage';
import LandingPage from './Components/Containers/LandingPage';
import HomePage from './Components/Containers/HomePage';


import WorkoutsPage from './Components/Containers/WorkoutsPage';
import NewWorkoutHome from './Components/Containers/NewWorkoutHome';

import CyclesPage from './Components/Containers/CyclesPage';
import NewCycleHome from './Components/Containers/NewCycleHome';

import AthletesPage from './Components/Containers/AthletesPage';
import AthleteProfileHome from './Components/Containers/AthleteProfileHome';

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

        <Route path='/workouts' component={WorkoutsPage}/>
          <Route path='/workouts/:name' component={NewWorkoutHome}/>

        <Route path='/cycles' component={CyclesPage}/>
          <Route path='/cycles/:name' component={NewCycleHome}/>

        <Route path='/athletes' component={AthletesPage}/>
          <Route path='/athletes/:name' component={AthleteProfileHome}/>

      </Route>
    </Router>
);

export default router;

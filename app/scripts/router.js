import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import $ from 'jquery';
import store from './store';


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
import ImageUpload from './Components/ImageUpload';

import GetLocations from './Components/Containers/GetLocations';
import ForgotPassword from './Components/ForgotPassword';


let getAuth = function(nextState, replace, callback){
    store.movements.getToken(nextState.location.query.code);
}

const router = (

    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={LandingPage}/>
        <Route path='/oauth' onEnter={getAuth}/>
        <Route path='/register' component={Register}/>
        <Route path='/forgotpassword' component={ForgotPassword}/>
        <Route path='/home' component={HomePage}/>

        <Route path='/workouts' component={WorkoutsPage}/>
          <Route path='/workouts/:name' component={NewWorkoutHome}/>

        <Route path='/cycles' component={CyclesPage}/>
          <Route path='/cycles/:name' component={NewCycleHome}/>

        <Route path='/athletes' component={AthletesPage}/>
          <Route path='/athletes/:id' component={AthleteProfileHome}/>
          <Route path='/athletes/images/:id' component = {ImageUpload}/>

        <Route path='/locations' component={GetLocations}/>
      </Route>
    </Router>
);

export default router;

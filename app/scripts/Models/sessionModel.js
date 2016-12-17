import {browserHistory} from 'react-router';
import Backbone from 'backbone';
import $ from 'jquery';
import config from '../config';

export default Backbone.Model.extend({

  initialize() {
         if (window.localStorage.getItem('user-token')) {
             this.set({authenticated: true, 'user-token': window.localStorage.getItem('user-token')});
         }
  },

  url: 'https://api.backendless.com/v1/data/Users',
  idAttribute: 'objectId',
  defaults: {
    authenticated: false
  },

  register(name, email, password){
    $.ajax({
      type: 'POST',
      url: 'https://api.backendless.com/v1/users/register',
      contentType: 'application/json',
      data: JSON.stringify({name, email, password}),
      success: () => {
        console.log('registered!')
        this.login(email, password);
      }
    });
  },
  login(email, password){
    $.ajax({
      type: 'POST',
      url: 'https://api.backendless.com/v1/users/login',
      contentType: 'application/json',
      data: JSON.stringify({login: email, password}),
      success: (response) => {
        console.log('logged in!')
        this.set({ authenticated: true});
          window.localStorage.setItem('user-token',response['user-token']);
          window.localStorage.setItem('email',response.email);
          window.localStorage.setItem('ownerId',response.ownerId);
          browserHistory.push('/home');
        }
      })
    },
  logout(){
    $.ajax({
      contentType: 'application/json',
      url: 'https://api.backendless.com/v1/users/logout',
      success: ()=> {
        this.clear();
        window.localStorage.clear();
        browserHistory.push('/');
      }
    })
  },

  translateCurrentLocation() {
    let positionData = {};
    let loadData = new Promise((resolve,reject) => {
      navigator.geolocation.getCurrentPosition(function(position) {
        positionData.lat = position.coords.latitude;
        positionData.long = position.coords.longitude;
        if(positionData.lat && positionData.long) {
          resolve(positionData);
        } else {
          reject;
        }
      });
    });
    console.log(loadData);
    return loadData;
  }
})

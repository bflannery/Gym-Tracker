import Backbone from 'backbone';
import $ from 'jquery';
import Movement from '../Models/movementModel';
import {browserHistory} from 'react-router';
import _ from 'underscore';
import store from '../store';

export default Backbone.Collection.extend({
    model: Movement,


  getToken(code) {

    let data = $.param({
        'grant_type': 'client_credentials',
        'client_id' : 'hx8r9mbvzej8spf4jrv7u72ah5armmzy',
        'client_secret' : 'DG3U9guPGG5mrudpuGDA6NhANbVPkWerpkZKAwDP5Ak',
        'code' : code
      });

        $.ajax({
            type: 'POST',
            url: 'https://api.ua.com/v7.1/oauth2/access_token/?',
            data : data,
            headers: {
              'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
              success: (tokenObj) => {
              this.token = tokenObj.access_token
              this.getMovements();
            }
        });
    },

getMovements() {
    $.ajax({
        type: 'GET',
        url: 'https://api.ua.com/v7.1/activity_type/',
        headers: {
            'Authorization' : 'Bearer ' + this.token
        },
        contentType: 'application/json',
        success: (data) => {
          let movements = data._embedded['activity_types'];

          let movementInfo = movements.forEach((movement, i, arr) => {
              this.add({
                name: movement.name,
                id: movement._links.self[0].id
              });
        });
      }
    });
  },

  search(movementSearch) {

    let filteredSearchArray = this.filter((movement,i,arr)=> {
      let lowerCaseName = movement.get('name').toLowerCase();
      return (lowerCaseName.indexOf(movementSearch) !== -1)

    });
      return filteredSearchArray
    }
    });

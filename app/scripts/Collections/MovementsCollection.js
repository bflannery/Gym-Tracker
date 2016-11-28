import Backbone from 'backbone';
import $ from 'jquery';
import Movement from '../Models/movementModel';
import {browserHistory} from 'react-router';
import _ from 'underscore';

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
              getMovements();
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
          console.log(data);
          this.reset();

          let movements = data._embedded['activity_types'];

          let movementsInfo = movements.forEach((movement, i, arr) => {
              this.add({
                name: movement.name,
                id: movement._links.self[0].id
              });
        });
      }
    });
  },

  search(movementSeach) {

    let filteredSearchArray = movements.filter((movement,i, arr) => {
    if(_.contains(movements.name), movementSearch) {
      return true;
    }
  });
  console.log(filteredSearchArray);
}
    });
//

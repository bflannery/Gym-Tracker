import Backbone from 'backbone';
import $ from 'jquery';
import Movement from '../Models/movementModel';
import {browserHistory} from 'react-router';

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
            console.log(data);
        }
    })
}
});

import Backbone from 'backbone';
import loggedMovement from '../Models/loggedMovementModel';
import store from '../store';
import _ from 'underscore';


export default Backbone.Collection.extend({
  model: loggedMovement,
  url: 'https://api.backendless.com/v1/data/Movements',

parse(data) {
  console.log(data)
  return data.data
}

});

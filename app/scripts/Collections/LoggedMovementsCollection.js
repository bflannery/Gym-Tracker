import Backbone from 'backbone';
import LoggedMovement from '../Models/loggedMovementModel';

export default Backbone.Collection.extend({
  model: LoggedMovement,
  url: 'https://api.backendless.com/v1/data/Movements',

parse(data) {
  return data.data
}

});

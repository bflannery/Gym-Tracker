import Backbone from 'backbone';
import Athlete from '../Models/athleteModel';
import store from '../store';

export default Backbone.Collection.extend({
  model: Athlete,
  url: 'https://api.backendless.com/v1/data/Athletes',

  parse(cycles) {
    return cycles.data
  }
});

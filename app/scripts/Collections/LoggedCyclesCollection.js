import Backbone from 'backbone';
import loggedCycle from '../Models/loggedCycleModel';
import store from '../store';

export default Backbone.Collection.extend({
  model: loggedCycle,
  url: 'https://api.backendless.com/v1/data/Cycles',

  parse(cycles) {
    return cycles.data
  }
});

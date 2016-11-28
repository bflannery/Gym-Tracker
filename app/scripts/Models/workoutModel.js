import Backbone from 'backbone';
import _ from 'underscore';

export default Backbone.Model.extend({
  idAttribute: 'objectId',
  defaults: {
    items:[]
  },

  addMovement(item) {
    let addedMovement = this.get('items').conct([item]);
    this.set({items: addedMovement});
  },

  removeMovement(item) {
    let removeMovement = _.without(this.get('items'), item);
    this.set({items: removeMovement});
  }
});

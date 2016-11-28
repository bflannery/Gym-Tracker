import Backbone from 'backbone';
import _ from 'underscore';

export default Backbone.Model.extend({
  idAttribute: 'objectId',
  defaults: {
    movements:[]
  },

  addMovement(movement) {
    let addedMovement = this.get('movements').concat([movement]);
    this.set({movements: addedMovement});
  },

  removeMovement(movement) {
    let removeMovement = _.without(this.get('movements'), movement);
    this.set({movements : removeMovement});
  }
});

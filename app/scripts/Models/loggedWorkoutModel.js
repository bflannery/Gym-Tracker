import Backbone from 'backbone';
import config from '../config';

export default Backbone.Model.extend({
rootUrl: 'https://api.backendless.com/v1/data/Workouts',

  idAttribute: 'objectId',
  defaults: {
    name: ''
  },

  addMovementToWorkout({name, reps, sets, weight, time, notes}) {
    this.save({
        movements: this.get('movements').concat([{
          ___class: 'Movements',
          name   : name,
          reps   : reps,
          sets   : sets,
          weight : weight,
          time   : time,
          notes  : notes,
        }])

  });
  }
});

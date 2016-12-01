import Backbone from 'backbone';
import config from '../config';

export default Backbone.Model.extend({
  rootUrl: 'https://api.backendless.com/v1/data/Cycles',

    idAttribute: 'objectId',
    defaults: {
      name: ''
    },

    addWorkoutToCycle({name}) {
      this.save({
          workouts: this.get('workouts').concat([{
            ___class: 'Workouts',
            name : name,
          }])

    });
    }
  });

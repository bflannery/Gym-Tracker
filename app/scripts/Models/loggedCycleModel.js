import Backbone from 'backbone';
import config from '../config';

export default Backbone.Model.extend({
  rootUrl: 'https://api.backendless.com/v1/data/Cycles',

    idAttribute: 'objectId',
    defaults: {
      name: ''
    },

    addWorkoutToCycle({id}) {
      this.save({
          workouts: this.get('workouts').concat([{
            ___class: 'Workouts',
            objectId : id,
          }])

    });
    }
  });

import Backbone from 'backbone';
import config from '../config';
import $ from 'jquery';

export default Backbone.Model.extend({
  rootUrl: 'https://api.backendless.com/v1/data/Cycles',

    idAttribute: 'objectId',
    defaults: {
      name: '',
      startDate: '',
      endDate: ''
    },

    addWorkoutToCycle({id}) {
      this.save({
          workouts: this.get('workouts').concat([{
            ___class: 'Workouts',
            objectId : id,
          }])

    });
  },

  removeWorkoutFromCycle(objectId) {
    let newCycleWorkouts = this.get('workouts').filter((workout, i , arr) => {

      if(objectId !== workout.objectId) {
        return true
      }
    })
    this.save({
      workouts: newCycleWorkouts
    })
  },

  addDatesToCycle(startDate, endDate) {
    this.save({
      startDate: startDate,
      endDate: endDate
    });
  }
  });

import Backbone from 'backbone';
import config from '../config';
import $ from 'jquery';

export default Backbone.Model.extend({
  rootUrl: 'https://api.backendless.com/v1/data/Cycles',

    idAttribute: 'objectId',
    defaults: {
      name: '',
      startDate: '',
      endDate: '',
      cycleWorkouts: [{
        workoutDate: ''
      }],
    },

    addWorkoutToCycle({id, date}) {
      this.save({
          cycleWorkouts: this.get('cycleWorkouts').concat([{
            ___class: 'CycleWorkouts',
            workoutDate : date,
            workout: {
              ___class: 'Workouts',
              objectId: id,
            }
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
    },
    {
      success: () => {
        this.fetch();
      }
    })
  },

  addDatesToCycle(startDate, endDate) {
    this.save({
      startDate: startDate,
      endDate: endDate
    });
  }
  });

import Backbone from 'backbone';
import config from '../config';
import $ from 'jquery';

export default Backbone.Model.extend({
  rootUrl: 'https://api.backendless.com/v1/data/Cycles',

    idAttribute: 'objectId',
    defaults: {
      name: '',
    },

    addDateToWorkout(workoutDate, cycleWorkoutId) {
        $.ajax({
            type: 'PUT',
            url: `https://api.backendless.com/v1/data/CycleWorkouts/${cycleWorkoutId}`,
            contentType: 'application/json',
            data: JSON.stringify({
              workoutDate: workoutDate
            }),
            success: () => {
                this.fetch();
            }
          })
    },

    addWorkoutToCycle({id, name}) {
      this.save({
          cycleWorkouts: this.get('cycleWorkouts').concat([{
            ___class: 'CycleWorkouts',
            workout: name,
            workout: {
              ___class: 'Workouts',
              objectId: id,

            }
          }])

    });
  },

  removeWorkoutFromCycle(objectId) {

    let newCycleWorkouts = this.get('cycleWorkouts').filter((cycleWorkout, i , arr) => {
      if(objectId !== cycleWorkout.objectId) {
        return true
      }
    })
    this.save({
      cycleWorkouts: newCycleWorkouts
    })
  },

  addDatesToCycle(startDate, endDate) {
    console.log(startDate)
    console.log(endDate)
    this.save({
        cycleStartDate: startDate,
        cycleEndDate: endDate
    })
  }
  });

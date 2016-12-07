import Backbone from 'backbone';
import config from '../config';
import $ from 'jquery';

export default Backbone.Model.extend({
  rootUrl: 'https://api.backendless.com/v1/data/Cycles',

    idAttribute: 'objectId',
    defaults: {
      name: '',
    },

    addDateToWorkout(workoutDate) {
      console.log(workoutDate)
      this.save({
        cycleWorkouts: this.get('cycleWorkouts').concat([{
          ___class: 'CycleWorkouts',
          workoutDate: workoutDate,
          workout: {
            ___class: 'Workouts',
            objectId: id,
            date: date
          }
        }])
      });
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
    console.log(startDate)
    console.log(endDate)
    this.save({
        cycleStartDate: startDate,
        cycleEndDate: endDate
    })
  }
  });

import Backbone from 'backbone';
import config from '../config';
import $ from 'jquery';

export default Backbone.Model.extend({
rootUrl: 'https://api.backendless.com/v1/data/Workouts',

  idAttribute: 'objectId',
  defaults: {
    name: '',
    workoutDate: ''
  },

  addMovementToWorkout({name, reps, sets, weight, created, notes}) {
    this.save({
        movements: this.get('movements').concat(

          [{
          ___class: 'Movements',
          name   : name,
          reps   : reps,
          sets   : sets,
          weight : weight,
        }]),

  }, {
    success: (workout, response) => {
      this.trigger('change');
    }
  }
);
  },

  removeMovementFromWorkout(objectId){

      let newWorkoutMovements = this.get('movements').filter((movement, i ,arr) => {

        if(objectId !== movement.objectId) {
          return true
        }
      })
      this.save ({
        movements: newWorkoutMovements
      },
    {
      success: () => {

        $.ajax({
          type: 'DELETE',
          url: `https://api.backendless.com/v1/data/Movements/${objectId}`,
          success: () => {
            console.log('deleted')

          },
          error: () => {
            console.log('nice try')
            }
        })
      }
    })
  },

  addDateToWorkout(date) {
    this.save({
        workoutDate: date
      });
  },

//   deleteWorkout(objectId) {
//     let newWorkoutList = this.get('workouts').filter((workout, i , arr) => {
//       if(objectId !== workouts.objectId) {
//         return true
//       }
//     })
//     this.save({
//       Workouts: newWorkoutList,
//
//     },{
//       success: () => {
//
//         $.ajax({
//           type: 'DELETE',
//           url: `https://api.backendless.com/v1/data/Workouts/${objectId}`,
//           success: (response) => {
//             console.log('deleted')
//               this.fetch(response)
//           },
//           error: () => {
//             console.log('nice try')
//             }
//         })
//       }
//     })
// }
});

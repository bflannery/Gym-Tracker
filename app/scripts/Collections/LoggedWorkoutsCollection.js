import Backbone from 'backbone';
import LoggedWorkout from '../Models/loggedWorkoutModel';

export default Backbone.Collection.extend({
  model: LoggedWorkout,
  url: 'https://api.backendless.com/v1/data/workouts',

parse(data) {
  console.log(data);
  return data.data
},

addWorkout({movement, reps, sets, weight}) {
  this.fetch({success: () => {
    let newWorkout = this.findWhere({movement: movement});
    if(!newWorkout) {
      this.create({movement, reps, sets, weight})
    }
  }
})
}

});

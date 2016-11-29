import Backbone from 'backbone';
import LoggedMovement from '../Models/loggedMovementModel';

export default Backbone.Collection.extend({
  model: LoggedMovement,
  url: 'https://api.backendless.com/v1/data/movements',

parse(data) {
  console.log(data);
  return data.data
},

addMovement({id, movement, reps, sets, weight, notes}) {
  this.fetch({success: () => {
    let newWorkout = this.findWhere({movement: movement});
    if(!newWorkout) {
      this.create({id, movement, reps, sets, weight, notes})
    }
  }
})
}

});

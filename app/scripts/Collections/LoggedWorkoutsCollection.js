import Backbone from 'backbone';
import loggedWorkout from '../Models/loggedWorkoutModel';
import store from '../store';

export default Backbone.Collection.extend({
  model: loggedWorkout,
  url: 'https://api.backendless.com/v1/data/Workouts',

parse(workouts) {
  return workouts.data
}
});

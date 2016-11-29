import Movement from './Collections/MovementsCollection';
import Session from './Models/sessionModel';
import Workout from './Models/workoutModel';
import LoggedMovement from './Collections/LoggedMovementsCollection';
import LoggedWorkout from './Collections/LoggedWorkoutsCollection';

export default {
  session : new Session(),
  movement : new Movement(),
  workout : new Workout(),
  loggedWorkout : new LoggedWorkout(),
  loggedMovement : new LoggedMovement()
}

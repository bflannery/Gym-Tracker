import Movements from './Collections/MovementsCollection';
import Session from './Models/sessionModel';
import Workout from './Models/workoutModel';
import LoggedMovement from './Collections/LoggedMovementsCollection';
import LoggedWorkout from './Collections/LoggedWorkoutsCollection';

export default {
  session : new Session(),
  movements : new Movements(),
  workout : new Workout(),
  loggedWorkout : new LoggedWorkout(),
  loggedMovement : new LoggedMovement()
}

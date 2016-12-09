import Movements from './Collections/MovementsCollection';
import Session from './Models/sessionModel';
import Workout from './Models/workoutModel';
import Athletes from './Collections/AthletesCollection';
import LoggedMovement from './Collections/LoggedMovementsCollection';
import LoggedWorkout from './Collections/LoggedWorkoutsCollection';
import LoggedCycle from './Collections/LoggedCyclesCollection';


export default {
  session        : new Session(),
  movements      : new Movements(),
  workout        : new Workout(),
  athletes       : new Athletes(),
  loggedMovement : new LoggedMovement(),
  loggedWorkout  : new LoggedWorkout(),
  loggedCycle    : new LoggedCycle()

}

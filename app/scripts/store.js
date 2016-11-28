import Movement from './Collections/MovementsCollection';
import Session from './Models/sessionModel';
import Workout from './Models/workoutModel';

export default {
  session : new Session(),
  movement : new Movement(),
  workout : new Workout()
}

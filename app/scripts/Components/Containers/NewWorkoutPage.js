import React from 'react';
import store from '../../store';
import { browserHistory} from'react-router';

export default React.createClass({
  render() {
    return (
      <div className="create-workout">
        <h2> Create New Workout </h2>
        <input type="text" ref="create" placeholder="Create New Workout"/>
        <input type="submit" value="Create" onClick={this.handleClick}/>
      </div>
    );
  },

  handleClick(){
    let workoutName = this.refs.create.value;
    store.loggedWorkout.create({
    name : workoutName
    });
    browserHistory.push("/workouts");
  }
});


//   render() {
//     let filteredSearch=store.movement.search(this.state.searchTerm);
//
//     return (
//           <div className="workout-form">
//             <h2> Make a New Workout </h2>
//               <div className="search-movement-container">
//                   <form className="search" onSubmit={this.handleSubmit}>
//                     <input type="text" ref="search" placeholder="Search Movements..."/>
//                     <input type="submit" value="Search"/>
//                   </form>
//               </div>
//           <MovementList movements={filteredSearch} />
//           <WorkoutTemplate workout={this.state.workout}/>
//         </div>
//     );
//   },
//
//   handleSubmit(e){
//     e.preventDefault();
//     this.setState({searchTerm : this.refs.search.value });
//   },
//
//   handleClick(){
//     let workout = this.refs.create.value;
//     console.log(workout)
//     store.loggedWorkout.create({name});
//   }
// });

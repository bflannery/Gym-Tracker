import Backbone from 'backbone';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import loggedWorkout from '../../app/scripts/Models/loggedWorkoutModel.js';

describe('loggedCycleModel model', () => {

  let workout;

  beforeEach(() => {
    workout = new loggedWorkout();
  });

  it('should be a function (because it is a constructor)', () => {
    expect(loggedWorkout).to.be.a('function');
  });

  it('should create a Backbone Model' , () => {
    expect(workout).to.be.an.instanceof(Backbone.Model);
  });

  it('should have an attribute id of objectId', () => {
    expect(workout).to.have.property('idAttribute');
		expect(workout.idAttribute).to.equal('objectId');
  });

  //logggedWorkout Methods

  it('should have an addMovementToWorkout method', () => {
    expect(workout).to.have.property('addMovementToWorkout');
    expect(workout.addMovementToWorkout).to.be.a('function');
  });

  it('should have a removeMovementFromWorkout method', () => {
    expect(workout).to.have.property('removeMovementFromWorkout');
    expect(workout.removeMovementFromWorkout).to.be.a('function');
  });

  it('should have an addDateToWorkout method', () => {
    expect(workout).to.have.property('addDateToWorkout');
    expect(workout.addDateToWorkout).to.be.a('function');
  });

  it('should have an deleteWorkout method', () => {
    expect(workout).to.have.property('deleteWorkout');
    expect(workout.deleteWorkout).to.be.a('function');
  });
});

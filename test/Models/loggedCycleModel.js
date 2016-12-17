import Backbone from 'backbone';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import loggedCycle from '../../app/scripts/Models/loggedCycleModel.js';

describe('loggedCycleModel model', () => {

  let cycle;

  beforeEach(() => {
    cycle = new loggedCycle();
  });

  it('should be a function (because it is a constructor)', () => {
    expect(loggedCycle).to.be.a('function');
  });

  it('should create a Backbone Model' , () => {
    expect(cycle).to.be.an.instanceof(Backbone.Model);
  });

  it('should have an attribute id of objectId', () => {
    expect(cycle).to.have.property('idAttribute');
		expect(cycle.idAttribute).to.equal('objectId');
  });

  //loggedCycle Methods

  it('should have an addDateToWorkout method', () => {
    expect(cycle).to.have.property('addDateToWorkout');
    expect(cycle.addDateToWorkout).to.be.a('function');
  });

  it('should have an addWorkoutToCycle method', () => {
    expect(cycle).to.have.property('addWorkoutToCycle');
    expect(cycle.addWorkoutToCycle).to.be.a('function');
  });

  it('should have a removeWorkoutFromCycle method', () => {
    expect(cycle).to.have.property('removeWorkoutFromCycle');
    expect(cycle.removeWorkoutFromCycle).to.be.a('function');
  });

  it('should have an addDatesToCycle method', () => {
    expect(cycle).to.have.property('addDateToWorkout');
    expect(cycle.addDateToWorkout).to.be.a('function');
  });

  it('should have an deleteCycle method', () => {
    expect(cycle).to.have.property('deleteCycle');
    expect(cycle.deleteCycle).to.be.a('function');
  });
});

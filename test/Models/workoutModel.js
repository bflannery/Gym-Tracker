import Backbone from 'backbone';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import workoutModel from '../../app/scripts/Models/workoutModel.js';

describe('workoutModel model', () => {

  let workout;

  beforeEach(() => {
    workout = new workoutModel();
  });

  it('should be a function (because it is a constructor)', () => {
    expect(workoutModel).to.be.a('function');
  });

  it('should create a Backbone Model' , () => {
    expect(workout).to.be.an.instanceof(Backbone.Model);
  });

  it('should have an attribute id of objectId', () => {
    expect(workout).to.have.property('idAttribute');
		expect(workout.idAttribute).to.equal('objectId');
  });
});

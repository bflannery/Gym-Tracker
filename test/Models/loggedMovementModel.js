import Backbone from 'backbone';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import loggedMovement from '../../app/scripts/Models/loggedMovementModel.js';

describe('loggedMovementModel model', () => {

  let movement;

  beforeEach(() => {
    movement = new loggedMovement();
  });

  it('should be a function (because it is a constructor)', () => {
    expect(loggedMovement).to.be.a('function');
  });

  it('should create a Backbone Model' , () => {
    expect(movement).to.be.an.instanceof(Backbone.Model);
  });

  it('should have an attribute id of objectId', () => {
    expect(movement).to.have.property('idAttribute');
		expect(movement.idAttribute).to.equal('objectId');
  });

});

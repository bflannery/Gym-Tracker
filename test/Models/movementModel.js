import Backbone from 'backbone';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import movementModel from '../../app/scripts/Models/movementModel.js';

describe('movementModel model', () => {

  let movement;

  beforeEach(() => {
    movement = new movementModel();
  });

  it('should be a function (because it is a constructor)', () => {
    expect(movementModel).to.be.a('function');
  });

  it('should create a Backbone Model' , () => {
    expect(movement).to.be.an.instanceof(Backbone.Model);
  });

  it('should have an attribute id of objectId', () => {
    expect(movement).to.have.property('idAttribute');
		expect(movement.idAttribute).to.equal('objectId');
  });
});

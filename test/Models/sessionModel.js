import Backbone from 'backbone';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import sessionModel from '../../app/scripts/Models/sessionModel.js';

describe('sessionModel model', () => {

  let session;

  beforeEach(() => {

    sessionModel.prototype.initialize = () => {

    };
    session = new sessionModel();
  });

  it('should be a function (because it is a constructor)', () => {
    expect(sessionModel).to.be.a('function');
  });

  it('should create a Backbone Model' , () => {
    expect(session).to.be.an.instanceof(Backbone.Model);
  });

  it('should have an attribute id of objectId', () => {
    expect(session).to.have.property('idAttribute');
		expect(session.idAttribute).to.equal('objectId');
  });
  
  it('should have an initialize method', () => {
    expect(session).to.have.property('initialize');
    expect(session.initialize).to.be.a('function');
  });

  it('should have an register method', () => {
    expect(session).to.have.property('register');
    expect(session.register).to.be.a('function');
  });

  it('should have an login method', () => {
    expect(session).to.have.property('login');
    expect(session.login).to.be.a('function');
  });

  it('should have an logout method', () => {
    expect(session).to.have.property('logout');
    expect(session.logout).to.be.a('function');
  });
});

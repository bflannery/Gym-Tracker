import Backbone from 'backbone';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Athlete from '../../app/scripts/Models/athleteModel.js';

describe('athleteModel model', () => {

  let athlete;

  beforeEach(() => {
    athlete = new Athlete();
  });

  it('should be a function (because it is a constructor)', () => {
    expect(Athlete).to.be.a('function');
  });

  it('should create a Backbone Model' , () => {
    expect(athlete).to.be.an.instanceof(Backbone.Model);
  });

  it('should have an attribute id of objectId', () => {
    expect(athlete).to.have.property('idAttribute');
		expect(athlete.idAttribute).to.equal('objectId');
  });

  //AthleteModel Methods

  it('should have an addCycleToAthlete method', () => {
    expect(athlete).to.have.property('addCycleToAthlete');
    expect(athlete.addCycleToAthlete).to.be.a('function');
  });

  it('should have a removeCycleFromAthlete method', () => {
    expect(athlete).to.have.property('removeCycleFromAthlete');
    expect(athlete.removeCycleFromAthlete).to.be.a('function');
  });

  it('should have a deleteAthlete method', () => {
    expect(athlete).to.have.property('deleteAthlete');
    expect(athlete.deleteAthlete).to.be.a('function');
  });

  it('should have a addPhoto method', () => {
    expect(athlete).to.have.property('addPhoto');
    expect(athlete.addPhoto).to.be.a('function');
  })

});

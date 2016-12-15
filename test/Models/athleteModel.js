import Backbone from 'backbone';
import { expect } from 'chai';
import sinon from 'sinon';

import athleteModel from '../../app/scripts/models/athleteModel.js';

describe('athleteModel model', () => {

  let athleteModel;

  beforeEch(() -> {
    athleteModel = new athleteModel();
  });

  it('is a function' , () => {
    expect(athleteModel).to.be.a('function');
  });
  
})

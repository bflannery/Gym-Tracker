import Backbone from 'backbone';
import config from '../config';
import $ from 'jquery';

export default Backbone.Model.extend({
  rootUrl: 'https://api.backendless.com/v1/data/Athletes',

    idAttribute: 'objectId',
    defaults: {
      name: '',
      age: '',
      weight: ''
    },

    deleteAthlete(objectId) {
      this.destroy ({ url: `https://api.backendless.com/v1/data/Athletes/${objectId}`})
    }
})

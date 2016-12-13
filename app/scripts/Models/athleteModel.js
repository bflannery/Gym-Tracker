import Backbone from 'backbone';
import config from '../config';
import $ from 'jquery';

export default Backbone.Model.extend({
    urlRoot: 'https://api.backendless.com/v1/data/Athletes',
    idAttribute: 'objectId',
    defaults: {
      name: '',
      age: '',
      weight: ''
    },

    addCycleToAthlete({id, name}) {
      this.save({
        athleteCycles: this.get('athleteCycles').concat([{
          ___class: 'AthleteCycles',
          cycleName: name,
          cycle: {
            ___class: 'Cycles',
            objectId: id
          }
        }])
      });
    },
    removeCycleFromAthlete(objectId) {
      let newAthleteCycles = this.get('athleteCycles').filter((athleteCycle, i , arr) => {
        if(objectId !== athleteCycle.objectId) {
          return true
          }
        })
      this.save({
          athleteCycles: newAthleteCycles
        })
    },

    deleteAthlete(objectId) {
      this.destroy ({ url: `https://api.backendless.com/v1/data/Athletes/${objectId}`})
    },

    addPhoto(fileUrl) {
      this.save({pic: fileUrl}, {type: 'PUT'});
    }
});

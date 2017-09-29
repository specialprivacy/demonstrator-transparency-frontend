import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return new Ember.RSVP.hash({
      data: this.get('store').query('information', {
        //filter: {
        //  informationFor: {
        //    id: "subjectid"
        //  }
        //},
        include: "information-type,information-origin",
        sort: "-timestamp"
      }),
      origins: this.get('store').query('informationOrigin', {}).then(function (results) {
        return results.forEach(function (result) {
          result.set('enabled', true);
        })
      }),
      types: this.get('store').query('informationType', {}).then(function (results) {
        return results.forEach(function (result) {
          result.set('enabled', true);
        })
      })
    })
  }
});

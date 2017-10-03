import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  currentUser: Ember.inject.service('current-user'),
  model(){
    return new Ember.RSVP.hash({
      dataController: this.get('store').query('data-controller', {}).then(function (controllers){
        return controllers.objectAt(0);
      }),
      data: this.get('store').query('information', {
        filter: {
          "information-for": {
            id: this.get('currentUser.user.id')
          }
        },
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

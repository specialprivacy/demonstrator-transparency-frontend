import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin,{
  currentUser: Ember.inject.service('current-user'),
  beforeModel() {
    return this._loadCurrentUser();
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser();
  },

  _loadCurrentUser() {
    var _this = this;
    return this.get('currentUser').load().catch(function(error)
    {
      if(_this.get('session.isAuthenticated')){
        _this.get('session').invalidate()
      }
    })
  },

  redirect: function(){
    this.transitionTo('dashboard');
  }
});

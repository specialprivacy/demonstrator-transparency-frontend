import Ember from 'ember';
import MuLogoutMixin from 'ember-mu-login/mixins/mu-logout';

export default Ember.Controller.extend(MuLogoutMixin, {
  session: Ember.inject.service('session')
});

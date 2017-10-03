import Ember from 'ember';

const { inject: { service }, isEmpty, RSVP } = Ember;

export default Ember.Service.extend({
  session: Ember.inject.service('session'),
  store: Ember.inject.service('store'),
  user: null,
  load() {
    var _this = this;
    return new Ember.RSVP.Promise(function (resolve, reject) {
      var accountId;
      accountId = _this.get('session.data.authenticated.relationships.account.data.id');
      if (Ember.isEmpty(accountId)) {
        return reject();
      } else {
        return _this.get('store').findRecord('account', accountId, {}).then(function (account) {
          return account.get('user').then(function (user) {
            _this.set('user', user);
            return resolve();
          });
        })["catch"](reject);
      }
    });
  }
});

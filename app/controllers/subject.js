import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleConsent: function(consent){
      consent.toggleProperty('isGiven');
      consent.save();
      return false;
    }
  }
});

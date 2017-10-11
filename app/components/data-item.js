import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleProperty(consent, propertyName){
      return consent.toggleProperty(propertyName);
    }
  }
});

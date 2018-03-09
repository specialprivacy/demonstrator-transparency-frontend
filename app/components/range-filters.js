import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    resetStartDate: function() {
      this.set('startDate', null);
    },
    resetEndDate: function() {
      this.set('endDate', null);
    }
  }
});

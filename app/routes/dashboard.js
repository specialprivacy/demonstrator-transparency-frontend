import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    // when entering the route
    // if there is no eventSource
    // create one and connect to the server
    if (! this.eventSource) {
      var store = this.store;
      this.eventSource = new EventSource('/push-tester/connect').addEventListener('message', (e) => {
        var pushData = window.$.parseJSON(e.data);
        store.pushPayload('report', pushData);
      });

    }
  },
  deactivate: function(){
    // when exiting the route, close the connection
    // and set the eventSource variable back to null
    if (this.eventSource) {
      this.eventSource.close();
      this.eventSource = null;
    }
  },
  model: function() {
    // load all previous reports from the store
    return this.get('store').findAll('report');
  }
});

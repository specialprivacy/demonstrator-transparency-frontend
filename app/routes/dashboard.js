import Route from '@ember/routing/route';
import { A } from '@ember/array';

export default Route.extend({
  activate: function() {
    // when entering the route
    // if there is no eventSource
    // create one and connect to the server
    if (! this.eventSource) {
      const controller = this.controllerFor('dashboard');
      this.eventSource = new EventSource('/push-tester/connect').addEventListener('message', controller.handleMessage.bind(controller));
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
    return this.get('store').findAll('report').then(reports => {
      let model = A();
      reports.sortBy('timestamp:desc').forEach(report => {
        model.pushObject(report);
      });
      return model;
    });
  },

  setupController: function(controller, model) {
    this._super(controller, model);

    model.forEach(report => {
      controller.updateCharts(report);
    });
  }
});

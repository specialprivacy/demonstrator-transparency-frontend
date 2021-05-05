import Route from '@ember/routing/route';

export default Route.extend({
  activate: function() {
    // when entering the route
    // if there is no eventSource
    // create one and connect to the server
    if (! this.eventSource) {
      const controller = this.controllerFor('dashboard');
      // TODO: generate random client id?
      this.eventSource = new EventSource('/transparency-backend/connect?clientId=transparency-frontend').addEventListener('message', controller.handleMessage.bind(controller));
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
    return this.get('store').peekAll('report')
  },

  setupController: function(controller, model) {
    this._super(controller, model);

    model.forEach(report => {
      controller.updateCharts(report);
    });
  }
});

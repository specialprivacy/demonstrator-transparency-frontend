import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.get('store').query('consent', {
      filter: {
        "given-by": {
          id: "DF796848-A1C5-11E7-8706-970466095ABF"
        }
      },
      include: "given-to,consent-for,purpose"
    });
  }
});

import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  status: DS.attr('string'),
  timestamp: DS.attr('date'),
  policy: DS.attr('string'),
  log: DS.attr('string'),

  purpose: DS.attr('string'),
  attributes: DS.attr('string-set'),

  ok: Ember.computed('status', function() {
    return this.get('status').toLowerCase() === 'ok';
  }),
  formattedTimestamp: Ember.computed('timestamp', function(){
    return window.moment(this.get('timestamp')).format('MMMM Do YYYY, h:mm:ss a');
  })
});

import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: Ember.computed.collect.apply(this,['id','label', 'name', 'icon', 'tooltip']),

  label: attr('string'),
  name: attr('string'),
  originFor: belongsTo('information', {inverse: null }),


  icon: Ember.computed('name', function(){
    return this.get('icons')[this.get('name')];
  }),
  tooltip: Ember.computed('name', function(){
    return this.get('tooltips')[this.get('name')];
  }),

  icons: {
    "service_data": "assignment",
    "data_i_provided": "fingerprint",
    "data_provided_by_others": "hearing",
    "data_my_behavior": "visibility",
    "inferred_data_about_me": "timeline"
  },

  tooltips: {
    "service_data": "This is any data that is required in order to provide the service in question (e.g., name, address, payment information).",
    "data_i_provided": "This includes any data you provided to the service intentionally (e.g., posts, likes, shares, comments, search queries).",
    "data_provided_by_others": "This shows data, which other users or other kinds of sources provided about you.",
    "data_my_behavior": "This shows any data the service provider observes about you while you use the service (e.g., browsing behavior).",
    "inferred_data_about_me": "Shows data, which is derived from other data (e.g., profiles for marketing, location tracks, possible preferences)."
  }
});

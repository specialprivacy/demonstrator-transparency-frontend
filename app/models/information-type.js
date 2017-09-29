import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: Ember.computed.collect.apply(this,['id','label', 'name', 'icon', 'tooltip', 'component']),

  label: attr('string'),
  name: attr('string'),
  icon: attr('string'),
  tooltip: attr('string'),
  component: attr('string'),
  typeFor: belongsTo('information', {inverse: null })
});

import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: Ember.computed.collect.apply(this,['id','timestamp', 'label', 'value']),

  timestamp: attr('datetime'),
  label: attr('string'),
  value: attr('string'),
  informationFor: belongsTo('user', {inverse: null }),
  informationGivenTo: belongsTo('data-controller', {inverse: null }),
  informationType: belongsTo('information-type', {inverse: null }),
  informationOrigin: belongsTo('information-origin', {inverse: null }),
  consents: hasMany('consent', {inverse: null })
});

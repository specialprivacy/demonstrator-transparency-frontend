import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: Ember.computed.collect.apply(this,['id','isGiven']),

  isGiven: attr('boolean'),
  givenBy: belongsTo('subject', {inverse: null }),
  givenTo: belongsTo('data-controller', {inverse: null }),
  purpose: belongsTo('purpose', {inverse: null }),
  consentFor: belongsTo('information', {inverse: null })
});

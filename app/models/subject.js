import Ember from 'ember';
import Model from 'ember-data/model';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: Ember.computed.collect.apply(this,['id']),

  information: hasMany('information', {inverse: "informationFor" }),
  consents: hasMany('consent', {inverse: null })
});

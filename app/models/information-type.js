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
  typeFor: belongsTo('information', {inverse: null }),

  icon: Ember.computed('name', function(){
    return this.get('icons')[this.get('name')];
  }),
  tooltip: Ember.computed('name', function(){
    return this.get('tooltips')[this.get('name')];
  }),

  icons: {
    "text": "text-format",
    "image": "insert-photo",
    "video": "play-circle-filled",
    "audio": "audiotrack",
    "location": "location-on"
  },

  tooltips: {
    "text": "Show or hide text data.",
    "image": "Show or hide images.",
    "video": "Show or hide videos.",
    "audio": "Show or hide audio records.",
    "location": "Show or hide location data."
  }
});

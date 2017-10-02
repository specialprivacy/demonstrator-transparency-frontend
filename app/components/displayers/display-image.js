import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  className: 'flex',
  attributeBindings: ['src', 'alt'],
  src: Ember.computed.alias('item.value'),
  alt: Ember.computed.alias('item.value')
});

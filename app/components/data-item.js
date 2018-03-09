import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['data-item'],
  classNameBindings: ['item.new:new'],
});

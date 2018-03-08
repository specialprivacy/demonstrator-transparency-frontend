import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['data-item'],
  classNameBindings: ['item.new:new'],

  didInsertElement: function() {
    let item = this.get('item');
    item.set('new', true);
    Ember.run.later(function(){item.set('new', false)}, 3000);
  }
});

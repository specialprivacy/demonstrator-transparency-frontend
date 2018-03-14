import Component from '@ember/component';

export default Component.extend({
  classNames: ['data-item'],
  classNameBindings: ['item.new:new'],
});

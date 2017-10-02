import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  componentName: Ember.computed('item.informationType.name', function(){
    return "displayers/display-"+this.get('item.informationType.name');
  })
});

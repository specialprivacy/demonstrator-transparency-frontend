import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  componentName: computed('item.informationType.name', function(){
    return "displayers/display-"+this.get('item.informationType.name');
  })
});

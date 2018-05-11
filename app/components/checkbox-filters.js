import Component from '@ember/component';

export default Component.extend({
  showCheckboxes: false,
  actions: {
    showCheckboxesAction() {
      this.toggleProperty('showCheckboxes');
    }
  }
});

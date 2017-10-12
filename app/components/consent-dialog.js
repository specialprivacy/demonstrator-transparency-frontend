import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  customMessage: Ember.computed(function(){
    return this.get('message');
  }),

  showDialogChanged: Ember.observer('showDialog', function() {
    if(this.get('showDialog')){
      var $body = $(document.body);
      var oldWidth = $body.innerWidth();
      $body.css("overflow", "hidden");
      $body.width(oldWidth);
    }
    else{
      var $body = $(document.body);
      $body.css("overflow", "auto");
      $body.width("auto");
    }
  }),

  actions:{
    closeDialog(){
      this.sendAction('closeDialog');
    },
    confirmAction(){
      this.sendAction('confirmAction', this.get('consent'), this.get('customMessage'));
    }
  }
});

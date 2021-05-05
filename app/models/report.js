import DS from 'ember-data';
import { computed } from '@ember/object';
import { later } from '@ember/runloop';

export default DS.Model.extend({
  timestamp: DS.attr("date"),
  process: DS.attr("string"),
  purpose: DS.attr("string"),
  processing: DS.attr("string"),
  recipient: DS.attr("string"),
  storage: DS.attr("string"),
  userID: DS.attr("string"),
  dataCollection: DS.attr("string-set"),
  hasConsent: DS.attr("boolean"),
  eventID: DS.attr("string"),

  message: computed("hasConsent", "process", "userId", function(){
    const check = this.get('hasConsent') ? 'complied' : 'did not comply';
    return `Process [${this.get("process")}] ${check} with the policy set by user "${this.get("userID")}".`;
  }),
  formattedTimestamp: computed('timestamp', function(){
    return window.moment(this.get('timestamp')).format('MMMM Do YYYY, h:mm:ss a');
  }),

  init: function() {
    this._super(...arguments);
    let item = this;
    item.set('new', true);
    later(function(){
      if(!item.get('isDestroyed')){
        item.set('new', false);
      }
    }, 3000);
  }
});

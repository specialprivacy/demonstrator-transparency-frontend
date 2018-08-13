import DS from 'ember-data';
import { inject } from '@ember/service';
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


  /*dataRetriever: inject('data-retriever'),

  status: DS.attr('string'),
  timestamp: DS.attr('date'),
  policy: DS.attr('string'),

  purpose: DS.attr('string'),
  attributes: DS.attr('string-set'),
  user: DS.attr('string'),
  event: DS.attr('string'),


  log: computed('ok', 'user', 'event', function(){
    const check = this.get('ok') ? 'complied' : 'did not comply';
    return `Event ${check} with the policy set by user "${this.get('user')}".`;
  }),
  ok: computed('status', function() {
    return this.get('status').toLowerCase() === 'ok';
  }),
  formattedTimestamp: computed('timestamp', function(){
    return window.moment(this.get('timestamp')).format('MMMM Do YYYY, h:mm:ss a');
  }),

  complianceLabel: computed('ok', function(){
    return this.get('dataRetriever').getPurpose(this.get('ok'));
  }),
  purposeLabel: computed('purpose', function(){
    return this.get('dataRetriever').getPurpose(this.get('purpose'));
  }),
  attributesLabel: computed('attributes.@each', function(){
    const dataRetriever = this.get('dataRetriever');
    const attributes = this.get('attributes');
    let labels = attributes.map(function(item){
      return dataRetriever.getAttribute(item);
    });
    return labels;
  }),*/

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

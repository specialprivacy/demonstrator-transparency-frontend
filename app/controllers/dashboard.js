import Ember from 'ember';

export default Ember.Controller.extend({
  data: Ember.computed.alias('model'),

  // For every item in "data" array, checks if its "attribute" appears in the "check" array
  check: function(data, check, attribute){
    return data.filter(function(item){
      let attr = item["get"] ? item.get(attribute) : item[attribute];
      return check.contains(attr)
    });
  },

  compliances: [{label: "Follows policies", value: true, enabled: true, icon: "check"}, {label: "Doesn't follow policies", value:false, enabled: true, icon: "not interested"}],
  purposes: [{label: "Accounting", value: "accounting", enabled: true}, {label: "Administration", value:"administration", enabled: true}, {label: "Charity", value:"charity", enabled: true}, {label: "News", value:"news", enabled: true}],
  attributes: [
    {label: "Birth date", value: "birth_date", enabled: true},
    {label: "Location", value: "location", enabled: true},
    {label: "Browsing history", value: "browsing_history", enabled: true},
    {label: "Degree", value: "degree", enabled: true}
  ],

  labelSorting: ['label:asc'],
  sortedCompliances: Ember.computed.sort('compliances', 'labelSorting'),
  sortedPurposes: Ember.computed.sort('purposes', 'labelSorting'),
  sortedAttributes: Ember.computed.sort('attributes', 'labelSorting'),

  checkedCompliances: Ember.computed.map('compliances.@each.enabled', function(item, index){
    if(item.enabled) {return item.value;}
  }),
  checkedPurposes: Ember.computed.map('purposes.@each.enabled', function(item, index){
    if(item.enabled) {return item.value;}
  }),
  checkedAttributes: Ember.computed.map('attributes.@each.enabled', function(item, index){
    if(item.enabled) {return item.value;}
  }),

  dataCheckedByCompliance: Ember.computed('data.@each.ok', 'checkedCompliances.@each', function(){
    return this.check(this.get('data'), this.get('checkedCompliances'), 'ok');
  }),
  dataCheckedByPurpose: Ember.computed('data.@each.purpose', 'checkedPurposes.@each', function(){
    return this.check(this.get('data'), this.get('checkedPurposes'), 'purpose');
  }),
  dataCheckedByAttributes: Ember.computed('data.@each.ok', 'checkedAttributes.@each', function(){
    let check = this.get('checkedAttributes');
    return this.get('data').filter(function(item){
      let attributes = item["get"] ? item.get("attributes") : item["attributes"];
      if(!attributes) return false;
      return attributes.any(function(attribute) {
        return check.contains(attribute);
      });
    });
  }),

  filteredData: Ember.computed.intersect('dataCheckedByCompliance', 'dataCheckedByPurpose', 'dataCheckedByAttributes'),

  dataSorting: ['timestamp:desc', 'log:asc'],
  sortedData: Ember.computed.sort('filteredData', 'dataSorting'),

  slicedData: Ember.computed('sortedData.length', function(){
    return this.get('sortedData').slice(0, 20);
  }),
  /*
  range: {
    start: null,
    end: null
  },
  timeRangeFilteredData: Ember.computed('startDate', 'endDate', 'data', function(){
    let start, end;
    start = this.get('startDate');
    end = this.get('endDate');
    return this.get('data').filter(function(item){
      if(start && moment(item.get('timestamp')).isBefore(start, 'day')) return false;
      if(end && moment(item.get('timestamp')).isAfter(end, 'day')) return false;
      return true;
    })
}),*/

  actions:{
    toggleShowReviewConsentDialog: function() {
      this.toggleProperty('showReviewConsentDialog')
    },
    toggleShowPrivacyPolicyDialog: function() {
      this.toggleProperty('showPrivacyPolicyDialog')
    },
    action1: function(){
      console.log("1");
      return null;
    },
    action2: function(){
      console.log("2");
      return null;
    }
  }
});

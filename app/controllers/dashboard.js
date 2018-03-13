import Ember from 'ember';

export default Ember.Controller.extend({
  dataRetriever: Ember.inject.service('data-retriever'),

  data: Ember.computed.alias('model'),

  // For every item in "data" array, checks if its "attribute" appears in the "check" array
  check: function(data, check, attribute){
    return data.filter(function(item){
      let attr = item["get"] ? item.get(attribute) : item[attribute];
      return check.contains(attr)
    });
  },

  compliances: Ember.computed.alias('dataRetriever.compliances'),
  purposes: Ember.computed.alias('dataRetriever.purposes'),
  attributes: Ember.computed.alias('dataRetriever.attributes'),

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

  timeRangeFilteredData: Ember.computed('startDate', 'endDate', 'data', function(){
    let start, end;
    start = this.get('startDate');
    end = this.get('endDate');
    return this.get('data').filter(function(item){
      if(start && moment(item.get('timestamp')).isBefore(start, 'day')) return false;
      if(end && moment(item.get('timestamp')).isAfter(end, 'day')) return false;
      return true;
    })
  }),

  filteredData: Ember.computed.intersect('dataCheckedByCompliance', 'dataCheckedByPurpose', 'dataCheckedByAttributes'/* TODO, 'timeRangeFilteredData'*/),

  dataSorting: ['timestamp:desc', 'log:asc'],
  sortedData: Ember.computed.sort('filteredData', 'dataSorting'),

  slicedData: Ember.computed('sortedData.length', function(){
    return this.get('sortedData').slice(0, 20);
  }),


  // Charts
  okArray: Ember.computed.filter('data.@each.ok', function(item){
    return item.get('ok');
  }),
  nokArray: Ember.computed.filter('data.@each.ok', function(item){
    return !item.get('ok');
  }),
  okSum: Ember.computed.alias('okArray.length'),
  nokSum: Ember.computed.alias('nokArray.length'),
  complianceDataObserver: Ember.observer('nokSum', 'okSum', function(){
    this.get('complianceChartData.datasets')[0].data[0] = this.get('nokSum');
    this.get('complianceChartData.datasets')[0].data[1] = this.get('okSum');
    this.notifyPropertyChange('complianceChartData');
  }).on('init'),
  complianceChartData:
  {
      datasets: [{
        data: [0,0],
        backgroundColor: [
          "#F44336", "#4CAF50"
        ],
        label: "Compliance"
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
        'Not compliant',
        'Compliant'
      ]
  },
  barChartOptions: {
    title:{
      display: false
    },
    legend:{
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  },
  pieChartOptions: {
    title:{
      display: false
    }
  },

  lifestyleArray: Ember.computed.filter('nokArray.@each.purpose', function(item){
    return item.get('purpose') === 'lifestyle';
  }),
  nutritionArray: Ember.computed.filter('nokArray.@each.purpose', function(item){
    return item.get('purpose') === 'nutrition';
  }),
  activitiesArray: Ember.computed.filter('nokArray.@each.purpose', function(item){
    return item.get('purpose') === 'activities';
  }),

  lifestyleSum: Ember.computed.alias('lifestyleArray.length'),
  nutritionSum: Ember.computed.alias('nutritionArray.length'),
  activitiesSum: Ember.computed.alias('activitiesArray.length'),

  lifestyleObserver: Ember.observer('lifestyleSum', function(){
    this.get('purposeChartData.datasets')[0].data[0] = this.get('lifestyleSum');
    this.notifyPropertyChange('purposeChartData');
  }).on('init'),
  nutritionObserver: Ember.observer('nutritionSum', function(){
    this.get('purposeChartData.datasets')[0].data[1] = this.get('nutritionSum');
    this.notifyPropertyChange('purposeChartData');
  }).on('init'),
  activitiesObserver: Ember.observer('activitiesSum', function(){
    this.get('purposeChartData.datasets')[0].data[2] = this.get('activitiesSum');
    this.notifyPropertyChange('purposeChartData');
  }).on('init'),


  purposeChartData:
  {
      datasets: [{
        data: [0,0,0],
        backgroundColor: [
         "#03A9F4", "#00BCD4", "#009688"
         ],
        label: "Violations per purpose"
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: ["Lifestyle recommendations", "Nutrition recommendations", "Activities recommendations"]
  }


});

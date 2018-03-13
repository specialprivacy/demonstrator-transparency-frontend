import Ember from 'ember';

export default Ember.Controller.extend({
  dataRetriever: Ember.inject.service('data-retriever'),

  handleMessage: function(e){
    const _this = this;
    const store = this.get('store');
    var pushData = window.$.parseJSON(e.data);
    var records = store.pushPayload('report', pushData);
    let data = this.get('data');
    records.forEach(function(record){
      data.unshiftObject(record);
      if(data.length > 200) {
        let remove = data.get('lastObject');
        data.removeObject(remove);
        remove.unloadRecord();
      }
      _this.updateCharts(record);
    });
  },


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

  checkedCompliances: Ember.computed.map('compliances.@each.enabled', function(item){
    if(item.enabled) {return item.value;}
  }),
  checkedPurposes: Ember.computed.map('purposes.@each.enabled', function(item){
    if(item.enabled) {return item.value;}
  }),
  checkedAttributes: Ember.computed.map('attributes.@each.enabled', function(item){
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
      if(start && window.moment(item.get('timestamp')).isBefore(start, 'day')) return false;
      if(end && window.moment(item.get('timestamp')).isAfter(end, 'day')) return false;
      return true;
    })
  }),

  filteredData: Ember.computed.intersect('dataCheckedByCompliance', 'dataCheckedByPurpose', 'dataCheckedByAttributes'/* TODO, 'timeRangeFilteredData'*/),

  dataSorting: ['timestamp:desc', 'log:asc'],
  sortedData: Ember.computed.sort('filteredData', 'dataSorting'),

  slicedData: Ember.computed('sortedData.length', function(){
    let data = this.get('sortedData').slice(0, 20);
    //this.set('data', data);
    return data;
  }),


  // Charts
  updateCharts: function(record){
    // update pie chart
    if(!record.get('ok')){
      // update nok count
      this.get('complianceChartData.datasets')[0].data[0] = this.get('complianceChartData.datasets')[0].data[0] + 1;
    }
    else {
      // update ok count
      this.get('complianceChartData.datasets')[0].data[1] = this.get('complianceChartData.datasets')[0].data[1] + 1;
    }
    this.notifyPropertyChange('complianceChartData');

    // update bar char
    switch(record.get('purpose')){
      case "lifestyle":
        this.get('purposeChartData.datasets')[0].data[0] = this.get('purposeChartData.datasets')[0].data[0] + 1;
        break;
      case "nutrition":
        this.get('purposeChartData.datasets')[0].data[1] = this.get('purposeChartData.datasets')[0].data[1] + 1;
        break;
      case "activities":
        this.get('purposeChartData.datasets')[0].data[2] = this.get('purposeChartData.datasets')[0].data[2] + 1;
        break;
    }
    this.notifyPropertyChange('purposeChartData');
  },

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
  },
  pieChartOptions: {
    title:{
      display: false
    }
  }


});

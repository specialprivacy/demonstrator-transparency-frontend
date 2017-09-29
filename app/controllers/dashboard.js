import Ember from 'ember';

export default Ember.Controller.extend({
  data: Ember.computed.alias('model.data'),
  originsSorting: ['label:asc, name:asc'],
  origins: Ember.computed.sort('model.origins', 'originsSorting'),
  typesSorting: ['label:asc, name:asc'],
  types: Ember.computed.sort('model.types', 'typesSorting'),

  filteredData: Ember.computed.intersect('originFilteredData', 'typeFilteredData', 'timeRangeFilteredData'),

  dataSorting: ['timestamp:desc'],
  sortedData: Ember.computed.sort('filteredData', 'dataSorting'),

  originFilteredData: Ember.computed('origins.@each.enabled', 'data', function(){
    let origins = this.get('origins').map(function(origin){
      if(origin.get('enabled')){
        return origin.get('id');
      }
    });
    return this.get('data').filter(function(item){
      return !!origins.contains(item.get('informationOrigin.id'));
    })
  }),

  typeFilteredData: Ember.computed('types.@each.enabled', 'data', function(){
    let types = this.get('types').map(function(type){
      if(type.get('enabled')){
        return type.get('id');
      }
    });
    return this.get('data').filter(function(item){
      return !!types.contains(item.get('informationType.id'));
    })
  }),

  range: {
    start: null,
    end: null
  },
  timeRangeFilteredData: Ember.computed('range.start', 'range.end', 'data', function(){
    let range = this.get('range');
    return this.get('data').filter(function(item){
      if(range.start && moment(item.get('timestamp')).isBefore(range.start, 'day')) return false;
      if(range.end && moment(item.get('timestamp')).isAfter(range.end, 'day')) return false;
      return true;
    })
}),

  actions:{
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

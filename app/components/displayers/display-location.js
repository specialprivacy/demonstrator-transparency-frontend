import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  parsedValue: Ember.computed('item.value', function(){
    let value = this.get('item.value');
    try {
      return JSON.parse(value);
    }
    catch(error) {
      return {}
    }
  }),
  lat: Ember.computed('parsedValue.lat', function(){
    return (this.get('parsedValue')['lat'] || 50.886882199999995);
  }),
  lng: Ember.computed('parsedValue.lng', function(){
    return (this.get('parsedValue')['lng'] || 4.7069443);
  }),
  zoom: Ember.computed('parsedValue.zoom', function(){
    return (this.get('parsedValue')['zoom'] || 15);
  }),
});

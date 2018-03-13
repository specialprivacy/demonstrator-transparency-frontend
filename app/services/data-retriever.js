import Ember from 'ember';

export default Ember.Service.extend({
  compliances: [{label: "Compliant", value: true, enabled: true, icon: "check"}, {label: "Not compliant", value:false, enabled: true, icon: "not interested"}],
  purposes: [{label: "Lifestyle recommendations", value: "lifestyle", enabled: true}, {label: "Nutrition recommendations", value:"nutrition", enabled: true}, {label: "Activities recommendations", value:"activities", enabled: true}],
  attributes: [
    {label: "Age", value: "age", enabled: true},
    {label: "Calorie consumption", value: "calories", enabled: true},
    {label: "Heart rate", value: "heart_rate", enabled: true},
    {label: "Location", value: "location", enabled: true}
  ],

  getCompliance: function(id) {
    let array = this.get('compliances');
    let res = array.filter(function(item){
      return item.value === id;
    });
    return res.length > 0 ? res[0].label : null;
  },
  getPurpose: function(id) {
    let array = this.get('purposes');
    let res = array.filter(function(item){
      return item.value === id;
    });
    return res.length > 0 ? res[0].label : null;
  },
  getAttribute: function(id) {
    let array = this.get('attributes');
    let res = array.filter(function(item){
      return item.value === id;
    });
    return res.length > 0 ? res[0].label : null;
  }
});

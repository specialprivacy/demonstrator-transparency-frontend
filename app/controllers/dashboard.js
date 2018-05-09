import Controller from "@ember/controller";
import { inject } from "@ember/service";
import { alias } from "@ember/object/computed";
import { sort } from "@ember/object/computed";
import { map } from "@ember/object/computed";
import { intersect } from "@ember/object/computed";
import { computed } from "@ember/object";

let mapEnabled = function(item) {
  if(item.enabled) { return item.value; }
}

export default Controller.extend({
  dataRetriever: inject("data-retriever"),

  handleMessage: function(e){
    const data = this.get("store").normalize("report", window.$.parseJSON(e.data));
    this.get("store").push(data);
    const record = this.get("store").peekRecord("report", data["data"]["id"])
    this.updateCharts(record);
  },


  data: alias("model"),

  compliances: alias("dataRetriever.compliances"),
  dataCollections: alias("dataRetriever.dataCollections"),
  locations: alias("dataRetriever.locationCollections"),
  processes: alias("dataRetriever.processCollections"),
  purposes: alias("dataRetriever.purposeCollections"),
  recipients: alias("dataRetriever.recipientCollections"),

  labelSorting: ["label:asc"],
  sortedCompliances: sort("compliances", "labelSorting"),
  sortedDataCollection: sort("dataCollections", "labelSorting"),
  sortedLocations: sort("locations", "labelSorting"),
  sortedProcesses: sort("processes", "labelSorting"),
  sortedPurposes: sort("purposes", "labelSorting"),
  sortedRecipients: sort("recipients", "labelSorting"),

  checkedCompliances: map("compliances.@each.enabled", mapEnabled),
  checkedDataCollection: map("dataCollections.@each.enabled", mapEnabled),
  checkedLocations: map("locations.@each.enabled", mapEnabled),
  checkedProcesses: map("processes.@each.enabled", mapEnabled),
  checkedPurposes: map("purposes.@each.enabled", mapEnabled),
  checkedRecipients: map("recipients.@each.enabled", mapEnabled),


  filteredData: Ember.computed("data.@each",
    "checkedCompliances.@each",
    "checkedDataCollection.@each",
    "checkedLocations.@each",
    "checkedProcesses.@each",
    "checkedPurposes.@each",
    "checkedRecipients.@each",
    function() {
      // Let's filter out items that do not follow search criterias
      const checkedCompliances = this.get("checkedCompliances");
      const checkedDataCollection = this.get("checkedDataCollection");
      const checkedLocations = this.get("checkedLocations");
      const checkedProcesses = this.get("checkedProcesses");
      const checkedPurposes = this.get("checkedPurposes");
      const checkedRecipients = this.get("checkedRecipients");
      return this.get("data").filter(function(item) {
        if(!checkedCompliances.includes(item.get("hasConsent"))) return false;
        // /* TODO: Filter out data */
        if(!checkedDataCollection.some(function(element) {
            return item.get("dataCollection").includes(element)
          })
        ) { return false; }
        if(!checkedLocations.includes(item.get("storage"))) return false;
        if(!checkedProcesses.includes(item.get("processing"))) return false;
        if(!checkedPurposes.includes(item.get("purpose"))) return false;
        if(!checkedRecipients.includes(item.get("recipient"))) return false;
        return true;
      })
    }
  ),

  // For every item in "data" array, checks if its "attribute" appears in the "check" array
  check: function(data, check, attribute){
    return data.filter(function(item){
      let attr = item["get"] ? item.get(attribute) : item[attribute];
      return check.includes(attr)
    });
  },

  dataCheckedByCompliance: computed("data.@each.hasConsent", "checkedCompliances.@each", function(){
    return this.check(this.get("data"), this.get("checkedCompliances"), "hasConsent");
  }),
  dataCheckedByData: computed("data.@each.dataCollections.@each", "checkedData.@each", function(){
    const checkedData = this.get("checkedData");
    return this.get("data").filter(function(item) {
      return item.get("dataCollection").some(function(element){
        return checkedData.includes(element);
      });
    });
    return this.check(this.get("data"), this.get("checkedData"), "hasConsent");
  }),
  dataCheckedByPurpose: computed("data.@each.purpose", "checkedPurposes.@each", function(){
    return this.check(this.get("data"), this.get("checkedPurposes"), "purpose");
  }),
  dataCheckedByAttributes: computed("data.@each.ok", "checkedAttributes.@each", function(){
    let check = this.get("checkedAttributes");
    return this.get("data").filter(function(item){
      let attributes = item["get"] ? item.get("attributes") : item["processes"];
      if(!attributes) return false;
      return attributes.any(function(attribute) {
        return check.includes(attribute);
      });
    });
  }),

  timeRangeFilteredData: computed("startDate", "endDate", "data", function(){
    let start, end;
    start = this.get("startDate");
    end = this.get("endDate");
    return this.get("data").filter(function(item){
      if(start && window.moment(item.get("timestamp")).isBefore(start, "day")) return false;
      if(end && window.moment(item.get("timestamp")).isAfter(end, "day")) return false;
      return true;
    })
  }),

  //filteredData: intersect("dataCheckedByCompliance", "dataCheckedByPurpose", "dataCheckedByAttributes"/* TODO, "timeRangeFilteredData"*/),

  dataSorting: ["timestamp:desc", "message:asc"],
  sortedData: sort("filteredData", "dataSorting"),

  slicedData: computed("sortedData.length", function(){
    return this.get("sortedData").slice(0, 20);
  }),


  // Charts
  updateCharts: function(record){
    // update pie chart
    if(!record.get("hasConsent")){
      // update nok count
      this.get("complianceChartData.datasets")[0].data[0] = this.get("complianceChartData.datasets")[0].data[0] + 1;
    }
    else {
      // update ok count
      this.get("complianceChartData.datasets")[0].data[1] = this.get("complianceChartData.datasets")[0].data[1] + 1;
    }
    this.notifyPropertyChange("complianceChartData");

    // update bar char
    switch(record.get("purpose")){
      case "lifestyle":
        this.get("purposeChartData.datasets")[0].data[0] = this.get("purposeChartData.datasets")[0].data[0] + 1;
        break;
      case "nutrition":
        this.get("purposeChartData.datasets")[0].data[1] = this.get("purposeChartData.datasets")[0].data[1] + 1;
        break;
      case "activities":
        this.get("purposeChartData.datasets")[0].data[2] = this.get("purposeChartData.datasets")[0].data[2] + 1;
        break;
    }
    this.notifyPropertyChange("purposeChartData");
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
        "Not compliant",
        "Compliant"
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

import Service from '@ember/service';

export default Service.extend({
  
  getCompliance: function(id) {
    let array = this.get('dataCollections');
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
  },

  compliances: [
    {"label": "Compliant", "value": true, "enabled": true, "icon": "check"},
    {"label": "Not compliant", "value":false, "enabled": true, "icon": "not interested"}
  ],

  dataCollections: [
    {"label":"Activity", "value":"http://www.specialprivacy.eu/vocabs/data#Activity", "enabled": true},
    {"label":"Anonymized", "value":"http://www.specialprivacy.eu/vocabs/data#Anonymized", "enabled": true},
    {"label":"AudiovisualActivity", "value":"http://www.specialprivacy.eu/vocabs/data#AudiovisualActivity", "enabled": true},
    {"label":"Computer", "value":"http://www.specialprivacy.eu/vocabs/data#Computer", "enabled": true},
    {"label":"Content", "value":"http://www.specialprivacy.eu/vocabs/data#Content", "enabled": true},
    {"label":"Demographic", "value":"http://www.specialprivacy.eu/vocabs/data#Demographic", "enabled": true},
    {"label":"Derived", "value":"http://www.specialprivacy.eu/vocabs/data#Derived", "enabled": true},
    {"label":"Financial", "value":"http://www.specialprivacy.eu/vocabs/data#Financial", "enabled": true},
    {"label":"Government", "value":"http://www.specialprivacy.eu/vocabs/data#Government", "enabled": true},
    {"label":"Health", "value":"http://www.specialprivacy.eu/vocabs/data#Health", "enabled": true},
    {"label":"Interactive", "value":"http://www.specialprivacy.eu/vocabs/data#Interactive", "enabled": true},
    {"label":"Judicial", "value":"http://www.specialprivacy.eu/vocabs/data#Judicial", "enabled": true},
    {"label":"Location", "value":"http://www.specialprivacy.eu/vocabs/data#Location", "enabled": true},
    {"label":"Navigation", "value":"http://www.specialprivacy.eu/vocabs/data#Navigation", "enabled": true},
    {"label":"Online", "value":"http://www.specialprivacy.eu/vocabs/data#Online", "enabled": true},
    {"label":"OnlineActivity", "value":"http://www.specialprivacy.eu/vocabs/data#OnlineActivity", "enabled": true},
    {"label":"Physical", "value":"http://www.specialprivacy.eu/vocabs/data#Physical", "enabled": true},
    {"label":"PhysicalActivity", "value":"http://www.specialprivacy.eu/vocabs/data#PhysicalActivity", "enabled": true},
    {"label":"Political", "value":"http://www.specialprivacy.eu/vocabs/data#Political", "enabled": true},
    {"label":"Preference", "value":"http://www.specialprivacy.eu/vocabs/data#Preference", "enabled": true},
    {"label":"Profile", "value":"http://www.specialprivacy.eu/vocabs/data#Profile", "enabled": true},
    {"label":"Purchase", "value":"http://www.specialprivacy.eu/vocabs/data#Purchase", "enabled": true},
    {"label":"Social", "value":"http://www.specialprivacy.eu/vocabs/data#Social", "enabled": true},
    {"label":"State", "value":"http://www.specialprivacy.eu/vocabs/data#State", "enabled": true},
    {"label":"Statistical", "value":"http://www.specialprivacy.eu/vocabs/data#Statistical", "enabled": true},
    {"label":"TelecomActivity", "value":"http://www.specialprivacy.eu/vocabs/data#TelecomActivity", "enabled": true},
    {"label":"UniqueId", "value":"http://www.specialprivacy.eu/vocabs/data#UniqueId", "enabled": true}
  ],

  locationCollections: [
    {"label": "ControllerServers", "value": "http://www.specialprivacy.eu/vocabs/data#ControllerServers", "enabled": true},
    {"label": "EU", "value": "http://www.specialprivacy.eu/vocabs/data#EU", "enabled": true},
    {"label": "EULike", "value": "http://www.specialprivacy.eu/vocabs/data#EULike", "enabled": true},
    {"label": "ThirdCountries", "value": "http://www.specialprivacy.eu/vocabs/data#ThirdCountries", "enabled": true},
    {"label": "OurServers", "value": "http://www.specialprivacy.eu/vocabs/data#OurServers", "enabled": true},
    {"label": "ProcessorServers", "value": "http://www.specialprivacy.eu/vocabs/data#ProcessorServers", "enabled": true},
    {"label": "ThirdParty", "value": "http://www.specialprivacy.eu/vocabs/data#ThirdParty", "enabled": true}
  ],

  processCollections: [
    {"label": "Aggregate", "value": "http://www.specialprivacy.eu/vocabs/data#Aggregate", "enabled": true},
    {"label": "Analyze", "value": "http://www.specialprivacy.eu/vocabs/data#Analyze", "enabled": true},
    {"label": "Anonymize", "value": "http://www.specialprivacy.eu/vocabs/data#Anonymize", "enabled": true},
    {"label": "Collect", "value": "http://www.specialprivacy.eu/vocabs/data#Collect", "enabled": true},
    {"label": "Copy", "value": "http://www.specialprivacy.eu/vocabs/data#Copy", "enabled": true},
    {"label": "Derive", "value": "http://www.specialprivacy.eu/vocabs/data#Derive", "enabled": true},
    {"label": "Move", "value": "http://www.specialprivacy.eu/vocabs/data#Move", "enabled": true},
    {"label": "Query", "value": "http://www.specialprivacy.eu/vocabs/data#Query", "enabled": true},
    {"label": "Transfer", "value": "http://www.specialprivacy.eu/vocabs/data#Transfer", "enabled": true}
  ],

  purposeCollections: [
    {"label": "Account", "value": "http://www.specialprivacy.eu/vocabs/data#Account", "enabled": true},
    {"label": "Admin", "value": "http://www.specialprivacy.eu/vocabs/data#Admin", "enabled": true},
    {"label": "AnyContact", "value": "http://www.specialprivacy.eu/vocabs/data#AnyContact", "enabled": true},
    {"label": "Arts", "value": "http://www.specialprivacy.eu/vocabs/data#Arts", "enabled": true},
    {"label": "AuxPurpose", "value": "http://www.specialprivacy.eu/vocabs/data#AuxPurpose", "enabled": true},
    {"label": "Browsing", "value": "http://www.specialprivacy.eu/vocabs/data#Browsing", "enabled": true},
    {"label": "Charity", "value": "http://www.specialprivacy.eu/vocabs/data#Charity", "enabled": true},
    {"label": "Communicate", "value": "http://www.specialprivacy.eu/vocabs/data#Communicate", "enabled": true},
    {"label": "Current", "value": "http://www.specialprivacy.eu/vocabs/data#Current", "enabled": true},
    {"label": "Custom", "value": "http://www.specialprivacy.eu/vocabs/data#Custom", "enabled": true},
    {"label": "Delivery", "value": "http://www.specialprivacy.eu/vocabs/data#Delivery", "enabled": true},
    {"label": "Develop", "value": "http://www.specialprivacy.eu/vocabs/data#Develop", "enabled": true},
    {"label": "Downloads", "value": "http://www.specialprivacy.eu/vocabs/data#Downloads", "enabled": true},
    {"label": "Education", "value": "http://www.specialprivacy.eu/vocabs/data#Education", "enabled": true},
    {"label": "Feedback", "value": "http://www.specialprivacy.eu/vocabs/data#Feedback", "enabled": true},
    {"label": "Finmgt", "value": "http://www.specialprivacy.eu/vocabs/data#Finmgt", "enabled": true},
    {"label": "Gambling", "value": "http://www.specialprivacy.eu/vocabs/data#Gambling", "enabled": true},
    {"label": "Gaming", "value": "http://www.specialprivacy.eu/vocabs/data#Gaming", "enabled": true},
    {"label": "Government", "value": "http://www.specialprivacy.eu/vocabs/data#Government", "enabled": true},
    {"label": "Health", "value": "http://www.specialprivacy.eu/vocabs/data#Health", "enabled": true},
    {"label": "Historical", "value": "http://www.specialprivacy.eu/vocabs/data#Historical", "enabled": true},
    {"label": "Login", "value": "http://www.specialprivacy.eu/vocabs/data#Login", "enabled": true},
    {"label": "Marketing", "value": "http://www.specialprivacy.eu/vocabs/data#Marketing", "enabled": true},
    {"label": "News", "value": "http://www.specialprivacy.eu/vocabs/data#News", "enabled": true},
    {"label": "OtherContact", "value": "http://www.specialprivacy.eu/vocabs/data#OtherContact", "enabled": true},
    {"label": "Payment", "value": "http://www.specialprivacy.eu/vocabs/data#Payment", "enabled": true},
    {"label": "Sales", "value": "http://www.specialprivacy.eu/vocabs/data#Sales", "enabled": true},
    {"label": "Search", "value": "http://www.specialprivacy.eu/vocabs/data#Search", "enabled": true},
    {"label": "State", "value": "http://www.specialprivacy.eu/vocabs/data#State", "enabled": true},
    {"label": "Tailoring", "value": "http://www.specialprivacy.eu/vocabs/data#Tailoring", "enabled": true},
    {"label": "Telemarketing", "value": "http://www.specialprivacy.eu/vocabs/data#Telemarketing", "enabled": true}
  ],

  recipientCollections: [
    {"label": "Delivery", "value": "http://www.specialprivacy.eu/vocabs/data#Delivery", "enabled": true},
    {"label": "OtherRecipient", "value": "http://www.specialprivacy.eu/vocabs/data#OtherRecipient", "enabled": true},
    {"label": "Ours", "value": "http://www.specialprivacy.eu/vocabs/data#Ours", "enabled": true},
    {"label": "Public", "value": "http://www.specialprivacy.eu/vocabs/data#Public", "enabled": true},
    {"label": "Same", "value": "http://www.specialprivacy.eu/vocabs/data#Same", "enabled": true},
    {"label": "Unrelated", "value": "http://www.specialprivacy.eu/vocabs/data#Unrelated", "enabled": true}
  ]
});

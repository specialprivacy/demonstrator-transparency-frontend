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
    {"label":"AnyData", "value":"https://www.specialprivacy.eu/langs/usage-policy#AnyData", "enabled": true},
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

  storageCollections: [
    {"label": "AnyLocation", "value": "http://www.specialprivacy.eu/langs/usage-policy#AnyLocation", "enabled": true},
    {"label": "ControllerServers", "value": "http://www.specialprivacy.eu/vocabs/locations#ControllerServers", "enabled": true},
    {"label": "EU", "value": "http://www.specialprivacy.eu/vocabs/locations#EU", "enabled": true},
    {"label": "EULike", "value": "http://www.specialprivacy.eu/vocabs/locations#EULike", "enabled": true},
    {"label": "ThirdCountries", "value": "http://www.specialprivacy.eu/vocabs/locations#ThirdCountries", "enabled": true},
    {"label": "OurServers", "value": "http://www.specialprivacy.eu/vocabs/locations#OurServers", "enabled": true},
    {"label": "ProcessorServers", "value": "http://www.specialprivacy.eu/vocabs/locations#ProcessorServers", "enabled": true},
    {"label": "ThirdParty", "value": "http://www.specialprivacy.eu/vocabs/locations#ThirdParty", "enabled": true}
  ],

  processingCollections: [
    {"label": "AnyProcessing", "value": "http://www.specialprivacy.eu/langs/usage-policy#AnyProcessing", "enabled": true},
    {"label": "Aggregate", "value": "http://www.specialprivacy.eu/vocabs/processing#Aggregate", "enabled": true},
    {"label": "Analyze", "value": "http://www.specialprivacy.eu/vocabs/processing#Analyze", "enabled": true},
    {"label": "Anonymize", "value": "http://www.specialprivacy.eu/vocabs/processing#Anonymize", "enabled": true},
    {"label": "Collect", "value": "http://www.specialprivacy.eu/vocabs/processing#Collect", "enabled": true},
    {"label": "Copy", "value": "http://www.specialprivacy.eu/vocabs/processing#Copy", "enabled": true},
    {"label": "Derive", "value": "http://www.specialprivacy.eu/vocabs/processing#Derive", "enabled": true},
    {"label": "Move", "value": "http://www.specialprivacy.eu/vocabs/processing#Move", "enabled": true},
    {"label": "Query", "value": "http://www.specialprivacy.eu/vocabs/processing#Query", "enabled": true},
    {"label": "Transfer", "value": "http://www.specialprivacy.eu/vocabs/processing#Transfer", "enabled": true}
  ],

  purposeCollections: [
    {"label": "AnyPurpose", "value": "http://www.specialprivacy.eu/langs/usage-policy#AnyPurpose", "enabled": true},
    {"label": "Account", "value": "http://www.specialprivacy.eu/vocabs/purposes#Account", "enabled": true},
    {"label": "Admin", "value": "http://www.specialprivacy.eu/vocabs/purposes#Admin", "enabled": true},
    {"label": "AnyContact", "value": "http://www.specialprivacy.eu/vocabs/purposes#AnyContact", "enabled": true},
    {"label": "Arts", "value": "http://www.specialprivacy.eu/vocabs/purposes#Arts", "enabled": true},
    {"label": "AuxPurpose", "value": "http://www.specialprivacy.eu/vocabs/purposes#AuxPurpose", "enabled": true},
    {"label": "Browsing", "value": "http://www.specialprivacy.eu/vocabs/purposes#Browsing", "enabled": true},
    {"label": "Charity", "value": "http://www.specialprivacy.eu/vocabs/purposes#Charity", "enabled": true},
    {"label": "Communicate", "value": "http://www.specialprivacy.eu/vocabs/purposes#Communicate", "enabled": true},
    {"label": "Current", "value": "http://www.specialprivacy.eu/vocabs/purposes#Current", "enabled": true},
    {"label": "Custom", "value": "http://www.specialprivacy.eu/vocabs/purposes#Custom", "enabled": true},
    {"label": "Delivery", "value": "http://www.specialprivacy.eu/vocabs/purposes#Delivery", "enabled": true},
    {"label": "Develop", "value": "http://www.specialprivacy.eu/vocabs/purposes#Develop", "enabled": true},
    {"label": "Downloads", "value": "http://www.specialprivacy.eu/vocabs/purposes#Downloads", "enabled": true},
    {"label": "Education", "value": "http://www.specialprivacy.eu/vocabs/purposes#Education", "enabled": true},
    {"label": "Feedback", "value": "http://www.specialprivacy.eu/vocabs/purposes#Feedback", "enabled": true},
    {"label": "Finmgt", "value": "http://www.specialprivacy.eu/vocabs/purposes#Finmgt", "enabled": true},
    {"label": "Gambling", "value": "http://www.specialprivacy.eu/vocabs/purposes#Gambling", "enabled": true},
    {"label": "Gaming", "value": "http://www.specialprivacy.eu/vocabs/purposes#Gaming", "enabled": true},
    {"label": "Government", "value": "http://www.specialprivacy.eu/vocabs/purposes#Government", "enabled": true},
    {"label": "Health", "value": "http://www.specialprivacy.eu/vocabs/purposes#Health", "enabled": true},
    {"label": "Historical", "value": "http://www.specialprivacy.eu/vocabs/purposes#Historical", "enabled": true},
    {"label": "Login", "value": "http://www.specialprivacy.eu/vocabs/purposes#Login", "enabled": true},
    {"label": "Marketing", "value": "http://www.specialprivacy.eu/vocabs/purposes#Marketing", "enabled": true},
    {"label": "News", "value": "http://www.specialprivacy.eu/vocabs/purposes#News", "enabled": true},
    {"label": "OtherContact", "value": "http://www.specialprivacy.eu/vocabs/purposes#OtherContact", "enabled": true},
    {"label": "Payment", "value": "http://www.specialprivacy.eu/vocabs/purposes#Payment", "enabled": true},
    {"label": "Sales", "value": "http://www.specialprivacy.eu/vocabs/purposes#Sales", "enabled": true},
    {"label": "Search", "value": "http://www.specialprivacy.eu/vocabs/purposes#Search", "enabled": true},
    {"label": "State", "value": "http://www.specialprivacy.eu/vocabs/purposes#State", "enabled": true},
    {"label": "Tailoring", "value": "http://www.specialprivacy.eu/vocabs/purposes#Tailoring", "enabled": true},
    {"label": "Telemarketing", "value": "http://www.specialprivacy.eu/vocabs/purposes#Telemarketing", "enabled": true}
  ],

  recipientCollections: [
    {"label": "AnyRecipient", "value": "http://www.specialprivacy.eu/langs/usage-policy#AnyRecipient", "enabled": true},
    {"label": "Delivery", "value": "http://www.specialprivacy.eu/vocabs/recipientsDelivery", "enabled": true},
    {"label": "OtherRecipient", "value": "http://www.specialprivacy.eu/vocabs/recipientsOtherRecipient", "enabled": true},
    {"label": "Ours", "value": "http://www.specialprivacy.eu/vocabs/recipientsOurs", "enabled": true},
    {"label": "Public", "value": "http://www.specialprivacy.eu/vocabs/recipientsPublic", "enabled": true},
    {"label": "Same", "value": "http://www.specialprivacy.eu/vocabs/recipientsSame", "enabled": true},
    {"label": "Unrelated", "value": "http://www.specialprivacy.eu/vocabs/recipientsUnrelated", "enabled": true}
  ]
});

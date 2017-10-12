import Ember from 'ember';

export default Ember.Component.extend({
  messages: Ember.computed('targetConsent.purpose.label', function(){
    let purpose = this.get('targetConsent.purpose.label');
    return {
      "withdrawal":"I hereby withdraw consent prior given with the following purpose ["+purpose+"] according to the GDPR Article 7(3). \n" +
      "Please respond to this request within one month (Fri Nov 10 2017) as ruled by the GDPR Article 12(3).",
      "rectify":"I hereby request rectification of inaccurate personal data according to GDPR Article 16. \n" +
      "Please respond to this request within one month (Sat Nov 11 2017) as ruled by the GDPR Article 12(3).",
      "erase": "I hereby request erasure of my personal data according to GDPR Article 17. \n" +
      "Please respond to this request within one month (Sat Nov 11 2017) as ruled by the GDPR Article 12(3)."
    }
  }),


  actions: {
    openDialog(consent, property){
      this.set('targetConsent', consent);
      this.toggleProperty(property);
    },
    closeDialog(property){
      this.toggleProperty(property);
      this.set('targetConsent', null);
    },
    confirmWithdrawal(propertyToToggle, consent, message){
      // TODO : Create and send notification
      console.log("---------------");
      console.log("Confirmed withdrawal of consent : "+consent.get('id'));
      console.log("With message : "+message);
      console.log("---------------");
      return this.toggleProperty(propertyToToggle);
    },
    confirmRectify(propertyToToggle, consent, message){
      // TODO : Create and send notification
      console.log("---------------");
      console.log("Confirmed rectify of information linked to consent : "+consent.get('id'));
      console.log("With message : "+message);
      console.log("---------------");
      return this.toggleProperty(propertyToToggle);
    },
    confirmErase(propertyToToggle, consent, message){
      // TODO : Create and send notification
      console.log("---------------");
      console.log("Confirmed erase of information linked to consent : "+consent.get('id'));
      console.log("With message : "+message);
      console.log("---------------");
      return this.toggleProperty(propertyToToggle);
    }
  }
});

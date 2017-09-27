import Ember from 'ember';

export default Ember.Controller.extend({
  processingContexts: [
    {
      name: "Service data",
      enabled: true,
      icon: "assignment",
      tooltip: "This includes any data you provided to the service intentionally (e.g., posts, likes, shares, comments, search queries)."
    },
    {
      name: "Data I provided",
      enabled: true,
      icon: "fingerprint",
      tooltip: "This shows data, which other users or other kinds of sources provided about you."
    },
    {
      name: "Data of me provided by others",
      enabled: true,
      icon: "hearing",
      tooltip: "This shows any data the service provider observes about you while you use the service (e.g., browsing behavior)."
    },
    {
      name: "Data of my behavior",
      enabled: true,
      icon: "visibility",
      tooltip: "Shows data, which is derived from other data (e.g., profiles for marketing, location tracks, possible preferences)."
    },
    {
      name: "Inferred data about me",
      enabled: true,
      icon: "timeline",
      tooltip: "Shows data, which is derived from other data (e.g., profiles for marketing, location tracks, possible preferences)."
    }
  ],

  dataTypes: [
    {
      name: "Text",
      enabled: true,
      icon: "text-format"
    },
    {
      name: "Image",
      enabled: true,
      icon: "insert-photo"
    },
    {
      name: "Audio",
      enabled: true,
      icon: "audiotrack"
    },
    {
      name: "Video",
      enabled: true,
      icon: "play-circle-filled"
    },
    {
      name: "Location",
      enabled: true,
      icon: "location-on"
    }
  ],

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

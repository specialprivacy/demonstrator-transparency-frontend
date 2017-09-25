import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function(serialized) {
    return serialized === "true";
  },
  serialize: function(deserialized) {
    if (deserialized === true) {
      return "true";
    } else {
      return "false";
    }
  }
});

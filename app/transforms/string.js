import Transform from 'ember-data/transform';

const StringTransform = Transform.extend({
  deserialize(serialized) {
    if (serialized != null) {
      serialized = serialized.split('\\n').join('\n');
    }
    return serialized;
  },
  serialize(deserialized) {
    return deserialized;
  }
});

export default StringTransform;

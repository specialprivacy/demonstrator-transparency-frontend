import Transform from 'ember-data/transform';
import { assert } from '@ember/debug';
import { typeOf } from '@ember/utils';

const StringSetTransform = Transform.extend({
  deserialize(serialized) {
    assert(`expected array got ${typeOf(serialized)}`, (!serialized) || (typeOf(serialized) === "array"));
    return serialized || [];
  },
  serialize(deserialized) {
    assert(`expected array got ${typeOf(deserialized)}`, (!deserialized) || (typeOf(deserialized) === "array"));
    return deserialized || [];
  }});
export default StringSetTransform;

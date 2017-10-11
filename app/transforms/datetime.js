import Transform from 'ember-data/transform';
import moment from 'moment';

const DatetimeTransform = Transform.extend({
  deserialize(serialized) {
    if (serialized != null) {
      serialized = moment(serialized, "YYYY. MM. DD. HH:mm").toDate();
    }
    return serialized;
  },
  serialize(deserialized) {
    return deserialized;
  }
});

export default DatetimeTransform;

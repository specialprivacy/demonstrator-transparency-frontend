import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalize(modelClass, resourceHash) {
    // Ember-data weeps when "data" is used, as it's a reserved name
    resourceHash["dataCollection"] = resourceHash["data"];
    delete resourceHash["data"];

    // if we don't have an ID in the hash
    if (!resourceHash["id"]) resourceHash["id"] = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });

    var data = {
      id: resourceHash.id,
      type: modelClass.modelName,
      attributes: resourceHash
    };
    return { data: data };
  }
});

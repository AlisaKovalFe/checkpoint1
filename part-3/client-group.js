const PersonGroup = require('./person-group')
module.exports = class ClientGroup extends PersonGroup {
  constructor(persons) {
    super(persons)
    this.clients = persons
  }
};

const Person = require('./person')
module.exports = class Salesman extends Person {
  constructor(firstName, lastName, middleName, phone, date) {
    super(firstName, lastName, middleName, phone)
    this.hireDate = date
  }


};

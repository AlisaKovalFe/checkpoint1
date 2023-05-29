module.exports = class Doughnut {
  constructor({ name = 'Пышка' }, stuffings = []) {
    this.name = name
    this.baseWeight = 60
    this.stuffings = stuffings
  }

  get weight() {
    let weightOfStuffings = this.stuffings.reduce((acc, el) => acc + el.weight, 0)
    return weightOfStuffings + this.baseWeight
  }
};

module.exports = class PersonGroup {
    constructor(persons = []) {
        this.persons = persons
    }

    getFios() {
        return this.persons.map((el) => el.getFio()).join(', ')
    }
}
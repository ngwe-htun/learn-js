/**
 * Creating class and object.
 *   - Create class
 *   - Create object instance
 */
class Person {
    constructor(firstName, lastName) {
        this.lastName = lastName;
        this.firstName = firstName;
    }

    getFullName() {
        return `${this.firstName}${this.lastName}`;
    }
}
let person1 = new Person('Mg', 'Mg');
console.log('Person 1 - ', person1.getFullName());

/**
 * Object literals
 *   - Create object literal
 *   - Call the method
 */
const person2 = {
    lastName: "Aung",
    firstName: "Aung",
    getFullName: function () {
        return `${this.firstName}${this.lastName}`;
    }
};
console.log('Person 2 - ', person2.getFullName());

/**
 * Access object properties.
 *   - by dot notaion
 *   - by [] notaion
 */
console.log('Access object properties - ', person2.firstName + person2['lastName']);
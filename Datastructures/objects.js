// Creating objects

// Creating an object using a functional constructor
function User (firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
}
const user1 = new User('enrico', 'elizan', 28, 'male');

// Class object
class footballer {
    constructor(name, club) {
        this.name = name;
        this.club = club;
    }
}
let f = new footballer('Lio Messi', 'FC Barcelona');

// Object literal
let footballer2 = {
    name: 'Lio Messi',
    club:'FC Barcelona',
    country:'Argentina'
};


// Prototype - will show up in the __protp__: Object property
User.prototype.emailDomain = '@facebook.com';
User.prototype.getEmail = function() {
    return this.firstName + this.lastName + this.emailDomain;
}

console.log(user1.getEmail());


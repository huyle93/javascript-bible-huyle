// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.changeName = function (name) {return this.firstName = name}
}

// Create a Person object
var myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather.age); // 50

// Add a name method to first object
myFather.name = function() {
    return this.firstName + " " + this.lastName;
};
console.log(myFather.name()) // John Due

// Add a new Property to the constructor
myFather.gender = "male";
console.log(myFather);

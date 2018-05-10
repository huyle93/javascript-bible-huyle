function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    // DONT DO THIS
    // It is not efficient, read README.md for why
    /* Person.prototype.getFullName = function() {
        return this.firstname + ' ' + this.lastname;
      } */
  }
  
  // now, huy and jane both get access to this new method of the prototype that created here
  Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
  }
  
  var huy = new Person('Huy', 'Le');
  console.log(huy); // Person {firstname: "Huy", lastname: "Le"}
  console.log(huy.getFullName()) // Huy Le
  
  var jane = new Person('Jane', 'Doe');
  console.log(jane); // Person {firstname: "Jane", lastname: "Doe"}
  console.log(jane.getFullName()) // Jane Doe
  
  // add one more method to the prototype
  Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;
  }
  
  console.log(huy.getFormalFullName());
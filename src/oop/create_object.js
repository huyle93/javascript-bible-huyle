var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
      return 'Hi ' + this.firstname;
    }
  }
  
  // build the same thing, but a new way
  var john = Object.create(person);
  console.log(john.greet()); // Hi Default
  john.firstname = 'John';
  john.lastname = 'Doe';
  console.log(john); // { firstname: 'John', lastname: 'Doe' }
  console.log(john.greet()); // Hi John
# JavaScript Object Oriented Programming

Object oriented programming is a prevalent paradigm in JavaScript programming

## Fundamental premises of OOP

1. [Encapsulation](#encapsulation)
2. [Inheritance](#inheritance)
3. [Polymorphism](#polymorphism)

## Encapsulation

Encapsulation dictates that all the data and functionality that is necessary to represent an object should be collected together within an object and its inner workings hidden from the outside world that might need to use that object

### Encapsulation in code

1. The Problem

``` js
var person = {
  fullName : "Jason Shapiro",
};

alert(person.fullName); // Jason Shapiro
person.fullName = "Jim White";
alert(person.fullName); // Jim White
```

BUT, the data is mutable and accessible from outside scope/world

``` js
person.fullName = 42;
alert(person.fullName); // 42
```

2. Incomplete Solution

```js
var person = {
  fullName : "Jason Shapiro",
  setFullName : function (newValue) {
    var reg = new RegExp(/\d+/);
    if( reg.test(newValue) ) {
      alert("Invalid Name");
    }
    else {
      this.fullName = newValue;
    }
  },
  "getFullName" : function() {
    return this.fullName;
  }
};

alert( person.getFullName() );   // Jason Shapiro
person.setFullName( "Jim White" );
alert( person.getFullName() );   // Jim White
person.setFullName( 42 );        // Invalid Name
alert( person.getFullName() );   // Jim White
```

BUT. When the caller calls “setFullName” it ensures the name doesn’t contain a digit.  But unfortunately, we’re only half way there.  This strategy requires a wink and a nod from the caller ensuring that they promise not to call “fullName” directly.  The code as written, however, won’t stop them from breaking this informal contract:

```js
person.setFullName( 42 ); // Invalid Name; the name is not changed.
person.fullName = 42;     // No validation is executed; the name is changed and...
alert( person.getFullName() );   // ...42 is printed.
```

3. Better Approach with Closures

```js
var person = function () {

  var fullName = "Jason Shapiro";
  var reg = new RegExp(/\d+/);

  var theObj = {
    setFullName : function (newValue) {
      if( reg.test(newValue) ) {
        alert("invalid name");
      }
      else {
        fullName = newValue; // Legal! The object has access to "fullName"
      }
    },
    getFullName : function () {
     return fullName; // Legal! The object has access to "fullName"
    }
  }; // End of the Object
};
person.getFullName(); // doesn't work!
```

Here we have a function which is hiding the fullName variable from the outside world.  The inner object (theObj), however, can access fullName.

BUT. We’re getting closer!  We’ve created an anonymous function to hide the variables, and then defined the object as an inner object, in order to grant it access to the private variables.  But how do we expose the inner object to the outside world? 

4. Complete Solution

```js
var person = function () {

  var fullName = "Jason Shapiro";
  var reg = new RegExp(/\d+/);

  return { 
    setFullName : function (newValue) {
      if( reg.test(newValue) ) {
        alert("Invalid Name");
      }
      else {
        fullName = newValue;
      }
    },
    getFullName : function () {
     return fullName; 
    }
  }; // end of the return
}(); // Note the '()', this means we're calling the function 
     // and assigning the *returned object,* instead of 
     // the *function itself* for the value of 'person.'

alert(person.getFullName());   // Jason Shapiro
person.setFullName( "Jim White" );
alert(person.getFullName());  // Jim White
person.setFullName( 42 ); // Invalid Name; the name is not changed.
person.fullName = 42;     // Doesn't affect the private fullName variable.
alert(person.getFullName());  // Jim White is printed again.
```

The trick is to remember to call the anonymous function immediately after its definition, and assign the return value (the inner object) to the outside variable (person), rather than simply assigning the anonymous function itself to the outside variable.  This is done by using the invocation operator, (), at the end of the function.  Since this is easy to miss, and we want to strive for maximum readability, developers typically wrap the entire anonymous function & invocation operator with parentheses.  While this isn’t required, it’s definitely recommended as a way to signal to other developers, “this function is being executed rather than simply assigned.”

## Inheritance

One object gets access to the properties and methods of another object. Inheritance is the idea that new types of objects can be derived from existing types of objects, inheriting all of their properties and methods

### Clasical Inheritance

- Each individual object is instantiated from a class 
- Classes act as a templates for producing initially identical instances which can typically be customized as or after they are created
- New classes can be defined as subclasses of other classes, in which case the subclass inherits the properties and methods of the superclass. The subclass then has the option to override its inherited properties and methods or add more of its own
- Classical inheritance can result in extensive and potentially convoluted hierarchies of interrelated classes and objects

### Prototypal Inheritance

- JavaScript has historically used a different style of inheritance known as prototypal inheritance
- Simple: flexible, extensible, easy to understand
- Under prototypal inheritance, objects are based upon prototypes rather than classes
- - All objects, including functions, have a hidden prototype property that is simply an object (with its own properties and methods)

## Polymorphism


## Reference

- JavaScript The Weird Parts - Udemy
- [Encapsulation in JavaScript by Jason Shapiro](https://www.intertech.com/Blog/encapsulation-in-javascript/)
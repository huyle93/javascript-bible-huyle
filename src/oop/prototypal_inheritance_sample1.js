var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var huy = {
    firstname: 'Huy',
    lastname: 'Le'
}

// dont do this in your code EVER, modern browser does it for you
// FOR DEMO ONLY
huy.__proto__ = person;
console.log(huy.getFullName());
console.log(huy.firstname); //js engine starts from top of the chain, works it way down and stops whenever it found a match. Therefore, the conolse will log out Huy and stop. It does not reach Default.

var jane = {
    firstname: 'Jane'
}


jane.__proto__ = person;
console.log(jane.getFullName()) // Jane Default. Search through the chain, found firstname at jane object, but not lastname. It keeps going down the scope to Default lastname.

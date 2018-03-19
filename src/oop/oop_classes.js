class Human {
    gender = 'male'

    printGender = () => {
        console.log(this.gender)
    }
}

class Person extends Human {
    name = 'Huy'
    gender = 'female'

    printName = () => {
        console.log(this.name)
    }
}

const person = new Person()
person.printName()
person.printGender()
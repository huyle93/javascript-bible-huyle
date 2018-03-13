// Spread

const numbers = [1, 2, 3]
const newNumbers = [...numbers, 4]

// console.log(newNumbers) // [1,2,3,4]

// create person object and spread old obj to new obj

const person = {
    name: 'Huy'
}

const newPerson = {
    ...person,
    age: 28
}

// console.log(newPerson)

// filter function with rest args, means unlimited/unknown array of args

const filter = (...args) => {
    return args.filter(el => el === 5); // return true or false if el === 1 as number
}

console.log(filter(1, 2, 3, 4))
// string, Number , Boolean , Null, Undefined

const name = 'Bharath';
const age = '38';
const rating = '4.5';
const isCool = false;
const x = null;
const y = undefined;
let z;

// String

const s = 'Hello World!';

console.log(s.length);

console.log(s.toUpperCase());

console.log(s.toLowerCase());

console.log(s.substring(0, 5));

console.log(s.substring(0, 5).toUpperCase());

console.log(s.split(''));

const newString = 'technology, computers, it, code';

console.log(newString.split(','))

//Arrays -variables that hold multiple values

const numberArray = new Array(1, 2, 3, 4, 5, 6, 7);

console.log(numberArray);

const fruits = ['apples', 'oranges', 'pears'];

console.log(fruits);

console.log(fruits[1]);

fruits[3] = 'new';

console.log(fruits);

console.log(fruits.indexOf('oranges'));

//Object

const person = {
    firstName: 'Bharath',
    lastName: 'Kumar',
    age: '38',
    hobbies: ['music', 'movies', 'sport'],
    address: {
        street: 'KHB colony',
        city: 'Bangalore',
        state: 'Karanataka'
    }
}

console.log(person);

console.log(person.firstName);

console.log(person.hobbies[0]);

console.log(person.address.state);

const {
    firstName,
    lastName,
    address: {
        city
    }
} = person

console.log(lastName);

console.log(city);

person.email = 'bharathabk@gmail.com';

console.log(person);

const todo = [{
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with team',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
];

console.log(todo[0].text)
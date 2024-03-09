// let, const, var

// Correct
let a = 3;
let b;
b = 4;

// Correct
const c = 3;
//c = 4; // incorrect

// Kerkon me u inicializu
// incorrect
// const d;

// log number
console.log(3);

// log text
console.log('Text');
// console.log("Text");
// console.log('Text"); // error

// log multiple values
console.log(a, c);

// single - line comment
/*
    Multi line
*/

// konkatinimi
console.log('Filan' + ' ' + 'Fisteku');

// interpolimi
let firstName = 'Filan';
let lastName = 'Fisteku';
console.log(firstName + ' ' + lastName);
console.log(`${firstName} ${lastName}`);

// DOM
let firstNameSpan = document.querySelector('.first-name');
let lastNameSpan = document.querySelector('.last-name');

console.log(firstNameSpan, lastNameSpan);

firstNameSpan.innerHTML = firstName;
lastNameSpan.innerHTML = lastName;

// Deklarimi i variablave

// let, const, var -- deprecated

// Tipet primitive

// strings
// let firstName = 'Filan';
// console.log(typeof firstName);

// numbers
// let a = 3;
// console.log(typeof a);

// boolean
let isLoggedIn = true;
// console.log(typeof isLoggedIn);

if (isLoggedIn) {
  //   console.log('User is logged in');
}

// null and undefined
let variable1 = null;
let variable2; // ka mu inicializu me undefined

// console.log('variable1', variable1, 'variable2', variable2);

let score;
score = 1;

// console.log('score', score);

if (true) {
  //   score = score + 1;
  score += 1;
}

// console.log('score', score);

let x = 3;
let y = x;
// console.log('x', x);
// console.log('y', y);
y = 5;
// console.log('x', x);
// console.log('y', y);

// reference types

// arrays
const numbers = [1, 2, 3, 4];
// console.log(numbers);
// numbers.push(5);
// console.log(numbers);
// numbers.push('Text');
// console.log(numbers);
// numbers.push(true);
// console.log(numbers);

// objects
const student = {
  firstName: 'Filan',
  lastName: 'Fisteku',
  'middle name': 'Filane',
  sayHello() {
    return 'Hello from Filan';
  },
};

// menyret qysh mundemi me ju qas propertive te objektit
console.log('First name', student.firstName);
console.log('Middle name', student['middle name']);

student.firstName = 'Test Name';
student.age = 30;
// console.log('student', student);

const student2 = student;
// console.log('student2', student2);

student2.lastName = 'Test last name';
console.log('student', student);
console.log('student2', student2);

// naming conventions
// camelCase notation
// nuk bon me fillu me numer
// let firstVariable;
// let a, b, c;
// b = 4;

const numbers = [1, 2, 3, 4];

const mixedArray = [true, '5', 2, null];

// get element
// console.log(numbers[2]);
// modifikimi
// numbers[1] = 5;
// console.log(numbers);

// const nestedArray = [numbers, mixedArray];
// console.log(nestedArray);
// console.log(nestedArray[1][0]);

// length
// console.log(numbers.length);

// push
// numbers.push(5);
// console.log('push', numbers);

// pop
// numbers.pop();
// console.log('pop', numbers);

// unshift
// numbers.unshift(0);
// console.log('unshift', numbers);

// shift
// numbers.shift();
// console.log('shift', numbers);

// concat
// const arr = numbers.concat(mixedArray);
// console.log(arr);

// includes
// console.log('includes', arr.includes(4));
// if(arr.includes(item)){
// } else {
// }

// join kthen array-in ne string
// console.log('join', arr.join(','));
// "1,2,3"

// largon nje item me index ne index 2 largoje nje item
// arr.splice(2, 1);
// console.log('splice', arr);

// const nuk mundesh me assign, por munesh mi ndrru vlerat
// arr = [1, 2]; // error

// spread operator '...'
const newArray = [...numbers, ...mixedArray];
console.log('spread', newArray);

// objects

const student = {
  firstName: 'John',
  lastName: 'Doe',
  'middle name': 'Middle name',
  address: {
    street: 'Cacttus str.',
    city: 'Prishtine',
  },
};

// get element
console.log(`Studenti ${student.firstName} ${student.lastName}`);
console.log(`Studenti ${student['firstName']} ${student.lastName} ${student['middle name']}`);

// objects
const student = {
  firstName: 'Filan',
  lastName: 'Fisteku',
  address: {
    street: 'Cacttus Str.',
    city: 'Prishtine',
  },
};

// get values
console.log(`Studenti: ${student.firstName} me adrese ${student.address.street}`);

// modifikimi
student.lastName = 'new last name';

// console.log('Student', student);

// shtimi i nje property
student.age = 20;

// console.log('Student', student);

// delete
delete student.age;

// console.log('Student', student);

// keys
// console.log('keys', Object.keys(student));
// length
// console.log('length', Object.keys(student).length);
// values
// console.log('values', Object.values(student));

const todos = [
  { id: 1, title: 'Todo1' },
  { id: 2, title: 'Todo2' },
  { id: 3, title: 'Todo3' },
  { id: 4, title: 'Todo4' },
  { id: 5, title: 'Todo5' },
  { id: 6, title: 'Todo6' },
  { id: 7, title: 'Todo7' },
];

// console.log(todos[1].title);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };

// object destructuring and naming
// const newA = obj3.a;
// const newC = obj3.c;

// nese key values kane emer te njejte skeni nevoj me specifiku me dy pika (:)
const { a: newA, c } = obj3;

console.log('A', newA, 'C', c);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const first = numbers[0];
// const second = numbers[1];
const [first, second, ...rest] = numbers;
console.log(first, second, rest);

const extendedStudent = {
  isAdmin: true,
  ...student,
};

console.log(extendedStudent);

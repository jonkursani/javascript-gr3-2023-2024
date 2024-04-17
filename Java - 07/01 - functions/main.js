// functions

// void
function greet(name = 'Filan') {
  console.log(`Hi ${name}`);
}

// greet();
// greet('Edin');

// return value
// function add(x, y) {
//   return x + y;
// }

// console.log(add(5, 5));
// const result = add(10, 10);
// console.log(result);

// arrow functions
// const emriFunksionit = () => {}
// const add = (x, y) => {
//   return x + y;
// };
// const add = (x, y) => x + y;

// console.log(add(5, 5));
// const result = add(10, 10);
// console.log(result);

// array parameter
function getRandomNumber(numbers) {
  const randomIndex = Math.floor(Math.random() * numbers.length);
  return numbers[randomIndex];
}

// console.log('Random nr', getRandomNumber([23, 55, 213, 543, 123, 12]));

// object parameter
function createUser(user) {
  return `User with id: ${user.id} and name: ${user.name}`;
}

const user = {
  id: 1,
  name: 'Edin',
};
// console.log('Created user', createUser(user));
// console.log('Created user', createUser({ id: 2, name: 'Filan' }));

// array methods
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// krijon ni array te ri
// const doubleNumbers = numbers.map(function (number) {
//   return number * 2;
// });
// const doubleNumbers = numbers.map((number) => {
//   return number * 2;
// });
const doubleNumbers = numbers.map((number) => number * 2);
// console.log(doubleNumbers);

// const evenNumbers = numbers.filter((number) => {
//   return number % 2 === 0;
// });
const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers);

// 2 == '2'; //true
// 2 === '2'; //false

const findNumberThree = numbers.find((number) => number === 3);
// console.log(findNumberThree);

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// filtrimi
// const financeCompanies = companies.filter((company) => company.category === 'Finance');

// mapimi ne array te ri
// const newCompanies = financeCompanies.map((company) => {
//   return { name: company.name, category: company.category };
// });
// console.log(newCompanies);

// chain methods
const financeCompanies = companies
  .filter((company) => company.category === 'Finance')
  .map((company) => {
    return { name: company.name, category: company.category };
  });

console.log(financeCompanies);

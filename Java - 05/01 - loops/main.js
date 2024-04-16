// for
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i, 'cift');
//   } else {
//     console.log(i, 'tek');
//   }
// }

// break - terminon ekzekutimin
// for (let i = 1; i <= 20; i++) {
//   if (i === 15) {
//     console.log('E gjeta 15-shin');
//     break;
//   }

//   console.log(i);
// }

// continue - e bon skip hapin vazhdon me tjetrin
// for (let i = 1; i <= 20; i++) {
//   if (i === 10) {
//     console.log('Bone skip 10-shin');
//     continue;
//   }

//   console.log(i);
// }

const numbers = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < numbers.length; i++) {
//   // index, array[index]
//   console.log('index', i, 'vlera', numbers[i]);
// }

// for (const number of numbers) {
//   console.log('number', number);
// }

// for (const key in numbers) {
//   console.log('index', key, 'item', numbers[key]);
// }

const todos = [
  { id: 1, title: 'Title 1' },
  { id: 2, title: 'Title 2' },
  { id: 3, title: 'Title 3' },
  { id: 4, title: 'Title 4' },
  { id: 5, title: 'Title 5' },
  { id: 6, title: 'Title 6' },
  { id: 7, title: 'Title 7' },
  { id: 8, title: 'Title 8' },
];

// for (const todo of todos) {
//   console.log(`Todo ${todo.id} - (${todo.title})`);
// }

// for (const key in todos) {
//   console.log(`Todo ${todos[key].id} - (${todos[key].title})`);
// }

// Detyra 2
for (let i = 0; i < 5; i++) {
  // e percakton rreshtin
  let x = '';

  for (let j = 0; j <= i; j++) {
    // itero aq here sa rreshti
    x += ' *';
  }

  console.log(x);
}

// Strings

1 == '1'; // true
1 === '1'; // false

// let cacttus = 'CacTtus';

// cacttus
// if (cacttus.toLowerCase() == 'cacttus') {
//   //   console.log('Stringjet jane te njejta');
// } else {
//   //   console.log('Stringjet nuk jane te njejta');
// }

// trim
// null, '' - te dyja nuk kane vlere
// let cacttus = '           ';

// if (cacttus.trim()) {
//   console.log('Stringu ka vlere');
// } else {
//   console.log('Stringu nuk ka vlere');
// }

// let cacttus = 'Cacttus Education';

// indexOf, slice
// console.log('indexOf', cacttus.indexOf('u'));
// console.log('slice', cacttus.slice(8)); // Education
// console.log('slice', cacttus.slice(0, 7)); // Cacttus

// replace
let cacttus = 'Cacttus Education is a good a good school';
console.log(cacttus.replace('a good', 'the best'));
console.log(cacttus.replaceAll('a good', 'the best'));

// math

// console.log(Math.round(4.6));
// console.log(Math.abs(-5));
// console.log(Math.floor(9.99));
// console.log(Math.ceil(9.99));

// Gjeneron vleren 0 - 1 pa e perfshi 1
// console.log(Math.random());
// Gjenero vleren prej 1 - 100
console.log(Math.floor(Math.random() * 100 + 1));

// parsimi
// console.log(parseInt('24.5'));
// console.log(parseFloat('24.5'));
// console.log(+'20'); //
// console.log(Number('24'));

const btnSave = document.querySelector('.btn-save');
btnSave.addEventListener('click', function () {
  const inpSearch = document.querySelector('.inp-search');
  const inpSearchValue = inpSearch.value;

  // nese inputi nuk ka vlere
  if (!inpSearchValue.trim()) {
    alert('Ju lutem shkruani nje fjale');
    return;
  }

  const paraStringLength = document.querySelector('.string-length');
  paraStringLength.innerHTML = `
    Numri i karaktereve per fjalen <strong>${inpSearchValue}</strong> eshte: ${inpSearchValue.trim().length}
  `;

  inpSearch.value = '';
});

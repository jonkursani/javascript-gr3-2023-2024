// const btnSave = document.querySelector('.btn-save');
// // btnSave.addEventListener('click', function() {});
// btnSave.addEventListener('click', () => {
//   // elementi
//   const emerIVariables = document.querySelector('.inp-nr');
//   // vlera e elementit
//   const elInpValue = emerIVariables.value;

//   // nese ska value
//   if (!elInpValue) {
//     alert('Shkruani nje numer.');
//     return;
//   }

//   const number = parseInt(elInpValue);
//   // console.log(typeof number);

//   if (number % 2 === 0) {
//     // jo string '' por `` per me inject variabla
//     alert(`Numri ${number} eshte cift`);
//   } else {
//     alert(`Numri ${number} eshte tek`);
//   }
// });

const btnCalc = document.querySelector('.btn-calc');
btnCalc.addEventListener('click', () => {
  const elName = document.querySelector('.inp-first-name');
  const firstNameValue = elName.value;
  const elLastName = document.querySelector('.inp-last-name');
  const lastNameValue = elLastName.value;
  const elPoints = document.querySelector('.inp-points');
  const pointsValue = elPoints.value;

  if (!firstNameValue.trim() || !lastNameValue.trim() || !pointsValue) {
    alert('Fushat jane obligative.');
    return;
  }

  if (pointsValue < 0 || pointsValue > 100) {
    alert('Range i pikeve eshte 0 deri ne 100');
    return;
  }

  const elOutput = document.querySelector('.output');

  if (pointsValue >= 91) {
    elOutput.textContent = `
      Studenti ${firstNameValue} ${lastNameValue} ka noten 10
    `;
  } else if (pointsValue >= 81 && pointsValue < 91) {
    elOutput.textContent = `
      Studenti ${firstNameValue} ${lastNameValue} ka noten 9
    `;
  } else if (pointsValue >= 71 && pointsValue < 81) {
    elOutput.textContent = `
      Studenti ${firstNameValue} ${lastNameValue} ka noten 8
    `;
  } else if (pointsValue >= 61 && pointsValue < 71) {
    elOutput.textContent = `
      Studenti ${firstNameValue} ${lastNameValue} ka noten 7
    `;
  } else if (pointsValue >= 51 && pointsValue < 61) {
    elOutput.textContent = `
      Studenti ${firstNameValue} ${lastNameValue} ka noten 6
    `;
  } else {
    elOutput.textContent = `
      Studenti ${firstNameValue} ${lastNameValue} ka noten 5
    `;
  }

  // if (pointsValue > 50) {
  //   elOutput.classList.add('success');
  // } else {
  //   elOutput.classList.add('fail');
  // }
  pointsValue > 50 ? elOutput.classList.add('success') : elOutput.classList.add('fail');
});

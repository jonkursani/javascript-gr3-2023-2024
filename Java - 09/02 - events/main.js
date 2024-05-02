const form = document.getElementById('form');
const inpEmail = document.getElementById('exampleInputEmail1');
const inpPassword = document.getElementById('exampleInputPassword1');

function checkEmail() {
  const email = inpEmail.value.trim();
  const emailHelp = document.getElementById('emailHelp');
  // email === ''
  if (!email) {
    emailHelp.textContent = 'Ju lutem shkruani email';
    return;
  } else {
    emailHelp.textContent = '';
  }
}

function checkPassword() {
  const password = inpPassword.value.trim();
  const passwordHelp = document.getElementById('passwordHelp');
  if (!password || password.length < 8) {
    passwordHelp.textContent = 'Ju lutem shkruani passwordin, me shume se 8 karaktere';
    return;
  } else {
    passwordHelp.textContent = '';
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault(); // e ndal mos mu bo refresh faqja

  checkEmail();
  checkPassword();

  alert('Submitted!');
});

inpEmail.addEventListener('blur', checkEmail);
inpPassword.addEventListener('blur', checkPassword);

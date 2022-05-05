/* eslint-disable max-lines-per-function */
// Capturando elementos importantes
const loginButton = document.getElementById('inputButton');
const email = document.getElementById('inputEmail');
const password = document.getElementById('inputPassword');
const sendButton = document.querySelector('#submit-btn');
const agreementCheckbox = document.querySelector('#agreement');
const form = document.querySelector('#evaluation-form');

// Preenchendo os inputs
loginButton.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

sendButton.disabled = true;
agreementCheckbox.addEventListener('click', () => {
  if (agreementCheckbox.checked) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
});

const printFullName = document.createElement('p');
const printEmail = document.createElement('p');
const printHouse = document.createElement('p');
const printFamily = document.createElement('p');
const printSubject = document.createElement('p');
const printRate = document.createElement('p');
const printObs = document.createElement('p');

sendButton.addEventListener('click', () => {
  const firstName = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const emailText = document.querySelector('#input-email').value;
  const house = document.querySelector('#house').value;
  const family = document.querySelector('input[name="family"]:checked').value;
  const subject = document.querySelectorAll('input[name=subject]:checked').value;
/*   let rate = document.querySelector('#rate').value;
  let obs = document.querySelector('#textarea').value; */

  printFullName.innerText = `${firstName} ${lastName}`;
  printEmail.innerText = emailText;
  printHouse.innerText = house;
  printFamily.innerText = family;
/*   printSubject.innerText = subject; */
/*   printRate.innerText = rate;
  printObs.innerText = obs; */

  while (form.hasChildNodes()) {
    form.removeChild(form.firstChild);
  }
  form.appendChild(printFullName);
  form.appendChild(printEmail);
  form.appendChild(printHouse);
  form.appendChild(printFamily);
/*   form.appendChild(printSubject); */
/*   form.appendChild(printRate);
  form.appendChild(printObs); */
});

function contaCaracteres() {
  const textArea = document.querySelector('.textarea');
  const span = document.querySelector('#counter');
  textArea.addEventListener('keyup', (event) => {
    console.log(event.target.value.length);
    const caracteresDigitados = event.target.value.length;
    let caracteresRestantes = 500;
    caracteresRestantes -= caracteresDigitados;
    span.innerText = caracteresRestantes;
  });
}

contaCaracteres();

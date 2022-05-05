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

function geraNome() {
  const firstName = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  printFullName.innerText = `Nome: ${firstName} ${lastName}`;
}

function geraEmail() {
  const emailText = document.querySelector('#input-email').value;
  printEmail.innerText = `Email: ${emailText}`;
}

function geraCasa() {
  const house = document.querySelector('#house').value;
  printHouse.innerText = `Casa: ${house}`;
}

function geraFamilia() {
  const family = document.querySelector('input[name="family"]:checked').value;
  printFamily.innerText = `Família: ${family}`;
}

function geraMateria() {
  const subject = document.querySelectorAll('input[name=subject]:checked');
  const values = [];
  printSubject.innerText = 'Matérias: ';
  for (let i = 0; i < subject.length; i += 1) {
    values.push(subject[i].value);
    printSubject.innerText += values[i];
    if (i !== subject.length - 1) {
      printSubject.innerText += ', ';
    }
  }
}

function geraAvaliacao() {
  const rate = document.querySelector('input[name="rate"]:checked').value;
  printRate.innerText = `Avaliação: ${rate}`;
}

function geraObs() {
  const obs = document.querySelector('#textarea').value;
  printObs.innerText = `Observações: ${obs}`;
}

function appendChilds() {
  form.appendChild(printFullName);
  form.appendChild(printEmail);
  form.appendChild(printHouse);
  form.appendChild(printFamily);
  form.appendChild(printSubject);
  form.appendChild(printRate);
  form.appendChild(printObs);
}

function geraResultado() {
  geraNome();
  geraEmail();
  geraCasa();
  geraFamilia();
  geraMateria();
  geraAvaliacao();
  geraObs();
  while (form.hasChildNodes()) {
    form.removeChild(form.firstChild);
  }
  appendChilds();
}

sendButton.addEventListener('click', geraResultado);

function contaCaracteres() {
  const textArea = document.querySelector('.textarea');
  const span = document.querySelector('#counter');
  textArea.addEventListener('keyup', (event) => {
    const caracteresDigitados = event.target.value.length;
    let caracteresRestantes = 500;
    caracteresRestantes -= caracteresDigitados;
    span.innerText = caracteresRestantes;
  });
}

contaCaracteres();

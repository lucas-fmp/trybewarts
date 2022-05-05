// Capturando elementos importantes
const button = document.getElementById('inputButton');
const email = document.getElementById('inputEmail');
const password = document.getElementById('inputPassword');

// Preenchendo os inputs
button.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
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

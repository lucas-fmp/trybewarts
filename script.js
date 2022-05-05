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

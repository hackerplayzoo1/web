const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);

function validateForm() {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  loginButton.disabled = !(email && password.length >= 5);
}

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  window.location.href = 'https://example.com';
});
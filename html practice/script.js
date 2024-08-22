// Get the elements
const loginForm = document.getElementById('login-form');
const registrationForm = document.getElementById('registrationform');
const showRegistration = document.getElementById('show-rejistration');
const showLogin = document.getElementById('show-login');

// Event listener to show the registration form
showRegistration.addEventListener('click', function(e) {
  e.preventDefault();
  loginForm.style.display = 'none';
  registrationForm.style.display = 'block';
});

// Event listener to show the login form
showLogin.addEventListener('click', function(e) {
  e.preventDefault();
  registrationForm.style.display = 'none';
  loginForm.style.display = 'block';
});

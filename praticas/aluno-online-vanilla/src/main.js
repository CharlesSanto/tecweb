const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const formLogin = document.getElementById('form-login');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');


formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    emailError.textContent = '';
    passwordError.textContent = '';
    
    if (inputEmail.value === '') {
        emailError.textContent = 'O campo de email é obrigatório.';
    }

    if (inputPassword.value === '') {
        passwordError.textContent = 'O campo de senha é obrigatório.';
    }
})

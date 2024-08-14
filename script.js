const loginForm = document.getElementById('loginForm')
const signupForm = document.getElementById('signupForm')
const showSignupBtn = document.getElementById('showSignup')
const showLoginBtn = document.getElementById('showLogin')



showSignupBtn.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
});

showLoginBtn.addEventListener('click', () => {
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
});
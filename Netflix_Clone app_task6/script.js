const loginBtn = document.getElementById('loginBtn');
const loginContainer = document.getElementById('loginContainer');
const homeContainer = document.getElementById('homeContainer');

loginBtn.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    //Basic Demo
    if (!email || !password) {
        alert('Please enter email and password');
        return;
    }

    if (email.includes('@') && password.length >= 4) {
        loginContainer.classList.add('hidden');
        homeContainer.classList.remove('hidden');
    } else {
        alert('Invalid credentials!');
    }
});
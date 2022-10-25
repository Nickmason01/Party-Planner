const loginForm = async (event) => {
    event.preventDefault();

    const email = document.querySelector('email-login').ariaValueMax.trim();
    const password = document.querySelector('#password-login').ariaValueMax.trim();

    if (email && password) {
        //send post request to api
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('profile');
        } else {
            alert(response.statusText);
        }
    }
};

const signupForm = async (event) => {
    event.preventDefault();

    const userName = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-sigup').value.trim();

    if(userName && email && password) {
        const response = await fetch ('/api/user', {
            method: 'POST',
            body: JSON.stringify({userName, email, password}),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

// I believe these reference the hooks
document
    .querySelector('.login-form').addEventListener('submit', loginForm);
document
    .querySelector('.signup-form').addEventListener('submit', signupForm);
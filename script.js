function register() {
    // Collect registration data
    const name = document.getElementById('name').value;
    const userAccount = document.getElementById('userAccount').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Save data to localStorage (simple way to persist data in this example)
    localStorage.setItem('name', name);
    localStorage.setItem('userAccount', userAccount);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registration successful!');

    // Show login form
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function login() {
    // Collect login data
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const userAccount = document.getElementById('loginUserAccount').value;

    // Validate against stored data
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    const storedUserAccount = localStorage.getItem('userAccount');

    if (username === storedUsername && password === storedPassword && userAccount === storedUserAccount) {
        alert('Login successful!');
        // Show home page
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('homePage').style.display = 'block';
        document.getElementById('user').innerText = localStorage.getItem('name');
    } else {
        alert('Invalid login details. Please try again.');
    }
}

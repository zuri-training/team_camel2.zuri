const baseUrl = 'https://example.com'

var signupForm = document.getElementById("signup-form");
signupForm.addEventListener('submit', createAccount);

var loginForm = document.getElementById("login-form");
loginForm.addEventListener('submit', login);

function createAccount(event) {
    event.preventDefault()
    let emailAddress = document.getElementById('email').value
    let password = document.getElementById('password').value

    if ((emailAddress !== '' && emailAddress !== undefined && emailAddress !== null) &&
        (password !== '' && password !== undefined !== password !== null)) {

        let user = {
            email: emailAddress,
            password: password
        }

        let payload = {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        }

        fetch(`${baseUrl}/user/signup`, payload)
            .then(response => {
                let resData = response.json()

            })
            .then(data => console.log(data));

    }


}

function login(event) {
    event.preventDefault()
    let emailAddress = document.getElementById('email').value
    let password = document.getElementById('password').value

    if ((emailAddress !== '' && emailAddress !== undefined && emailAddress !== null) &&
        (password !== '' && password !== undefined !== password !== null)) {
        // call api here

        let user = {
            email: emailAddress,
            password: password
        }

        let payload = {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        }

        fetch(`${baseUrl}/user/login`, payload)
            .then(response => {
                let resData = response.json()


            })
            .then(data => console.log(data));

    }
}
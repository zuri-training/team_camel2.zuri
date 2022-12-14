// const baseUrl = 'https://example.com'
const baseUrl =  'http://localhost:3000'


const signUpBtn = document.querySelector('.sign-up-btn')

let user={
    name:'',
    email:'',
    password:''
}

document.getElementById('name').addEventListener('change', () => {
    user.name = document.getElementById('name').value.trim('')
})
document.getElementById('email').addEventListener('change', () => {
    user.email = document.getElementById('email').value.trim('')
})
document.getElementById('password').addEventListener('change', () => {
    user.password = document.getElementById('password').value.trim('')
})

let payload = {
    method: 'POST',
    headers: {
        'Content-Type':
            'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
}

const getSignup = async () => {
    try{ const response = await fetch(`${baseUrl}/user/signup`, payload)
    const data = await response.json()
    console.log(data)} catch (err){
        console.log(err)
    } 
}
signUpBtn.addEventListener('click', (e) => {
    e.preventDefault()
    getSignup()
    window.location.pathname = '/index.html'
})


    
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
const Email = document.querySelector('#userName');
const Password = document.querySelector('#password');
const loginBTN = document.querySelector('#loginButton');
const errorMessagee = document.querySelector('#error-message');

loginBTN.addEventListener('click', (e)=>{
    e.preventDefault();
    const email = Email.value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    errorMessagee.classList.add('fly-in');
    if(!emailRegex.test(email) || Password.value == ''){
        errorMessagee.textContent=' input a valid email bro';
        errorMessagee.style.color = 'red';
    }else{
        errorMessagee.style.color = 'green';
        errorMessagee.textContent = 'signin successful'
    }
})
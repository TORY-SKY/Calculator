

//working with inputs
const logInBTN = document.querySelector('#link1');
document.addEventListener('click', ()=>{
    try{
    const login = "";
const Emails = document.querySelector('input').value;
const emails1 = document.createElement('h1');
 emails1.textContent = Emails
const resultt = emails1.appendChild(emails1);
document.querySelector('.loginDetails').appendChild(resultt);
}
catch(error){
    console.error('Bro step up the coding game:', error.message);
}
});
console.log(promt('tell us your name, idiot'));
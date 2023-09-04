

//working with inputs
try{
const logInBTN = document.querySelector('#loginButton');
logInBTN.addEventListener('click', ()=>{
    alert('the button has been clicked');
    const testing12 = document.createElement('h1')
testing12.textContent ="this is your line:" + " " + document.querySelector('#formF').firstChild.value;
if(document.querySelector('#formF').firstChild.value == ""){
    alert('empty input bro');
    return false;
}else{

document.getElementById('loginDetails').appendChild(testing12);
console.log(testing12);
}
});

}catch (error){
    
    console.error('bro, try harder:', error.message);
}


/*
function buttn(){
    const lis = document.querySelectorAll('li');
lis.forEach(element => {
    const parag = document.createElement('li');
    const addThis = document.getElementById('userName');
    const node = document.createTextNode(addThis.value);
    parag.appendChild(node);
    
   
        element.appendChild(parag);
    
});
}
const addBTN = document.getElementById('addBTN');
addBTN.addEventListener('click', buttn);
*/
document.getElementById('saveBtn').addEventListener('click', () => {
    const whatTodo = document.querySelector('#todoItems');
    localStorage.setItem('todo', whatTodo.value);
    //getting saved todos
    const getItems = localStorage.getItem('todo');
    //parent node ul
    const displayTodo = document.querySelector('#addTodo');
    //li tage to display the todo
    const createLi = document.createElement('li');
    createLi.textContent = getItems;
    displayTodo.appendChild(createLi);




})
function remove() {

    const check = localStorage.getItem('todo');
    console.log(check);
}
remove();

function screen(){
    console.log("screen width as the moment is actually:" + screen.width);
}

/*function trythis(){
    const inputt = prompt('enter your name bro');
    if(screen.width !== undefined){
        screen();
    }
    else{
        alert('what are you doing bro?');
    }
}
trythis();
console.log('do you know:  ' + "cookies enabled: " + navigator.cookieEnabled + "," + ' appName is: ' + navigator.appName);
console.log(cookie);
const cookiesh3 = document.createElement('h3');
const myCookies = cookie;
const texts = cookiesh3.textContent = 'your cookies said: ' +  myCookies;

document.getElementById('displayTodo').appendChild(cookiesh3);
*/
const myName = 'victor';
console.log(`here is a little story about a great tycon, author, Software Engineer, Web Developer, Automotive Engineer. His name is ${myName}`);
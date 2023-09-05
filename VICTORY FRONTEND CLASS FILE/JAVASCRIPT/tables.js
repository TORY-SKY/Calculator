
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
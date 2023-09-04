

function buttn(){
    const lis = document.querySelectorAll('li');
lis.forEach(element => {
    const parag = document.createElement('li');
    const addThis = prompt('enter your name bro');
    const node = document.createTextNode(addThis);
    parag.appendChild(node);
    if(addThis === ' '){
        
        return false
    }
   
        element.appendChild(parag);
    
});
}
const addBTN = document.getElementById('addBTN');
addBTN.addEventListener('click', buttn);


const inputs = document.querySelectorAll('input');
inputs.forEach(inputValue =>{
    inputValue.addEventListener('input', ()=>{
        if(inputValue.value == "" || !isNaN(inputValue.value)){
            alert('input your name');
            return false;
        } else{
            const SavedItems = localStorage.setItem('names', inputs);
            const displayParentDiv = document.getElementById('displayDiv');
            const createUL = document.createElement('ul')
        }
    });
    
})
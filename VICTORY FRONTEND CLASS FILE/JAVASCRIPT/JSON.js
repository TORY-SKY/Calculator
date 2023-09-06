const inputs = document.querySelectorAll('input');
inputs.forEach(inputValue =>{
    inputValue.addEventListener('input', ()=>{
        if(inputValue.value == "" || inputValue.value == 1){
            alert('youre still on the right track bro');
        } else{
            console.log('nothing happend bro')
        }
    });
    
})
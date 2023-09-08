const selectedOptions = document.querySelectorAll('select');
selectedOptions[0].forEach(element=>(){
    if(element == 'Adamawa'){
        alert(element);
    }
});








console.log(selectedOptions.value);
const h3Tag = document.createElement('h3');
h3Tag.innerHTML = selectedOptions[0].value;

document.querySelector('.section').appendChild(h3Tag);
const selectedOptions = document.getElementById('states');
console.log(selectedOptions.value);

//this code collectes selected states and display the cites in that state
selectedOptions.addEventListener('change', ()=>{
  const  options = selectedOptions.options;
  for(let i=0; i<options.length; i++){
    //this part append the selected state cities to the options
    if(selectedOptions[i].value == 'Lagos'){
      const Changecities = document.getElementById('cities');
      Changecities.innerHTML = "";
      const lagosCities = [
        "Lagos Island",
        "Ikeja",
        "Victoria Island",
        "Apapa",
        "Surulere",
        "Lekki",
        "Ajah",
        "Ikorodu",
        "Badagry",
        "Banana Island",
      ]
      //creating the options
      
      for(let a=0; a<lagosCities.length; a++){
        const optionsTag = document.createElement('option');
        optionsTag.textContent = lagosCities[a];
        Changecities.appendChild(optionsTag);
      }
      

    }
  }
  
  
})




//console.log(selectedOptions.value);
//const h3Tag = document.createElement('h3'); 
//h3Tag.innerHTML = selectedOptions[0].value;

//document.querySelector('.section').appendChild(h3Tag);

function btnFunc(number){
    var btns = document.getElementById("display");
    let btnValue = btns.value;
    btns.value = btnValue + number; 
    
    
    
}
//equalto function
function equalTo(){
    const equaltoo = document.getElementById('display').value;
    const evaluate = eval(equaltoo);
    document.getElementById('displa').value = evaluate;
}
//delete function
function delFunc(){
    document.getElementById('display').value = "";
    document.getElementById('displa').value = "";

}
//show result On input function
document.getElementById('display').addEventListener('input', ()=>{
    
    const equaltoo = document.getElementById('display').value;
    const evaluate = eval(equaltoo);
    document.getElementById('displa').value = evaluate;
   
})

//working with DOM
const CreateEle = document.createElement('p');
CreateEle.textContent= 'this is created and im trying to use JS on it, damn it aaarrhhhh';
console.log(CreateEle);
const JoinTo = document.querySelector('.secondPhase').appendChild(CreateEle);


function gettingWidth(){
    
    const myWidth = document.querySelector('.container');
console.log(myWidth.clientWidth);
const setThis = document.createElement('h2');
setThis.textContent = 1;
myWidth.appendChild(setThis);

}

gettingWidth();

 const parentWidth = document.querySelector('.container');
    console.log(parentWidth.clientWidth);
    console.log(parentWidth.clientHeight);

function itert(){
for(let i=0; i<=100; i++){
  const ele1 = document.createElement('h1');
    ele1.textContent = (i + "% {top: 20; left: 20; }");
  const parentD = document.querySelector('.circle');
  parentD.style.top = Math.floor(Math.random() * 600) + "px";
  parentD.style.left = Math.floor(Math.random() * 500) + "px";
  parentD.style.right = Math.floor(Math.random() * 50) + "px";
  parentD.style.bottom = Math.floor(Math.random() * 10) + "px";
  

  const parentD1 = document.querySelector('.circle1');
  parentD1.style.top = Math.floor(Math.random() * 200) + "px";
  parentD1.style.left = Math.floor(Math.random() * 500) + "px";
  parentD1.style.right = Math.floor(Math.random() * 50) + "px";
  parentD1.style.bottom = Math.floor(Math.random() * 10) + "px";
  

}
}
setInterval(itert, 1000);
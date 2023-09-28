/*function Hello(){
    return <h1>HELLO WORLD!</h1>
}
;*/
//a function component
const Hello = (props)=> <h1 >My name is: {props.name} {props.children}</h1>;





export default Hello;
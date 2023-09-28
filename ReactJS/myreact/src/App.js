import logo from './logo.svg';
import './App.css';
import Hello from './component/Functions.js'
import Usingstate from './component/ClassComp'

function App() {
  return (
    //Working with function PROPS and how to use props in a function component
    <div className="App">
     
       <Hello name='A winner' >Name:
       <div>I AM A WINNER</div>
       </Hello>

       <Usingstate/>
    </div>
  );
}

export default App;


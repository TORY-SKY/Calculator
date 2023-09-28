import {Component} from "react"



class Usingstate extends Component{
    constructor(){
        super();
        this.state = {
            increa = 0;
        };
    }
    increament(){
        this.state({icrea: this.state.increa + 1});
    }
    render(){
        return (
            <div>
                <p>This should work {this.state.increa}</p>
                <button onClick={()=> this.increament()}></button>
            </div>
        )
        
    }
}
export default Usingstate;
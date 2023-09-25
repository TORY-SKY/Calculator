import {Component} from "react"
const displayMessage = (props)=>{
    return 'Im enjoying this' + (2 + 2);
}
class Message extends Component {
    render(){
        return <h2>Tory is doing pretty well with react, and he said {displayMessage()} </h2>
    }
}
export default Message;
import React, { Component } from "react"

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: "Welcome Ragini!!"
        }
    }

    changeMessage(){
        this.setState({
            message:"Thank you for subscribig"
        })
    } 

    render() {
        return (
            <div>
                <h1>
                    Welcome visitor {this.state.message}
                </h1>
                <button onClick={()=> this.changeMessage()}>Suscribe</button>
            </div>
        )
    }
}

// function Welcome(){
//     return <h1>Class Component</h1>
// }

export default Message

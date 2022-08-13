import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message :"Hello"
      }
     // this.clickHandler=this.clickHandler.bind(this)
    }
    // clickHandler(){
    //         this.setState({
    //         message:"welcome to my page"})
    //         console.log(this);
    // }

    clickHandler = ()=>{
        this.setState({
            message:"welcome to my page"})
            console.log(this);
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Submit</button> */}
        {/* <button onClick={()=>this.clickHandler()}>Submit</button> */}
        <button onClick={this.clickHandler}>Submit</button>
      </div>
    )
  }
}

export default EventBind





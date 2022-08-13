import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    
  render() {
    // short circuit mathod
    return this.state.isLoggedIn && <div>Welcome Vishal</div>
    

    // return(                  //Ternary conditional operator
    //     this.state.isLoggedIn ?
    //     <div>Welcome Vishal</div>:
    //     <div>Welcome Guest</div> 
    // )

    // let message;                 //Element veriable
    // if (this.state.isLoggedIn){
    //     message =<div>Welcome Vishal</div> 
    // }
    // else{
    //     message =<div>Welcome Guest</div> 
    // }
    // return <div>{message}</div>

    // if (this.state.isLoggedIn){
    //     return(
    //         <div>Welcome Vishal</div> 
    //     )
    // }
    // else{
    //     return(
    //         <div>Welcome Guest</div> 
    //     )
    // }

    // return (
    //   <div>
    //    <div>Welcome Vishal</div> 
    //    <div>Welcome Guest</div> 
    //   </div>
    // )
  }
}

export default UserGreeting

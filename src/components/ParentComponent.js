import React, { Component } from 'react'
import ChildComponent from '../ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)

      this.state = {
         parentName:"Welcome ragini"
      }
      this.greetParent = this.greetParent.bind(this)
    }
    greetParent(props){
        alert(`hello ${this.state.parentName} from ${props}`)
    }
    
  render() {
    return (
      <div>
        <ChildComponent greatHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent

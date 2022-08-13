import React, { Component } from 'react'

export default class ClassClick extends Component {

    ClickHandler() {
        console.log("object");
    }

  render() {
    return (
      <div>
        <button onClick={this.ClickHandler}> Click Me!</button>
      </div>
    )
  }
}

//export default ClassClick

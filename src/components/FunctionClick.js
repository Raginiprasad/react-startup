import React from 'react'

function FunctionClick() {

  function clickHandler() {
    console.log("clicked");
    // document.getElementById('demo').innerHTML="hello, welcome"
  }

  return (
    <div>
      {/* <p id='demo'>great day</p> */}
      <button onClick={clickHandler}>  Click </button>
    </div>
  )
}

export default FunctionClick

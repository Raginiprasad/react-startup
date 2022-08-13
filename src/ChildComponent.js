import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={()=>props.greatHandler('child')}>Great Parent! welcome to my page</button>
    </div>
  )
}

export default ChildComponent

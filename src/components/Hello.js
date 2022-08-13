import React from 'react'

const Hello = () => {
    // return (
    //     <div className="demo">
    //         <h1>Hello Ragini!!</h1>
    //     </div>
    // )
    return React.createElement('div',{id:'hello', className:'demo'},React.createElement('h1',null,'Hello Ragini'))
}
export default Hello
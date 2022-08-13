import React from 'react'

// function Greet(){ 
//     return <h1>Hello world!!</h1>
// }

export const Greet = (props) => {
    
    //console.log(heroName);
        return (
            <div>
        <h1>Hello {props.name} a.k.a {props.heroName}</h1>
        {props.childern}
        </div>
        )
        
}

//export default Greet
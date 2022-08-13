import Person from './Person'
import React from 'react'

function NameList({person}) {
    //const names = ['Jhon', 'Tom', 'herry']
    const persons = [{id:1, name:'Tom', age:30, skill: 'react'},
    {id:1, name:'Jhon', age:25, skill: 'Angular'},
    {id:1, name:'Herry', age:35, skill: 'Javascript'}
    ]
    //const NameList = names.map(name =><h2>{name}</h2>)
    const personName = persons.map(person => (
    <Person person={persons}> </Person>
    ))
  return (
    <div>
        {personName}
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2> */}
    </div>
  )
}

export default NameList

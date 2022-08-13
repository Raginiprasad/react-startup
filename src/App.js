import logo from './logo.svg';
import './App.css';
import {Greet} from "./components/Greet"
import React, { Component } from 'react';
import Welcome from "./components/Welcome"
import Hello from "./components/Hello"
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

class App extends Component {
  render(){
  return (
    <div className="App">
      <NameList />
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <FunctionClick />
      <ClassClick />
      <EventBind /> */}

      {/* <Counter />
      <Message /> 
      <Greet name="vishal" heroName="batman1">
        <button>Action</button>
      </Greet>
      <Greet name="Ragini" heroName="batman2"/>
      <Greet name="Prasad" heroName="batman3"/>
      <Welcome name="vishal" heroName="batman1"/> 
      <Hello />  */}
    
    </div>
  );
}
}
export default App;

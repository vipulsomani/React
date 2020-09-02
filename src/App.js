import React,{ Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
    render() {
  return (
    <div className="App">
      <h1> Hii I am here</h1>
      <button>Switch Name</button>
      <Person name = "vipul"> Hii i am childre property</Person>
      <Person name = " Somani"> </Person>
      <Person name = "capg"> </Person>
      
    </div>

  );
    }
  //return  React.createElement('div',{className:'App'},React.createElement('h1',null,"Does it worjk now"));
}

export default App;

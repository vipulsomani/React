import React,{ Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = {
    persons : [
      {name: 'Vipul somani',age:23},
      {name: 'yash',age:24},   
      {name: 'yashi',age:25},
       ]
  } 
  switchNameHandler =(newName) => {
   // console.log('was clicked');
  //Dont use this: this.state.persons[0].name = 'VipulSomani';
  this.setState({
    persons : [
      {name: newName,age:23},
      {name: 'yash',age:24},
      {name: 'yashi',age:18},
       ]
  })
  }
nameChangedHandler = (event) => {
  this.setState({
    persons : [
      {name: event.target.value,age:23},
      {name: 'yash',age:24},
      {name: 'yashi',age:18},
       ]
  }) 
}



  render() {
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor:'pointer'

    };
     return (
    <div className="App">
      <h1> Hii I am here</h1>
      <button  
      style={style}
      onClick ={ () => this.switchNameHandler('SoMMM')}>Switch Name</button>
      <Person 
        name = {this.state.persons[0].name}  
        age={this.state.persons[0].age} 
        click={this.switchNameHandler.bind(this,"Ani")}
        changed={this.nameChangedHandler}>
         Hii i am childre property</Person>
      <Person 
        name = {this.state.persons[1].name}  
        age={this.state.persons[1].age}></Person>
      <Person 
        name = {this.state.persons[2].name}  
        age={this.state.persons[2].age}></Person>
     </div>
     //<Person name = " Somani"> </Person>
       //<Person name = "capg"> </Person>
      


  );
    }
  //return  React.createElement('div',{className:'App'},React.createElement('h1',null,"Does it worjk now"));
}

export default App;

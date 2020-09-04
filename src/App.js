import React,{ Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = {
    persons : [
      {id: 'wff',name: 'Vipul somani',age:23},
      {id: 'wff2',name: 'yash',age:24},   
      {id: 'wff3',name: 'yashi',age:25},
       ],showPerson: false
  } 
  deletePersonHandler =(personIndex) => {
    //const persons =this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }
nameChangedHandler = (event,id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });
  const person = {
    ...this.state.persons[personIndex]
  };
  person.name =event.target.value;
  const persons = [...this.state.persons];
  persons[personIndex]= person;
  this.setState({persons: persons} );
}

togglePersonHandler = () => {
  const doesShow = this.state.showPerson;
  this.setState({showPerson : !doesShow});
}

  render() {
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor:'pointer'

    };

    let persons =null;
    if(this.state.showPerson){
      persons = (
        <div>
        {this.state.persons.map((person,index) =>{
            return <Person 
            click = { () => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key ={person.id}
            changed ={ (event) => this.nameChangedHandler(event,person.id)}
            ></Person>
        })}
        </div>
      )
    }
    
    return (
    <div className="App">
      <h1> Hii I am here</h1>
      <button  
      style={style}
      onClick ={ this.togglePersonHandler}>Switch Name</button>
      {persons}
      </div>
     //<Person name = " Somani"> </Person>
       //<Person name = "capg"> </Person>
  


  );
    }
  //return  React.createElement('div',{className:'App'},React.createElement('h1',null,"Does it worjk now"));
}

export default App;

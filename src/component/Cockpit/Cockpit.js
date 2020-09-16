import React from 'react';
import './Cockpit.css'
const cockpit =(props)=>{
    const classes = [];
    const style ={
        backgroundColor: 'green',
        color : 'white',
        font: 'inherit',
        border:'1px solid blue',
        padding: '8px',
        cursor:'pointer'
        };
if(props.showPersons){
    style.backgroundColor= 'red';
}

    if(props.persons.length <=2){
      classes.push('red'); //classes =['red']
    }
    if(props.persons.length <=1){
      classes.push('bold');//classes = ['red','bold']
    }


    return(
        <div className="Cockpit">
        <h1 className = {classes.join(' ')}> Hii I am here</h1>
      <button  
      style={style}
      onClick ={ props.clicked }>Switch Name</button>
      </div>
    );
}
export default cockpit;
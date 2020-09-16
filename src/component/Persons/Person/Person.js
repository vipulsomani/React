import React from 'react';
import './Person.css';
const person = (props) => {
    return (
        <div className="Person">
        <p onClick={props.click}> I am {props.name},calling from person.js and I am
        {props.age} years old !</p>
        <p>{props.children}</p>
        <input type="text"  onChange={props.changed} value ={props.name} />
        </div>
    )
};
export default person;
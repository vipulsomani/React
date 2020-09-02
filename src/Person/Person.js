import React from 'react';
const person = (props) => {
    return <p> I am {props.name},calling from person.js and I am 
    { Math.floor(Math.random()*10)} years old !</p>
};
export default person;
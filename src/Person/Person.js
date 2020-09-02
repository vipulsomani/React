import React from 'react';
const person = (props) => {
    return (
        <div>
        <p> I am {props.name},calling from person.js and I am
        { Math.floor(Math.random() * 10)} years old !</p>
        <p>{props.children}</p>
        </div>
    )
};
export default person;
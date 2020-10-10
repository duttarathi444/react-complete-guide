import React from 'react';
import '../Person/Person.css'

var person = function (props) {
    return (
        <div className="Person">
            <p onClick={props.click}> I am a {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}></input>
        </div>
    );
}

export default person;
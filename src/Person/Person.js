import React from 'react';

var person = function (props) {
    return (
        <div>
            <p> I am a {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person;
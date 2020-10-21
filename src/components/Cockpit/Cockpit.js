import React from 'react';
import classes from './Cockpit.css';
const cockpit = (props) => {

    const assignedclasses = [];
    if (props.persons.length <= 2) {
        assignedclasses.push('red');
    }
    if (props.persons.length <= 1) {
        assignedclasses.push('bold');
    }

    return (
        <div>
            <p> This is really Working</p>
            <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;
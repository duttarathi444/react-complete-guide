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

        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        }

            < p className = { assignedclasses.join(' ') } > This is really Working</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons</button>
    );
}

export default cockpit;
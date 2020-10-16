import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';

import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
// import person from './Person/Person';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'sdsc', name: 'Max', age: '28' },
      { id: 'ggjn', name: 'Manu', age: "29" },
      { id: 'hbhb', name: 'stephanie', age: '22' }
    ],
    showPersons: false
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Rathindranath Dutta', age: '22' },
        { name: 'Manu', age: "29" },
        { name: 'stephanie', age: '23' }
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }



  render() {

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

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person click={() => { this.deletePersonHandler(index) }}
                name={person.name}
                age={person.age}
                key={person.id}
                change={(event) => { this.nameChangedHandler(event, person.id) }} />
            </ErrorBoundary>
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <p className={classes.join(' ')}>This is really Working</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);

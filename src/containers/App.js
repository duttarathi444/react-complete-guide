import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';

// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
// import person from './Person/Person';
import Persons from '../components/Persons/Persons';

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

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler}></Persons>
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    return (
      <StyleRoot>
        <div className="App">
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      { name: 'Max', age: '28' },
      { name: 'Manu', age: "29" },
      { name: 'stephanie', age: '22' }
    ],
    showPersons: false
  }

  switchNameHandler = () => {
    this.setState({
      person: [
        { name: 'Rathindranath Dutta', age: '22' },
        { name: 'Manu', age: "29" },
        { name: 'stephanie', age: '23' }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      person: [
        { name: 'Rathindranath Dutta', age: '22' },
        { name: event.target.value, age: "29" },
        { name: 'stephanie', age: '23' }
      ]
    })
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        { this.state.showPersons ?
          <div>
            <Person name={this.state.person[0].name} age={this.state.person[0].age} />
            <Person name={this.state.person[1].name}
              age={this.state.person[1].age}
              change={this.nameChangedHandler}>My hobbie Racing</Person>
            <Person name={this.state.person[2].name} age={this.state.person[2].age} />
          </div> :
          null}
      </div>
    );
  }
}

export default App;

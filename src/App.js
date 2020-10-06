import React, { Component } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      { name: 'Max', age: '28' },
      { name: 'Manu', age: "29" },
      { name: 'stephanie', age: '22' }
    ]
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

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} />
        <Person name={this.state.person[1].name}
          age={this.state.person[1].age}
          change={this.nameChangedHandler}>My hobbie Racing</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Sylvie', age: 25 },
      { name: 'Xavier', age: 26 },
      { name: 'Yannick', age: 36 }
    ]
  }

  switchNameHandler = () => {
    console.log('bien joué');
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, i'm a React App</h1>
        <p>This is really working !</p>
        <button onClick={this.switchNameHandler}>Click here</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Sylvie', age: 25 },
      { name: 'Xavier', age: 26 },
      { name: 'Yannick', age: 36 }
    ],
    otherState: 'some other valuer',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: 'Xavier', age: 26 },
        { name: 'Yannick', age: 37 }
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Sylvie', age: 25 },
        { name: event.target.value, age: 26 },
        { name: 'Yannick', age: 37 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
     this.setState({showPersons: !doesShow});
  };

  render() {
    const style = {
      backgoundColor: 'white',
      font: 'inherit',
      border: '1px solid pink',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {
        persons = (
            <div>

                <Person name={this.state.persons[0].name}
                        age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.switchNameHandler.bind(this, 'Sylvie')}
                        changed={this.nameChangedHandler}/>
                <Person name={this.state.persons[2].name}
                        age={this.state.persons[2].age}/>
            </div>
        );
    }
    return (
      <div className="App">
        <h1>Hi, i'm a React App</h1>
        <p>This is really working !</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Click here
        </button>
          {persons}
      </div>
    );
  }
}

export default App;

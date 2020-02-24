import React, { useState } from 'react';//useState more important react hook
import Person from './Person/Person';
import './App.css';

//normal function component
const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Sylvie', age: 25 },
      { name: 'Xavier', age: 26 },
      { name: 'Yannick', age: 36 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState);
  const switchNameHandler = () => {
    // Don't do this: personsState.persons[0].name = 'Naomie';
    setPersonsState({
      persons: [
        { name: 'Naomie', age: 25 },
        { name: 'Xavier', age: 26 },
        { name: 'Yannick', age: 37 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, i'm a React App</h1>
      <p>This is really working !</p>
      <button onClick={switchNameHandler}>Click here</button>
      <Person name={personsState.persons[0].name}
              age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name}
              age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name}
              age={personsState.persons[2].age}/>
    </div>
  );
}

export default App;

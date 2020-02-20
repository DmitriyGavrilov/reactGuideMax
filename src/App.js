import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
// import { render } from '@testing-library/react';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

/*
const app = props => {

  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Jack', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  });

  console.log(personState);

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Jack', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}><p>My Hobbies: Racing</p></Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
};
*/
class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Jack', age: 29 },
      { id: 'asdf1', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {

    const styleForBtn = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid #ccc',
      padding: '8px',
      cursor: 'pointer',
      transition: '1s',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            key={person.id}
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            changed={(event) => this.nameChangedHandler(event, person.id)} />;
          })}
        </div>
      );
      styleForBtn.backgroundColor = 'red';
      styleForBtn[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    };

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button style={styleForBtn} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium(App);
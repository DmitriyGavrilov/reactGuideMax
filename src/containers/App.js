import React, { Component } from 'react';
// import React, { useState } from 'react';
import classes from './App.module.css';
// import { render } from '@testing-library/react';
import Persons from '../components/Persons/Persons';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import withClassFunc from '../hoc/withClassFunc';
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
  constructor(props) {
    super(props)
    console.log('[App.js constructor]');
    // this.state = {};
  }
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Jack', age: 29 },
      { id: 'asdf1', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js getDerivedStateFromProps]', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount()');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter++
      };
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
    console.log('[App.js] render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler} 
            changed={this.nameChangedHandler} />;
    };

    return (
      <WithClass classes={classes.App}>
        <button onClick={() => {
          this.setState({ showCockpit: !this.state.showCockpit })
        }}>Toggle Cockpit</button>
        {this.state.showCockpit ? <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          toggle={this.togglePersonHandler} /> : null}
        {persons}
      </WithClass>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClassFunc(App, classes.App);
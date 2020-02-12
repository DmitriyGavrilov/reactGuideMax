import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import Person from './Person/Person';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name='Max' age='28' />
        <Person name='Jack' age='29'><p>My Hobbies: Racing</p></Person>
        <Person name='Stephanie' age='26' />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}
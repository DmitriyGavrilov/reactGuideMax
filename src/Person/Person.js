import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = ({ name, age, children, click, changed }) => {
    const style ={
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        <div className='Person' style={style}>
            <p onClick={click}>I'm { name } and I am { age } years old!</p>
            {children}
            <input type="text" onChange={changed} value={name} />
        </div>
    );

};

export default Radium(person);
import React from 'react';
import classes from './Person.module.css';
// import styled from 'styled-components';

// const StyledDiv = styled.div`width: 60%;
// margin: 15px auto;
// border: 1px solid #eee;
// box-shadow: 0 2px 3px #ccc;
// padding: 16px;
// text-align: center;`

const person = ({ name, age, children, click, changed }) => {
    const rnd = Math.random();
    if ( rnd > 0.7) {
        throw new Error( 'Something went wrong' );
    }
    return (
    
        <div className={classes.Person}>
        {/* // <StyledDiv> */}
            <p onClick={click}>I'm { name } and I am { age } years old!</p>
            {children}
            <input type="text" onChange={changed} value={name} />
        {/* // </StyledDiv> */}
        </div>
    );

};

export default person;
import React, { Component } from 'react';
import classes from './Person.module.css';
import withClassFunc from '../../../hoc/withClassFunc';
import Aux from '../../../hoc/Aux'
// import { render } from '@testing-library/react';
// import styled from 'styled-components';

// const StyledDiv = styled.div`width: 60%;
// margin: 15px auto;
// border: 1px solid #eee;
// box-shadow: 0 2px 3px #ccc;
// padding: 16px;
// text-align: center;`

class Person extends Component {
    // const rnd = Math.random();
    // if ( rnd > 0.7) {
    //     throw new Error( 'Something went wrong' );
    // }
    render() {
        console.log('[Person.js] rendering');
        return (
            <Aux>
            {/* // <Fragment> */}
            {/* // <div className={classes.Person}> */}
            {/* // <StyledDiv> */}
                <p onClick={this.props.click}>I'm { this.props.name } and I am { this.props.age } years old!</p>
                {this.props.children}
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            {/* // </StyledDiv> */}
            {/* // </div> */}
            {/* // </Fragment> */}
            </Aux>
        );
    }
}

export default withClassFunc(Person, classes.Person);
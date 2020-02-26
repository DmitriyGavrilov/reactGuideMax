import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.module.css';
import withClassFunc from '../../../hoc/withClassFunc';
import Aux from '../../../hoc/Aux'
import AuthContext from '../../../context/auth-context';
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

    // constructor(props) {
    //     super(props);
    //     this.inputElementRef = React.createRef();
    // }
    inputElementRef = React.createRef();

    static contextType = AuthContext;

    componentDidMount() {
        // document.querySelector('input').focus();
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering');
        return (
            <Aux>
                {/* <AuthContext.Consumer> */}
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
                {/* </AuthContext.Consumer> */}
            {/* // <Fragment> */}
            {/* // <div className={classes.Person}> */}
            {/* // <StyledDiv> */}
                <p onClick={this.props.click}>I'm { this.props.name } and I am { this.props.age } years old!</p>
                {this.props.children}
                <input 
                    type="text" 
                    // ref={(inputEl) => (this.inputElement = inputEl)}
                    ref={this.inputElementRef}
                    onChange={this.props.changed} 
                    value={this.props.name} />
            {/* // </StyledDiv> */}
            {/* // </div> */}
            {/* // </Fragment> */}
            </Aux>
        );
    }
}
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClassFunc(Person, classes.Person);
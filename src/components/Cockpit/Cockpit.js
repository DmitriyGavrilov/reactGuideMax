import React from 'react';
import classes from './Cockpit.module.css';

const Cockpit = ( props ) => {
    let classesArr = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
      classesArr.push(classes.red);
    }
    if (props.persons.length <= 1) {
      classesArr.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classesArr.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.toggle}>Toggle Persons</button>
        </div>
    );
}

export default Cockpit;
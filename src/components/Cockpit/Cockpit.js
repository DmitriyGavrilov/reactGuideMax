import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = ( props ) => {
    // React hook
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      // Http request ...
      const timer = setTimeout(() => {
        alert('Saved data to cloud!');
      }, 1000);
      return () => {
        clearTimeout(timer);
        console.log('[Cockpit.js] Cleanup work in useEffect')
      }
    }, []);

    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] Cleanup work in 2nd useEffect');
      }
    });

    // useEffect();

    let classesArr = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.personsLength <= 2) {
      classesArr.push(classes.red);
    }
    if (props.personsLength <= 1) {
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

export default React.memo(Cockpit);
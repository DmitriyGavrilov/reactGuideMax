import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = ( props ) => {

  const authContext = useContext(AuthContext);
  console.log(authContext.authenticated);
  const toggleBtnRef = useRef(null);

    // React hook
    useEffect(() => {
      console.log('[Cockpit.js] useEffect'); 
      // Http request ...
      // const timer = setTimeout(() => {
      //   alert('Saved data to cloud!');
      // }, 1000);
      toggleBtnRef.current.click();
      return () => {
        // clearTimeout(timer);
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
            <button ref={toggleBtnRef} className={btnClass} onClick={props.toggle}>
              Toggle Persons
            </button>
            {/* <AuthContext.Consumer> */}
            <button onClick={authContext.login}>Log in</button>
            {/* </AuthContext.Consumer> */}
        </div>
    );
}

export default React.memo(Cockpit);
import React from 'react';

const person = ({ name, age, children }) => {
return (
    <div>
        <p>I'm { name } and I am { age } years old!</p>
        {children}
    </div>
    );

};

export default person;
import React from 'react';
// Functional component
// A component is a function that returns/ renders some JSX code 
// it defines which HTML code React should render to the real DOM in the end.

const person = (props) => {
    return(
        <div>
            <p> I'm  {props.name} and I'm {props.age} years old!</p>            
            <p> {props.children}</p>            
        </div>
    )
 
};

export default person; 
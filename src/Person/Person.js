import React from 'react';
import './Person.css';
// Functional component
// A component is a function that returns/ renders some JSX code 
// it defines which HTML code React should render to the real DOM in the end.

const person = (props) => {
    return(
        <div className="Person">
            <p onClick={props.click}> I'm  {props.name} and I'm {props.age} years old!</p>            
            <p> {props.children}</p>            
            <input 
                type="text" 
                // 2 way binding setup
                onChange={props.changed}
                value={props.name}/>
        </div>
    ) 
};

export default person; 
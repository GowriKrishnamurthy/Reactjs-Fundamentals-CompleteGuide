import React from 'react';
import './Person.css';
import Radium  from 'radium';

const person = (props) => {
    const style ={
        '@media(min-width: 500px)':{
            width: '450px'
            }
    };    
    // const rand = Math.random()
    // if(rand > 0.7){
    //     throw new Error('Something went wrong!'); 
    // }

    return(        
        <div className="Person" style={style}>
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

export default Radium(person); 
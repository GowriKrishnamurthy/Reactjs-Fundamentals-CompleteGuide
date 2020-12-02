import React, { Component } from 'react';
import './Person.module.css';
import Radium  from 'radium';

class Person extends Component
{
    render() {    
    console.log('[Persons.js] rendering..');   
    return(      
        <div className="Person">
            <p onClick={this.props.clicked}> I'm  {this.props.name} and I'm {this.props.age} years old!</p>            
            <p> {this.props.children}</p>            
            <input 
                type="text" 
                // 2 way binding setup
                onChange={this.props.changed}
                value={this.props.name}/>
        </div>
        );
    }
}
export default Radium(Person); 
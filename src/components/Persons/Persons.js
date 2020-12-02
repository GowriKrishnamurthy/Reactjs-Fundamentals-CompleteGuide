import React, { Component } from 'react';
import Person from './Person/Person'; 
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

class Persons extends Component
{    
    render() {
        console.log('[Persons.js] rendering..');   
        return(  
            this.props.persons.map((person, index)=> {
                return (
                <ErrorBoundary key={person.id}>
                <Person 
                    clicked={()=>this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event)=>this.props.changed(event,person.id)}
                />
                </ErrorBoundary>
            );
        }));
    }
}
export default Persons; 

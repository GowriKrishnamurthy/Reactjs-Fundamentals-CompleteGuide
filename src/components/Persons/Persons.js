import React, { Component } from 'react';
import Person from './Person/Person'; 
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

class Persons extends Component
{    
    // static getDerivedStateFromProps(props, state)
    // {
    //     console.log('[Persons.js] getDerivedStateFromProps');  
    //     return state; 
    // }
    
    // componentWillReceiveProps(props)
    // {
    //     console.log('[Persons.js] componentWillReceiveProps',props);  
    // }
    shouldComponentUpdate(nextProps,nextState)
    {
        console.log('[Persons.js] shouldComponentUpdate');  
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log('[Persons.js] getSnapshotBeforeUpdate');  
        return true;
    }

    componentDidUpdate(){
        console.log('[Persons.js] componentDidUpdate');  
    }

    //Add cleanup code here : executes just before this component is removed,
    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount'); 
    }

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

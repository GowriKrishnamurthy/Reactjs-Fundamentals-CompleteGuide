import React, {useEffect} from 'react';

import styles from './Cockpit.module.css'

const cockpit = ( props ) => {

    // executes for every rendered cycle of the cockpit
    useEffect(()=>{
        console.log('[Cockpit.js] useEffect');

        // Run this code only when our persons changed        
        setTimeout(()=>{
            alert('Saved data to cloud!');
            }, 1000);       
    }, [props.persons]); 
    // if empty array [] is passed to this 2nd param, code gets executed only when dependencies 
    // If there are no dependencies, they can never change and therefore this can never rerun, it will run for the first time,
    // that is the default but it will never run again.

    // 2nd param of UseEffect can have multiple fields that this code may depend on.. eg [a,b,c]

    //useEffect1()
    //useEffect2()
    
    const assignedClasses = [];
    let btnStyle='';
    if(props.showPersons){
        btnStyle = styles.Red;
    }

    if ( props.persons.length <= 2 ) {
      assignedClasses.push( styles.red ); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
      assignedClasses.push( styles.bold ); // classes = ['red', 'bold']
    }

    return (
        <div classes={styles.Cockpit}>
        <h1 className={assignedClasses.join(' ')}> {props.title}</h1>        
        <button 
        className={btnStyle} 
        onClick={props.clicked}>
            Show/Hide</button>          
        </div>
    );
  }

export default cockpit; 

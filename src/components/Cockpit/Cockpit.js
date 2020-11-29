import React from 'react';

import styles from './Cockpit.css'

const cockpit = ( props ) => {
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
        <h1 className={assignedClasses.join(' ')}> Hi, I'm a React App!</h1>        
        <button 
        className={btnStyle} 
        onClick={props.clicked}>
            Show/Hide</button>          
        </div>
    );
  }

export default cockpit; 

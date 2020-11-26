import React, { Component } from 'react';
import './App.css';
import Person from './components/Persons/Person/Person'; 
import Radium,{StyleRoot}  from 'radium';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

class App extends Component {
  state ={
    persons:[
      { id:'1', name:'Tom',age:28 },
      { id:'2', name:'Harry',age:30 },
      { id:'3', name:'Rose',age:25 }
    ],
    showPersons:false
  }

  nameChangedHandler=(event, id)=> {
    //Which person
    const personIndex = this.state.persons.findIndex(p=>p.id===id);

    //Copy of the state person variable
    const personToChange = {
      ...this.state.persons[personIndex]
    }
    // or another way to create personToChange object.
    //const personToChange = Object.assign({},this.state.persons[personIndex])

    //update value
    personToChange.name = event.target.value;

    //  personsUpdated is a copy os state person array
    const personsUpdated = [...this.state.persons];
    personsUpdated[personIndex] = personToChange;
     
    // reset the global state person with the updated object person
    this.setState({ persons:personsUpdated});
  }

  togglePersonHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  }
  
  deletePersonHandler = (personIndex) => {
    // Get all persons in to a new array & remove person corresponding to the input index     
    //const personsArr = this.state.persons.slice();

    // using ES6 spread operator
    const personsArr = [...this.state.persons]
    personsArr.splice(personIndex,1);
    
    // Set the global state variable person with the new arry
    this.setState({persons: personsArr});
  }
  render() {
    const style = {
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      ':hover': {
        backgroundColor:'lightgreen',
        color:'black'
      }
    }
    let persons = null;
    
    if(this.state.showPersons)
    {
      persons=(
      <div>
        { this.state.persons.map((person, index)=>
           {
             return <ErrorBoundary key={person.id}>
              <Person 
              click={()=>this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event)=>this.nameChangedHandler(event,person.id)}
            />
            </ErrorBoundary>
           }
           )}        
      </div>
      );
      style.backgroundColor='red';
      style[':hover'] = {
        backgroundColor:'lightred',
        color:'black'
      }
    }
    // let classes = ['red','bold'].join(' ');
    const classes = [];
    if(this.state.persons.length<=2 ) {
      classes.push('red') //  classes = ['red']
    }
    if(this.state.persons.length<=1) {
      classes.push('bold') // classes = ['red','bold']
    }
    
    return (
      <StyleRoot>
      <div className="App">
        {
        /* <h1 class={classes}> Hi, I'm a React App!</h1>         */}
        <h1 className={classes.join(' ')}> Hi, I'm a React App!</h1>        
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Show/Hide</button>          
          { persons }                          
      </div>
      </StyleRoot>
    );
  }
}

export default  Radium(App);

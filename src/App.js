import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'; 

class App extends Component {
  state ={
    persons:[
      { name:'Tom',age:28 },
      { name:'Harry',age:30 },
      { name:'Rose',age:25 }
    ],
    showPersons:false
  }

  nameChangedHandler=(event)=> {
    this.setState({
      persons:[
        { name:'Thomas',age:28 },
        { name:event.target.value, age:30 },
        { name:'Roseline',age:25 }
      ]
    });
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
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    }
    let persons = null;
    
    if(this.state.showPersons)
    {
      persons=(
      <div>
        { this.state.persons.map((person, index)=>{
            return <Person 
              click={()=>this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
            />
          }
        )}        
      </div>
      );
    }
    return (
      <div className="App">
        <h1> Hi, I'm a React App!</h1>
        
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Show/Hide</button>          
          { persons }                          
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'; 

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
    // or anohter way to create personToChange object.
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
              key={person.id}
              changed={(event)=>this.nameChangedHandler(event,person.id)}
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

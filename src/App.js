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

  switchNameHandler=()=> {    
    this.setState({
      persons:[
        { name:'Thomas',age:28 },
        { name:'Harry',age:30 },
        { name:'Roseline',age:25 }
      ]
    });
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
        { this.state.persons.map(person=>{
            return <Person 
              name={person.name}
              age={person.age}
            />
          }
        )};        
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

      // JSX is just syntactic sugar for JavaScript, allowing us to write HTMLish code instead of
      // nested React.createElement(...) calls.
      // React.createElement(
      //   'div',
      //   {className:'App'},
      //   React.createElement('h1',null,"Hi, I\'m a React App!"))
    );
  }
}

export default App;

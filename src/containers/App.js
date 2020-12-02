import React, { Component } from 'react';
import classes from './App.module.css';
import Radium,{StyleRoot}  from 'radium';
import Persons from '../components/Persons/Persons'; 
import Cockpit from '../components/Cockpit/Cockpit'; 

class App extends Component {
  constructor(props)
  {
    super(props);
    console.log('[App.js] constructor');
  }
  state ={
    persons:[
      { id:'1', name:'Tom',age:28 },
      { id:'2', name:'Harry',age:30 },
      { id:'3', name:'Rose',age:25 }
    ],
    showPersons:false
  }

  static getDerivedStateFromProps(props, state)
  {
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }
 
  componentDidMount()
  {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps,nextState)
  {
    console.log('[App.js] shouldComponentUpdate');
    return true; //setting it to false will prevent toggling to occur because we're preventing the update on this component
  }

  componentDidUpdate()
  {
    console.log('[App.js] componentDidUpdate');
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
    console.log('[App.js] render');
    
    let persons = null;
    
    if(this.state.showPersons)
    {
      persons = <Persons 
          persons = {this.state.persons} 
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler} />
    }
    
    return (
      <StyleRoot>
      <div className={classes.App}>
          <Cockpit
            title={this.props.appTitle}
            showPersons = {this.state.showPersons}
            persons={this.state.persons} 
            clicked = {this.togglePersonHandler}
            /> 
          { persons }                          
      </div>
      </StyleRoot>
    );
  }
}

export default  Radium(App);

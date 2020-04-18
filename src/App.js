import React, {Component} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import About from './components/about'
import Todos from './components/todos';
import Header from './components/header';
import AddTodos from './components/addTodos';
//import {v4 as uuid} from 'uuid'
import axios from 'axios';

class App extends Component {
  state = {
    todos : [ ] 
  }    
  componentDidMount (id) {
    axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=12` )
    .then(res => this.setState({todos : res.data }))
  }
// Toggle
eventClicked = (id) => {
  this.setState({ todos : this.state.todos.map(todo => {
    if(todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo
  })
  })
}  

//Delete
delTodos = (id) => {
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then( res => this.setState({ todos : [...this.state.todos.filter(todo => todo.id !== id)]})
  )
}


// Add 
addTodos = (title) =>{
axios.post('https://jsonplaceholder.typicode.com/todos', {
  title,
  completed :false,

})
.then(res => this.setState({
   todos :  [...this.state.todos, res.data]})

)}

 render() {
    return (
      <Router>
      <div className="App">
      <Header />
      <Route exact path="/" render={ props => 
        <React.Fragment>
        <AddTodos addTodos = {this.addTodos}/>
        <h3> <Todos todos={this.state.todos} eventClicked= {this.eventClicked} delTodos = {this.delTodos} /></h3>
        
      </React.Fragment>
      
      } />
      <Route path="/about" component= {About} />
     
      </div>
      </Router>
    )
  }
}

export default App;

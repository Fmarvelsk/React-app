import React, {Component} from 'react';
import Todositems from './todosItems';
import PropType from 'prop-types'

class Todos extends Component {

    render(){
    return this.props.todos.map((todo) =>
        <Todositems  key={todo.id} items={todo} eventClicked={this.props.eventClicked} delTodos = {this.props.delTodos} />
    
    ) 
    }
}
Todos.PropType ={
    todos : PropType.array.isRequired,
    eventClicked : PropType.func.isRequired,
    deltodos : PropType.func.isRequired
}
export default Todos;

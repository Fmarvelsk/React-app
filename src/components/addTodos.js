import React, { Component } from "react";
import PropType from 'prop-types';

export class AddTodos extends Component {
state = {
    title : ''
}

summitForm = (e) => {
e.preventDefault();
this.props.addTodos(this.state.title);
this.setState ( { title : ''}) 
}

input = (e) => this.setState( { [e.target.name] : e.target.value})
    render(){
    return (
        <form onSubmit={this.summitForm}  style={{ display : 'flex'}}> 
            <input type="text" style={getInput} name="title" placeholder="Add Todos"  value={this.state.title} onChange ={this.input} />
            <input type="submit" value="Summit" className="btn" style={{ flex : '1', cursor : 'Pointer'}} />
            </form>
    )
    }
}
const getInput = {
    flex : '10',
    padding :'8px'
}

AddTodos.PropType = {
    addTodos : PropType.func.isRequired
}
export default AddTodos

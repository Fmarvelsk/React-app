import React, { Component } from 'react'
import PropType from 'prop-types' 

export class TodosItems extends Component {
   getStyle = () => {
       return {
           backgroundColor : '#f4f4f4',
           padding : '10px',
           borderBottom : '0.5px #ccc dotted',
           textDocoration : this.props.items.completed ? 'line-through' : 'none'
       }
   }
getBtn = ()=> {
    return {
        float : 'right',
        backgroundColor : 'red',
        color : '#fff',
        border : 'none',
        borderBottom : 'none',
        borderRadius : '50%',
        padding: '5px 8px',
        cursor : 'pointer',

    }
}   
  
    render() {
        const {id, title} = this.props.items;
        return (
            <div style={this.getStyle()}>
               <p> <input type="checkbox" onChange= {this.props.eventClicked.bind(this, id)} />{' '}
               {title}  <button style={this.getBtn()}  onClick ={this.props.delTodos.bind(this, id)}> X</button> </p>
                
            </div>
        )
    }
    
}

TodosItems.PropType ={
    items: PropType.object.isRequired,
    eventClicked : PropType.func.isRequired,
    deltodos : PropType.func.isRequired
}

export default TodosItems

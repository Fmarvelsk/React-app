import React from 'react';
import { Link } from 'react-router-dom';

function header (){
    return (
        <header style={getHeader}>
        
        <h1>TodoList</h1>
    <Link className="nav" to="/">Home</Link> 
    <Link className="nav" to="/about">About</Link>        
        </header>
    )
}
const getHeader = {
    backgroundColor : '#333',
    color : '#fff',
    textAlign : 'center',
    padding :  '10px',
    border : 'none'
}

export default header;
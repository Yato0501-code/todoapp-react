import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  let defStyle = {
    minHeight : "70vh"
  }
  return (
    <div className='container my-3' style={defStyle}>
      <h3 className='my-3'>
        ToDos List</h3>
        {props.todos.length === 0 ? "No todos to display": 
        props.todos.map((todo)=>{
            return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        })}
    </div>
  )
}

export default Todos

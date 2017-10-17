import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'


const TodoList = function(todos, onTodoClick) {
  return (
    <ul>
      {todos.map(function(todo) {
        <Todo key={todo.id} onClick={function() {onTodoClick(todo.id)}} />
      })}
    </ul>
  )
}


ToDoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}


export default TodoList

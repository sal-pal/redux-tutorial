import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'


const getVisibleTodos = function(todos, filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(function(t) {return t.completed})
    case 'SHOW_ACTIVE':
      return todos.filter(function(t) {return !t.completed})
  }
}


const mapStateToProps = function(state) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}


const mapDispatchToProps = function(dispatch) {
  return {
    onTodoClick: function(id) {
      dispatch(toggleTodo(id))
    }
  }
}


const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)


export default VisibleTodoList

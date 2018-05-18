import React, { Component } from 'react';
import ToDoItem from './ToDoItem'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


class RToDoList extends Component {

  render () {
    const len =  this.props.todos ? this.props.todos.length : 0 // условие ? значение1 : значение2
    const todoHTML = this.props.todos ? this.props.todos.map( (todo )=>
     <ToDoItem
       todo={todo}
       key={todo.id}
       deleteItem={this.props.deleteItem}
       changeChecked={this.props.changeChecked}
     />
  ) : [];

    return (
      <div>
        <p> Total elements : {len}</p>
        <ul>
          {todoHTML}
        </ul>
      </div>
    )
  }

}

RToDoList.propType = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      checked: PropTypes.bool.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired
  )
};

const mapStateToProps = state => {
  return { todos: state.todos };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteItem: (id) => dispatch({type:"DELETE_TODO", id: id}),
        changeChecked: (id) => dispatch({type:"TODO_CHECKED", id: id})
    };
};

const ToDoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(RToDoList);

export default ToDoList

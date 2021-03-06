import React, { Component } from 'react';
import ToDoItem from './ToDoItem'
import AddItem from './AddItem'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Grid, Row, Col} from 'react-bootstrap'

class RToDoList extends Component {

  render () {
    const len =  this.props.todos ? this.props.todos.length : 0 // условие ? значение1 : значение2
    const todoHTML = this.props.todos ? this.props.todos.map( (todo )=>
     <ToDoItem
       todo={todo}
       key={todo.id}
       deleteItem={this.props.deleteItem}
       changeChecked={this.props.changeChecked}
       popupShowItem={this.props.popupShowItem}
     />
  ) : [];

    return (
      <React.Fragment>

        <Grid className="show-grid">
          <AddItem />

          <Row>
            <Col xs={12} md={12}>Total elements : {len}</Col>
          </Row>
          {todoHTML}
        </Grid>

      </React.Fragment>

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
        changeChecked: (id) => dispatch({type:"TODO_CHECKED", id: id}),
        popupShowItem: (description) => dispatch({type:"OPEN_TODO_POPUP", description: description})
    };
};

const ToDoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(RToDoList);

export default ToDoList

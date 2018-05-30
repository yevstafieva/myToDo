import React from 'react';
import ToDoItem from './ToDoItem'
import { connect } from 'react-redux'


class RTodoItemPage extends React.Component{
  render (){
  console.log(this.props);
  if (this.props.todos) {
      const searchId=this.props.match.params.id;
      const a = this.props.todos.find(x => x.id == searchId)
      console.log (searchId, a)
      return ( <div>
        <h2>Todo Item</h2>
        <p>{a.description}</p>
      </div>
    )}
    else {return (<h2>loading...</h2>)}
  }

}

const mapStateToProps = state => {
  return { todos: state.todos };
};
const mapDispatchToProps = dispatch => {
    return {

    };
};

const TodoItemPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(RTodoItemPage);

export default TodoItemPage

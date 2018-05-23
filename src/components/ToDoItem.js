import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class ToDoItem extends React.Component {

  static contextTypes = {
      store: PropTypes.object.isRequired,
  }

  constructor (props){
    super(props) ;
    this.onClick = this.handleClick.bind(this);
    this.showItem = this.handleShowItemClick.bind(this);
    this.deleteClick = this.handleDeleteClick.bind(this);
  }

  handleClick (event){
  //  this.context.store.dispatch({
  //    type: "TODO_CHECKED",
  //    id: this.props.todo.id
  //  })
    this.props.changeChecked(this.props.todo.id);
  }

 handleShowItemClick (event){
    this.props.popupShowItem(this.props.todo.description);
 }

  handleDeleteClick (event){
    event.stopPropagation();
    this.props.deleteItem(this.props.todo.id);
  }

  render () {
    return (
      <div>
        <label>
        <input id={"toDoItemCheckbox"+this.props.todo.id} type="checkbox" onClick={this.onClick} defaultChecked={this.props.todo.checked} />
        <span className={this.props.todo.checked?"item-checked":"item-not-checked"}>{this.props.todo.description}</span>
        </label>
        <a href="#" onClick={this.showItem}>Show</a>
        <a href="#" onClick={this.deleteClick}>Delete</a>

      </div>
    )
  }

}

export default ToDoItem

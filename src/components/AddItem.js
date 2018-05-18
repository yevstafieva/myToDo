import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class RAddItem extends Component {
  constructor (props){
    super(props) ;
    this.onClick = this.handleClick.bind(this);
  }

  handleClick (event){
    event.stopPropagation();
    const newItem=document.getElementById("addNewToDoItem").value;
    this.props.addNewItem(newItem);
  }
  render () {
    return (
      <div>
        <input id="addNewToDoItem" type="text" placeholder="add new item" />
        <button onClick={this.onClick}>Add</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { todos: state.todos };
};

const mapDispatchToProps = dispatch => {
    return {
        addNewItem: (newItem) => dispatch({type:"ADD_TODO", description: newItem}),
    };
};

const AddItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(RAddItem);

export default AddItem

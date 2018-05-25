import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {Form, Col, FormGroup, FormControl, Button, Row} from 'react-bootstrap'

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
      <Row><Col  xs={12} md={12}>
      <Form inline>
      <FormGroup inline>
        <FormControl id="addNewToDoItem"
            type="text"
            placeholder="Add new item"
          />
        <Button onClick={this.onClick}>Add</Button>
      </FormGroup>
    </Form>
  </Col></Row>
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

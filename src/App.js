import React from 'react';
import AddItem from './components/AddItem';
import ToDoList from './components/ToDoList';
import TodoItemPage from './components/TodoItemPage'
import logo from './logo.svg';
import './App.css';
import './Popup.css'
import PropTypes from 'prop-types'
import NewPopup from './components/NewPopup'
import Popup from 'react-popup'
import "bootstrap/dist/css/bootstrap.css";
import { Grid} from "react-bootstrap"
import { Route, Switch } from "react-router-dom"

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </div>

        <Switch>
          <Route exact path="/" component={ToDoList} />
          <Route exact path="/todo/:id" component={TodoItemPage} />
        </Switch>

      </div>
      <Popup />
      <NewPopup />
      </React.Fragment>
    );
  }
}



export default App;

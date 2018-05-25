import React from 'react';
import AddItem from './components/AddItem';
import ToDoList from './components/ToDoList';
import logo from './logo.svg';
import './App.css';
import './Popup.css'
import PropTypes from 'prop-types'
import NewPopup from './components/NewPopup'
import Popup from 'react-popup'
import "bootstrap/dist/css/bootstrap.css";
import { Grid } from "react-bootstrap"
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
        <Grid className="show-grid">
          <AddItem />
          <ToDoList />
        </Grid>
      </div>
      <Popup />
      <NewPopup />
      </React.Fragment>
    );
  }
}



export default App;

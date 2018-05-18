import React from 'react';
import AddItem from './components/AddItem';
import ToDoList from './components/ToDoList';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'

class App extends React.Component {

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </div>
        <div>
          <AddItem />
          <ToDoList />
        </div>

      </div>
    );
  }
}



export default App;

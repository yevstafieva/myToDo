import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'


const store = createStore(rootReducer)
const rootHTML = document.getElementById('root');

ReactDOM.render( <Provider store={store}><App /></Provider>, rootHTML);


axios
  .get("http://localhost:3000/data.json")
  .then (
    function(response){
      const todos=response.data;
      store.dispatch({type:"ADD_TODOS", todos: todos});
    }
  )

registerServiceWorker();

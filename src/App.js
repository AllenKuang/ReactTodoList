import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom'

import './App.css';

import TodoForm from './containers/TodoFormContainer';

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="container">
      <div>
          <h2>Jquery To Do List</h2>
          <p>
              <em>Simple Todo List with adding and filter by diff status.</em>
          </p>
      </div>
      <TodoForm />
      
  </div>
      
      
    );
  }
}

export default App;

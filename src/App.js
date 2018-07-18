import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
class App extends Component {
  render() {
    return (
      <div className="container">
      <div>
          <h2>Jquery To Do List</h2>
          <p>
              <em>Simple Todo List with adding and filter by diff status.</em>
          </p>
      </div>
      <TodoForm/>

  </div>
      
      
    );
  }
}

export default App;

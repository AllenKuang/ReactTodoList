import React, { Component } from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import './App.css';
import TodoForm from './containers/TodoFormContainer';

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <BrowserRouter>
      <div className="container">
      <div>
          <h2>Jquery To Do List</h2>
          <p>
              <em>Simple Todo List with adding and filter by diff status.</em>
          </p>
      </div>
      {/* <TodoForm /> */}
      <Route exact path='/' component={TodoForm}/>
      <Route path="/:routestatus" component={TodoForm}/>
  </div>
  </BrowserRouter>
      
    );
  }
}

export default App;

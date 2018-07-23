import React, { Component } from 'react';
import Todo from '../model/Todo';
import {BrowserRouter,Route,Link} from 'react-router-dom'
export default class TodoForm extends Component {
    constructor(props) {
        super(props);
         this.inputtext=React.createRef();
    }
    componentDidMount(){
        this.props.init(this.props.routeFilter)
    }
    generateUUID = () => {
        /*jshint bitwise:false */
        var i,
            random;
        var uuid = '';

        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }
            uuid += (i === 12
                ? 4
                : (i === 16
                    ? (random & 3 | 8)
                    : random)).toString(16);
        }
        return uuid;
    }

    add=()=>{
        const toAdd=this.inputtext.current.value;
        const addTodo=this.props.addTodo;
        addTodo(new Todo(parseFloat(this.generateUUID()),toAdd),this.props.statusOfList)
        this.inputtext.current.value="";
    }

    changeToEditable(e) {
        e.target.setAttribute("contentEditable", true);
      }
    updateItem(e,viewId,statusOfList) {
        if (e.keyCode === 13) {
            e.target.setAttribute("contentEditable", false);
          this.props.updateItemContent(viewId, e.target.innerText,statusOfList);
        }
      }
     
    render() {
        
        const{todos,statusOfList,checkItem,showTodoList}=this.props;
        //let toAdd = this.inputtext.current.value; 还没渲染就想取得inputtext，不存在的
        return (
            <div>
                <h1>TodoList</h1>
                <div>
                    <input ref={this.inputtext} className="input-text" type="text" name="ListItem" />
                    <div id="button" onClick={this.add}>Add</div>
                </div>
                <br />
                <ol>
                {/* {this.filterByStatus(todos,statusOfList).map(todo => { */}
                    {todos.map(todo => {
                        return <li id={todo.id} className={todo.status===Todo.COMPLETED ? 'checked' : ''}>
                            <input name="done-todo"
                                //defaultChecked={todo.status===Todo.COMPLETED} 
                                checked={todo.status===Todo.COMPLETED}
                                //defaultChecked={true} 
                                onChange={() => checkItem(todo.id, statusOfList,todo)} 
                                type="checkbox" className="done-todo" /> 
                            <span onDoubleClick={e => this.changeToEditable(e)} 
                                  onKeyDown={e =>this.updateItem(e,todo.id,statusOfList)}>
                                 {todo.content}
                            </span>
                        </li>      
                    })}
                </ol>
                <div>
                    <ul id="filters">
                        <li>
                            <Link to='/' data-filter="all" className={statusOfList === "all" ? "selected" : ""}
                                onClick={(event)=>showTodoList(event)}>ALL</Link>
                        </li>
                        <li>
                            <Link to='/active' data-filter="active" className={statusOfList === "active" ? "selected" : ""}
                                onClick={(event)=>showTodoList(event)}>Active</Link>
                        </li>
                        <li>
                            <Link to='/completed' data-filter="completed" className={statusOfList === "completed" ? "selected" : ""}
                                onClick={(event)=>showTodoList(event)}>Complete</Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
         
            
        )
    }

}
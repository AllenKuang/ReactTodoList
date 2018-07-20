import React, { Component } from 'react';
import Todo from '../model/Todo';
export default class TodoForm extends Component {
    constructor(props) {
        super(props);
         //this.toAdd = this.refs.inputtext.value;
         this.inputtext=React.createRef();
    }
    filterByStatus=(todos, status)=> {
        const filterExecuters = {
            all() {
                return true;
            },
            active(element) {
                return !element.complete;
            },
            complete(element) {
                return element.complete;
            }
        }
        const result = todos.filter(filterExecuters[status]);
        return result;
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
        const item={ id: this.generateUUID(), text:toAdd,complete: false }
        const addTodo=this.props.addTodo;
        addTodo(item)
        this.inputtext.current.value="";
    }
    render() {
        const{todos,status,checkItem,showTodoList}=this.props;
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
                {this.filterByStatus(todos,status).map(todo => {
                        return <li 
                        contentEditable={true} 
                        id={todo.id} 
                        className={todo.complete ? 'checked' : ''}>
                        <input name="done-todo"
                        defaultChecked={todo.complete} 
                        //defaultChecked={true} 
                        onChange={(e) => checkItem(todo.id, e)} 
                        type="checkbox" className="done-todo" /> {todo.text} </li>
                    })}
                </ol>
                <div>
                    <ul id="filters">
                        <li>
                            <a href="#" data-filter="all" className={status === "all" ? "selected" : ""}
                                onClick={()=>showTodoList('all')}>ALL</a>
                        </li>
                        <li>
                            <a href="#" data-filter="active" className={status === "active" ? "selected" : ""}
                                onClick={()=>showTodoList('active')}>Active</a>
                        </li>
                        <li>
                            <a href="#" data-filter="complete" className={status === "complete" ? "selected" : ""}
                                onClick={()=>showTodoList('complete')}>Complete</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}
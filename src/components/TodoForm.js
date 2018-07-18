import React, { Component } from 'react';

export default class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [{ id: "zuixian", name: "默认第一任务", complete: false }, { name: "示例", complete: false }],
            statusOfList: "all",
            activeItems:[],
            completeItems:[]
        }
    }

    addItem = () => {
        let toAdd = this.refs.inputtext.value;
        let todos = this.state.todos;
        todos.push({ id: this.generateUUID(), name: toAdd, complete: false });
        this.setState({ todos });
    }
    checkItem = (viewId, event) => {
        this.state.todos.find(item => item.id === viewId).complete = event.target.checked;
        this.setState({ todos: this.state.todos });
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

    showTodoList=(filterType) => {
        //this.state.statusOfList = filterType;
        this.setState({statusOfList:filterType});
    }
    // showTodoList=(which)=>{
    //     let todos=this.state.todos;
    //     if(which==='all'){
    //         this.setState({todos});
    //     }
    //     if(which==='active'){
    //         for(let i=0;i<todos.length;i++){
    //             if(todos[i].complete===false){
    //                 this.state.activeItems.push(todos[i]);
    //             }
    //         }
    //         let activetodo=this.state.activeItems;
    //         this.setState({todos:activetodo})
    //     }
    //     if(which==='complete'){
    //         for(let i=0;i<todos.length;i++){
    //             if(todos[i].complete===true){
    //                 this.state.completeItems.push(todos[i]);
    //             }
    //         }
    //         let completeItems=this.state.completeItems;
    //         this.setState({todos:completeItems})
    //     }
    // }


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
    render() {
        let todos = this.state.todos;
        let status=this.state.statusOfList;
        return (
            <div>
                <h1>TodoList</h1>
                <div>
                    <input ref="inputtext" className="input-text" type="text" name="ListItem" />
                    <div id="button" onClick={this.addItem}>Add</div>
                </div>
                <br />
                {/* 做列表 */}
                <ol>
                {this.filterByStatus(todos,status).map(todo => {
                        return <li contentEditable={true} id={todo.id} className={todo.complete ? 'checked' : ''}><input name="done-todo" onChange={(e) => this.checkItem(todo.id, e)} type="checkbox" className="done-todo" /> {todo.name} </li>
                    })}
                    {/* {todos.map(todo => {
                        return <li contentEditable={true} id={todo.id} className={todo.complete ? 'checked' : ''}><input name="done-todo" onChange={(e) => this.checkItem(todo.id, e)} type="checkbox" className="done-todo" /> {todo.name} </li>
                    })} */}
                </ol>
                <div>
                    <ul id="filters">
                        <li>
                            <a href="#" data-filter="all" className={todos.statusOfList === "all" ? "selected" : ""}
                                onClick={()=>this.showTodoList('all')}>ALL</a>
                        </li>
                        <li>
                            <a href="#" data-filter="active" className={todos.statusOfList === "active" ? "selected" : ""}
                                onClick={()=>this.showTodoList('active')}>Active</a>
                        </li>
                        <li>
                            <a href="#" data-filter="complete" className={todos.statusOfList === "complete" ? "selected" : ""}
                                onClick={()=>this.showTodoList('complete')}>Complete</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}
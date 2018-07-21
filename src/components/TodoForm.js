import React, { Component } from 'react';
import Todo from '../model/Todo';
export default class TodoForm extends Component {
    constructor(props) {
        super(props);
         //this.toAdd = this.refs.inputtext.value;
         this.inputtext=React.createRef();
         this.state = {
            inputstatus: 'read'
          };
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
        //const item={ id: this.generateUUID(), content:toAdd,status: Todo.ACTIVE }
        const addTodo=this.props.addTodo;
        // console.log("add-------todo"+JSON.stringify(item));
        //addTodo(item)
        addTodo(new Todo(this.generateUUID(),toAdd))
        this.inputtext.current.value="";
    }

    changeToEditable() {
        this.setState({ inputstatus: 'write' });
      }

    updateItem(e, viewId, content,todos) {
        if (e.keyCode === 13) {
          this.props.updateItemContent(viewId, content);
          // console.log(this.props.item);
          this.setState({ inputstatus: 'read' });
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
                        return <li id={todo.viewId} className={todo.status===Todo.COMPLETED ? 'checked' : ''}>
                            <input name="done-todo"
                                defaultChecked={todo.status===Todo.COMPLETED} 
                                //defaultChecked={true} 
                                onChange={() => checkItem(todo.viewId, statusOfList)} 
                                type="checkbox" className="done-todo" /> 
                            <span onDoubleClick={e => this.changeToEditable(e)}>
                                {this.state.inputstatus==='read'?(
                                    todo.content):(
                                        <input
                                            autoFocus
                                            className="edit-input"
                                            defaultValue={todo.content}
                                            onKeyUp={e =>
                                                this.updateItem(e, todo.viewId, e.currentTarget.value,todos)
                                            }
                                            />
                                    )
                                
                            }
                            </span>
                        </li>      
                    })}
                </ol>
                <div>
                    <ul id="filters">
                        <li>
                            <a href="#" data-filter="all" className={statusOfList === "all" ? "selected" : ""}
                                onClick={(event)=>showTodoList(event)}>ALL</a>
                        </li>
                        <li>
                            <a href="#" data-filter="active" className={statusOfList === "active" ? "selected" : ""}
                                onClick={(event)=>showTodoList(event)}>Active</a>
                        </li>
                        <li>
                            <a href="#" data-filter="completed" className={statusOfList === "completed" ? "selected" : ""}
                                onClick={(event)=>showTodoList(event)}>Complete</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}
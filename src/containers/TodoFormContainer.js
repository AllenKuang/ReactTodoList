import {connect} from 'react-redux'
import TodoForm from "../components/TodoForm";
import {addTodo,checkItem,showTodoList,updateItemContent} from "../actions";
import Todo from '../model/Todo';
import todosRemoteAPI from '../api/TodoResourceRemoteAPI';
const mapStateToProps=(state,ownProps)=>{
    return {
        todos:state.list,
        statusOfList:state.statusOfList 
    }
}
const mapDispatchToProps=(dispatch)=>({
    addTodo:(item,statusOfList) =>{ 
        todosRemoteAPI.add(item,function(todos){
            todosRemoteAPI.get(function(todos){
                dispatch(addTodo(todos))
            })
        })  
    },
    checkItem:(id,statusOfList,todo)=>{
        let newStatus=todo.status===Todo.ACTIVE ? Todo.COMPLETED : Todo.ACTIVE;
        todosRemoteAPI.toggleActive(id,newStatus)
        todosRemoteAPI.get(todos=>{
            dispatch(checkItem(todos))
        })
    },
    showTodoList:(event) =>{
        let statusOfList = event.target.attributes.getNamedItem('data-filter')
        .value;
        todosRemoteAPI.filerByStatus(statusOfList,todos=>{
            dispatch(showTodoList(statusOfList, todos))
        })  
    },
    updateItemContent:(viewId, content,statusOfList)=>{
        todosRemoteAPI.updateItemContent(viewId,content)
        todosRemoteAPI.get(todos=>{
            dispatch(updateItemContent(todos))
        })
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)
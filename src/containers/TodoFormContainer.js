import {connect} from 'react-redux'
import TodoForm from "../components/TodoForm";
import {addTodo,checkItem,showTodoList,updateItemContent,init} from "../actions";
import Todo from '../model/Todo';
import todosRemoteAPI from '../api/TodoResourceRemoteAPI';
// const isFiltered=(todo,status)=>{
//     if(status===undefined)return true
//     return todo.status;
// }
const mapStateToProps=(state,ownProps)=>{
    let {match:{params:{routestatus}}}=ownProps
    if(routestatus===undefined){
        routestatus='all'
    }
    return {
        todos:state.list,
        statusOfList:state.statusOfList,
        routeFilter:routestatus
    }
}
const mapDispatchToProps=(dispatch)=>({
    init:(routeStatus)=>{
        todosRemoteAPI.init(init,dispatch,routeStatus)
    },
    addTodo:(item,statusOfList) =>{ 
        todosRemoteAPI.add(item,addTodo,statusOfList,dispatch)
        //todosRemoteAPI.getfiler(addTodo,statusOfList,dispatch)
    },
    checkItem:(id,statusOfList,todo)=>{
        let newStatus=todo.status===Todo.ACTIVE ? Todo.COMPLETED : Todo.ACTIVE;
        todosRemoteAPI.toggleActive(id,newStatus,checkItem,statusOfList,dispatch)
        //todosRemoteAPI.getfiler(checkItem,statusOfList,dispatch)
    },
    showTodoList:(event) =>{
        let statusOfList = event.target.attributes.getNamedItem('data-filter')
        .value;
        todosRemoteAPI.filerByStatus(statusOfList,dispatch)
        // todosRemoteAPI.getfiler(showTodoList,statusOfList,dispatch) 
    },
    updateItemContent:(viewId, content,statusOfList)=>{
        todosRemoteAPI.updateItemContent(viewId,content,updateItemContent,statusOfList,dispatch)
        //todosRemoteAPI.getfiler(updateItemContent,statusOfList,dispatch)
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)
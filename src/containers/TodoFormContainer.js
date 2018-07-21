import {connect} from 'react-redux'
import TodoForm from "../components/TodoForm";
import {addTodo,checkItem,showTodoList,updateItemContent} from "../actions";
import Todo from '../model/Todo';
import todosAPI from '../api/TodoResourseAPI';
const mapStateToProps=(state,ownProps)=>{
    return {
        todos:state.list,
        statusOfList:state.statusOfList 
    }
}
const mapDispatchToProps=(dispatch)=>({
    addTodo:(item) =>{ 
        const todos=todosAPI.add(item)
        //console.log(todosAPI.filerByStatus())
        dispatch(addTodo(item,todos))
    },
    checkItem:(id,statusOfList)=>{
        todosAPI.toggleActive(id)
        let list=todosAPI.filerByStatus(statusOfList);
        console.log(list)
        dispatch(checkItem(list))
    },
    showTodoList:(event) =>{
        let filterType = event.target.attributes.getNamedItem('data-filter')
        .value;
        let list=todosAPI.filerByStatus(filterType);
        //console.log(list)
        dispatch(showTodoList(filterType, list))
    },
    updateItemContent:(viewId, content)=>{
        todosAPI.updateItemContent(viewId,content)
        console.log(todosAPI)
        dispatch(updateItemContent(viewId, content))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)
import {connect} from 'react-redux'
import TodoForm from "../components/TodoForm";
import {addTodo,checkItem,showTodoList,updateItemContent} from "../actions";

import todosAPI from '../api/TodoResourseAPI';
const mapStateToProps=(state,ownProps)=>{
    return {
        todos:state.list,
        status:state.status
    }
}
const mapDispatchToProps=(dispatch)=>({
    addTodo:(item) =>{ 
        todosAPI.add(item)
        //console.log(todosAPI)
        dispatch(addTodo(item))
    },
    checkItem:(id,eve)=>{
        todosAPI.toggleActive(id)
        //console.log(todosAPI)
        dispatch(checkItem(id,eve))
    },
    showTodoList:(filterType) =>{
        dispatch(showTodoList(filterType))
    },
    updateItemContent:(viewId, content)=>{
        todosAPI.updateItemContent(viewId,content)
        console.log(todosAPI)
        dispatch(updateItemContent(viewId, content))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)
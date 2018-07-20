import {connect} from 'react-redux'
import TodoForm from "../components/TodoForm";
import {addTodo,checkItem,showTodoList} from "../actions";

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
        //const todo=todosAPI.filerByStatus(filterType)
        dispatch(showTodoList(filterType))
        //dispatch(showTodoList(todo.status))
    }
    // return {
    //     addTodo:(item) => dispatch(addTodo(item)),
    //     checkItem:(id,eve) => dispatch(checkItem(id,eve)),
    //     showTodoList:(filterType) => dispatch(showTodoList(filterType))
    // }
})
export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)
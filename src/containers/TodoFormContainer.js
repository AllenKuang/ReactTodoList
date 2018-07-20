import {connect} from 'react-redux'
import TodoForm from "../components/TodoForm";
import {addTodo,checkItem,showTodoList} from "../actions";

const mapStateToProps=(state,ownProps)=>{
    return {
        todos:state.list,
        status:state.status
    }
}

const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        addTodo:(item) => dispatch(addTodo(item)),
        checkItem:(id,eve) => dispatch(checkItem(id,eve)),
        showTodoList:(filterType) => dispatch(showTodoList(filterType))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)
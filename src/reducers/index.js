import Todo from '../model/Todo'
import todosAPI from '../api/TodoResourseAPI';
export default (state = { list:[],statusOfList: Todo.ALL}, action) => {
    switch (action.type) {
        case 'ADD_TODO':{
            //const newState = [...state.list,action.item]
            const newState = [...action.todos]
            return { list: newState, statusOfList: state.statusOfList }
        }
        case 'CHECK_ITEM':
        {
            const newState = [...action.list]
            //newState.find(item => item.viewId === action.id).status =newState.find(item => item.viewId === action.id).status=== Todo.ACTIVE ? Todo.COMPLETED : Todo.ACTIVE;
            console.log(newState)
            return { list: newState, statusOfList: state.statusOfList }
        }
        case 'SHOW_TODOLIST':
        {
            return { list: action.list, statusOfList: action.filter }
        }
        case 'UPDATE_ItemContent':
        {
            const newState = [...state.list]
            let todo = newState.find(item => item.id === action.viewId);
            if (todo !== undefined) {
            todo.text = action.content;
            }
            return { list: newState, status: state.status }
        }
        default:
            return state
    }
}
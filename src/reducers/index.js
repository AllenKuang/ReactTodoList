import Todo from '../model/Todo'
import todosAPI from '../api/TodoResourseAPI';
export default (state = { list: todosAPI.filerByStatus(Todo.ALL), status: todosAPI.status }, action) => {
    switch (action.type) {
        case 'ADD_TODO':{
            const newState = [...state.list,action.item]
            //newState.push(action.item)
            //todosAPI.add(action.item)
            //console.log(todosAPI.filerByStatus(Todo.ALL))
            return { list: newState, status: state.status }
            //return { list:todosAPI.filerByStatus(Todo.ALL), status: state.status }
        }
        // state.list.push(action.item)
        // return state
        //return state={list:[{id:"1",text:"第er个任务",complete:false}],status:'all'}
        case 'CHECK_ITEM':
        {
            const newState = [...state.list]
            newState.find(item => item.id === action.id).complete = action.eve.target.checked;
            //todosAPI.toggleActive(action.id)
            //console.log(todosAPI.toggleActive(action.id))
            //console.log(todosAPI.filerByStatus(Todo.ALL))
            console.log(state.status)
            return { list: newState, status: state.status }
        }
        case 'SHOW_TODOLIST':
        {
            const newState = [...state.list]
            return { list: newState, status: action.filterType }
        }
        default:
            return state
    }
}
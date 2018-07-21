import Todo from '../model/Todo'
import todosAPI from '../api/TodoResourseAPI';
export default (state = { list:[{ id: "1", text: "第一个任务", complete: false } ], status: todosAPI.status }, action) => {
    switch (action.type) {
        case 'ADD_TODO':{
            const newState = [...state.list,action.item]
            //const newState = [...state.list]
            //const newState=state.list
            //console.log(newState)
            //newState.push(action.item)
            //console.log(newState)
            return { list: newState, status: state.status }
        }
        case 'CHECK_ITEM':
        {
            const newState = [...state.list]
            console.log(action.eve.target.checked)
            newState.find(item => item.id === action.id).complete = action.eve.target.checked;
            return { list: newState, status: state.status }
        }
        case 'SHOW_TODOLIST':
        {
            const newState = [...state.list]
            return { list: newState, status: action.filterType }
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
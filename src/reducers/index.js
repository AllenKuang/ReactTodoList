import Todo from '../model/Todo'
export default (state = { list:[],statusOfList: Todo.ALL}, action) => {
    switch (action.type) {
        case 'ADD_TODO':{
            const newState=[...action.todos]
            return { list: newState, statusOfList: state.statusOfList }
        }
        case 'CHECK_ITEM':
        {
            const newState = [...action.list]
            return { list: newState,statusOfList: state.statusOfList}
        }
        case 'SHOW_TODOLIST':
        {
            return { list: action.list, statusOfList: action.filter }
        }
        case 'UPDATE_ItemContent':
        {
            const newState = [...action.list]
            return { list: newState, statusOfList: state.statusOfList }
        }
        case 'INIT':
        {
            const newState=[...action.list]
            return {list: newState, statusOfList: state.statusOfList }
        }
        default:
            return state
    }
}
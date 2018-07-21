import Todo from '../model/Todo'
import todosAPI from '../api/TodoResourseAPI';
export default (state = { list:[{ id: "1", text: "第一个任务", status: Todo.ACTIVE } ],statusOfList: Todo.ALL}, action) => {
    switch (action.type) {
        case 'ADD_TODO':{
            const newState = [...state.list,action.item]
            //const newState = [...state.list]
            //const newState=state.list
            //console.log(newState)
            //newState.push(action.item)
            //console.log(newState)
            return { list: newState, statusOfList: state.statusOfList }
        }
        case 'CHECK_ITEM':
        {
            const newState = [...state.list]
            newState.find(item => item.id === action.id).status =newState.find(item => item.id === action.id).status=== Todo.ACTIVE ? Todo.COMPLETED : Todo.ACTIVE;
            return { list: newState, statusOfList: state.statusOfList }
        }
        case 'SHOW_TODOLIST':
        {
            const statusOfList = action.event.target.attributes.getNamedItem('data-filter')
      .value;
            const newState = [...state.list]
            return { list: newState, statusOfList: statusOfList }
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
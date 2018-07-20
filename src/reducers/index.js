export default (state = { list: [{ id: "1", text: "第一个任务", complete: false }], status: 'all' }, action) => {
    switch (action.type) {
        case 'ADD_TODO':{
            const newState = [...state.list]
            newState.push(action.item)
            return { list: newState, status: state.status }
        }
        // state.list.push(action.item)
        // return state
        //return state={list:[{id:"1",text:"第er个任务",complete:false}],status:'all'}
        case 'CHECK_ITEM':
        {
            const newState = [...state.list]
            newState.find(item => item.id === action.id).complete = action.eve.target.checked;
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
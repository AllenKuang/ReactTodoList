export  const  addTodo=(todos)=>{return { type: 'ADD_TODO',todos}}
export  const  checkItem=(list)=>{return { type: 'CHECK_ITEM',list}}
export  const  showTodoList=(filter, list)=>{return { type: 'SHOW_TODOLIST',filter, list}}
export  const  updateItemContent=(list)=>{return { type: 'UPDATE_ItemContent',list}}
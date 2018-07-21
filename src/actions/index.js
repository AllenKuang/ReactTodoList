export  const  addTodo=(item,todos)=>{return { type: 'ADD_TODO',item,todos}}
export  const  checkItem=(list)=>{return { type: 'CHECK_ITEM',list}}
export  const  showTodoList=(filter, list)=>{return { type: 'SHOW_TODOLIST',filter, list}}
export  const  updateItemContent=(viewId,content)=>{return { type: 'UPDATE_ItemContent',viewId,content}}
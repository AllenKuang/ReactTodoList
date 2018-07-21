export  const  addTodo=(item)=>{return { type: 'ADD_TODO',item}}
export  const  checkItem=(id,eve)=>{return { type: 'CHECK_ITEM',id,eve}}
export  const  showTodoList=(filterType)=>{return { type: 'SHOW_TODOLIST',filterType}}
export  const  updateItemContent=(viewId,content)=>{return { type: 'UPDATE_ItemContent',viewId,content}}
export  const  addTodo=(item)=>{return { type: 'ADD_TODO',item}}
export  const  checkItem=(id,eve)=>{return { type: 'CHECK_ITEM',id,eve}}
export  const  showTodoList=(event)=>{return { type: 'SHOW_TODOLIST',event}}
export  const  updateItemContent=(viewId,content)=>{return { type: 'UPDATE_ItemContent',viewId,content}}
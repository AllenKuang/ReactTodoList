import Todo from '../model/Todo';
const axios=require('axios')
const todosRemoteAPI = {
    //todos: [],
    //apiUrl:'https://5b52c0d5d9b92700141c9977.mockapi.io/todolist',
    apiUrl:'http://localhost:8080/api/todos',
    get(success){
        axios.get(this.apiUrl)
        .then(function (response) {
          // handle success
          //console.log(response);
          success(response.data._embedded.todos) 
        })
        .catch(function(error){
            console.log(error)
        })
    },
    add(item,successCallBack) {
        axios
        .post(this.apiUrl,{
            id:'',
            content:item.content,
            status:item.status
        })
        .then(function(response){
            //console.log(response.data)
            successCallBack(
                //new Todo(
                    {
                    viewId:response.data.id,
                    content:response.data.content,
                    status:response.data.status
                    }
                //)
            )
        })
        .catch(function(error){
            console.log(error)
        })
      },
      filerByStatus(status,success) {
        let search=status;
        if(status==='all'){
            search='completed,active'
        }
        axios.get(`${this.apiUrl}/search/statusOfTodos?status=${search}`)
            .then(function (response) {
            success(response.data._embedded.todos) 
            })
            .catch(function(error){
                console.log(error)
            })
      },
      toggleActive(viewId,newStatus) {
          console.log(`${this.apiUrl}/${viewId}`)
        axios
        .patch(`${this.apiUrl}/${viewId}`,{
            status:newStatus
        })
        .then(response=>{
            console.log('toggle')
        })
        .catch(error=>{
            console.log(error)
        })  
      },
      updateItemContent(viewId, content) {
        axios
        .patch(`${this.apiUrl}/${viewId}`,{
            content:content
        })
        .then(response=>{
            console.log('updatContent')
        })
        .catch(error=>{
            console.log(error)
        }) 
      }
}
export default todosRemoteAPI;
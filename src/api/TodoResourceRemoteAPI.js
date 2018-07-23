import Todo from '../model/Todo';
import { addTodo, checkItem, showTodoList, updateItemContent } from "../actions";
const axios = require('axios')
const todosRemoteAPI = {
    //todos: [],
    //apiUrl:'https://5b52c0d5d9b92700141c9977.mockapi.io/todolist',
    apiUrl: 'http://localhost:8080/api/todos',
    init(init,dispatch,routeStatus){
        let search = routeStatus;
        if (routeStatus === 'all') {
            search = 'completed,active'
        }
        axios.get(`${this.apiUrl}/search/statusOfTodos?status=${search}`)
        .then( (response)=> { 
            dispatch(init(response.data._embedded.todos))
        })
        .catch(function(error){
            console.log(error)
        })
    },
    add(item,addTodo,statusOfList,dispatch) {
        axios
            .post(this.apiUrl, {
                id: '',
                content: item.content,
                status: item.status
            })
            .then(response => {
                this.getfiler(addTodo, statusOfList, dispatch)
            })
            .catch(function (error) {
                console.log(error)
            })
    },
    getfiler(operation, statusOfList, dispatch) {
        let search = statusOfList;
        if (statusOfList === 'all') {
            search = 'completed,active'
        }
        axios.get(`${this.apiUrl}/search/statusOfTodos?status=${search}`)
            .then(function (response) {
                dispatch(operation(response.data._embedded.todos))
            })
            .catch(function (error) {
                console.log(error)
            })
    },
    filerByStatus(statusOfList, dispatch) {
        let search = statusOfList;
        if (statusOfList === 'all') {
            search = 'completed,active'
        }
        axios.get(`${this.apiUrl}/search/statusOfTodos?status=${search}`)
            .then(function (response) {
                dispatch(showTodoList(statusOfList, response.data._embedded.todos))
            })
            .catch(function (error) {
                console.log(error)
            })
    },
    filerByStatus(statusOfList, dispatch) {
        let search = statusOfList;
        if (statusOfList === 'all') {
            search = 'completed,active'
        }
        axios.get(`${this.apiUrl}/search/statusOfTodos?status=${search}`)
            .then(function (response) {
                dispatch(showTodoList(statusOfList, response.data._embedded.todos))
            })
            .catch(function (error) {
                console.log(error)
            })
    },
    toggleActive(viewId, newStatus,checkItem,statusOfList,dispatch) {
        console.log(`${this.apiUrl}/${viewId}`)
        axios
            .patch(`${this.apiUrl}/${viewId}`, {
                status: newStatus
            })
            .then(response => {
                this.getfiler(checkItem,statusOfList,dispatch)
                console.log('toggle')
            })
            .catch(error => {
                console.log(error)
            })
    },
    updateItemContent(viewId, content,updateItemContent,statusOfList,dispatch) {
        axios
            .patch(`${this.apiUrl}/${viewId}`, {
                content: content
            })
            .then(response => {
                this.getfiler(updateItemContent,statusOfList,dispatch)
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
}
export default todosRemoteAPI;
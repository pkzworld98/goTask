import React from 'react'
import { useDispatch } from 'react-redux'
import { all, call, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { addTodo, deleteAll, deleteTodo, deleteTodoSaga, saveTodos, updateTodo } from '../actions'
import { ADD_TASK_TODO, ADD_TODO, ADD_TO_DO_SAGA, DELETE_COMPLETED_TASK, DELETE_TODO, DELETE_TO_DO_SAGA, FETCH_DATA, TASK_COMPLETED, UPDATE_TODO, UPDATE_TO_DO_SAGA } from '../actions/types'
import firebase from "../firebase"
import todos from '../reducers/todos'
import store from "../store"



////ADD THE TASK]




function addTaskSaga(message){

    return firebase.database().ref("/").child(`${message.id}`).set({
                ...message
                }).then((r)=>{
                    return{r}
                }).catch((e)=>{
                    return {e}
                })
}


function* addTask({message}){
    console.log(message)
 


try{
  const  {r,e} = yield call(addTaskSaga,message)
  if(!e){
      yield put(addTodo(message))
  }




}
catch(e){
    console.log(e)

}  

}


///DETLETE TASK API

function deleteTaskapi(id){
    console.log(id,"aya")

    return  firebase.database().ref("/").child(`${id}`).remove()
    .then((r)=>{
       return {r}
    }).catch((e)=>{
        return {e}
    })
    
    }
   
    

//DELETE TASK

function* deleteTask({id}){

    
     const { r ,e} = yield call(deleteTaskapi,id)
     if(e){

     }
     else{
         yield put( deleteTodoSaga(id))
     }
     

}

//UPDATE TASK


function updateTaskApi({message,id,completed}){

    return firebase.database().ref("/").child(`${id}`).update({
            task:message,

        }).then((r)=>{
            return {r}
        }).catch((e)=>{
            console.log(e,"yei hai errror")
            return {e}
        })
}


function* updateTask({type,message,id,completed}){
    console.log(message,"aayaa to")
      try{
        const {r,e} =yield call(updateTaskApi,{message,id,completed})
        if(!e){
            yield put(updateTodo({message,id,completed}))
        }
             

      }
      catch(e){
console.log(e)
      }
}


//MARK COMPLETED TASK

function* markcompletedTask({type,id,index,toogle}){

    try{
        yield call(
            firebase.database().ref("/").child(`${id}`).update({
            completed:toogle?false:true
        },(error)=>{
            if (error){
            console.log("File is not updated")
        }
        }))
    }
    catch(e){

    }
}




//DELETE COMPLETED TASK API

function deleteTaskAllCompletedApi(){
    return firebase.database().ref("/").get().then((response)=>{
let todosid=[]
      if(response.exists()){
      
        response.forEach((e)=>{
               
          if(e.val().completed===true){
              todosid.push(e.val().id)
          }
    
      })
    }
    return {todosid}
}).catch((e)=>{
          return{e}
      })
   

    

    

}

///DELETE COMPLETED TASK


function* deleteCompletedTask(){

    try{
        
           const {todosid,e}=yield call(deleteTaskAllCompletedApi)
     

       
           if(todosid){
               yield all( todosid.map(id => deleteTask({id})))
 
            //  yield all(todosid.map((e)=>call(deleteTaskapi,e)))
                    
  
     

        

           }}


    catch(e){
        console.log(e)

    }
}

///FETCHING DATA FROM FIREBASE AFTER RELOADING


function fetchTodosApi() {
  return firebase
    .database()
    .ref('/')
    .get()
    .then((response) => {
      let todos = []
      if (response.exists()) {
        response.forEach((e) => {
          const todo = {
            task: e.val().task,
            id: e.val().id,
            completed: e.val().completed,
          }
          todos.push(todo)
        })
      }
       console.log(todos);
      return { todos }
    })
    .catch((error) => ({ error }))
   
}

function* fetchdata() {
  const { todos, error } = yield call(fetchTodosApi)
     
  if (todos) {
       console.log(todos)
    yield put(saveTodos(todos))
  } else {
    console.log('error', error)
  }
} 


   

export default function* todosaga(){
    yield takeLatest(ADD_TO_DO_SAGA,addTask)
    // yield takeLatest(DELETE_TODO,deleteTask)
    yield  takeLatest(TASK_COMPLETED,markcompletedTask)
    yield takeLatest(UPDATE_TO_DO_SAGA,updateTask)
    yield takeLatest(DELETE_TO_DO_SAGA,deleteTask)
    yield takeLatest(DELETE_COMPLETED_TASK,deleteCompletedTask)
    yield takeLatest(FETCH_DATA,fetchdata)
 
    
}
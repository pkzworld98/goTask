import { ADD_TODO, DELETE_TODO, UPDATE_TODO,TASK_COMPLETED,DELETE_COMPLETED_TASK, SHOW_COMPLETED_TASK, SHOW_ALL, SHOW_UNCOMPLETED_TASK } from "./types";

export const addTodo = (message) => (

{
  type: ADD_TODO,
  message,
  
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

export const updateTodo = ({ message, id }) => ({
  type: UPDATE_TODO,
  message,
  id,
});


export const taskCompleted=(index,toogle)=>({
  type:TASK_COMPLETED,
  index,
  toogle
})

export const deletecompleted=()=>({
  type:DELETE_COMPLETED_TASK,
})

export const showcompletedtask=()=>({
  type:SHOW_COMPLETED_TASK
})


export const showall=()=>({
  type:SHOW_ALL
})

export const showuncompletedtask=()=>({
  type:SHOW_UNCOMPLETED_TASK
})
import { ADD_TODO, DELETE_TODO, UPDATE_TODO,TASK_COMPLETED,DELETE_COMPLETED_TASK, SHOW_COMPLETED_TASK, SHOW_ALL, SHOW_UNCOMPLETED_TASK, STOP_SHOW_TOAST, FETCH_DATA, ADD_TASK_TODO, SAVE_TODOS, DELETE_TO_DO_SAGA, ADD_TO_DO_SAGA, UPDATE_TO_DO_SAGA } from "./types";
import firebase from "../firebase"
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import { useState } from "react";







// MATERIAL UI SNAPCKBAR

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// const [open, setOpen] = useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    // setOpen(false);
  };



  //ADD THE TASK



export const addTodoSaga=(message)=>{
  return{
    type:ADD_TO_DO_SAGA,
    message
  }
}

export const addTodo = (message) => {
  return {
 type:ADD_TODO,
            message,
}
}



export const saveTodos=(todos)=>{
  console.log(todos)

  return{
    type:SAVE_TODOS,
    todos

  }


}

    // return async (dispatch)=>{
    // //
      // console.log(message)
      //  await firebase.database().ref("/").child(`${message.id}`).set({
      //      ...message
          

      //   },(error)=>{
      //       if (error){
      //       console.log("File is not saved")
      //   }
      //   else{

         
           
            // return({
         
      //   })
      // }

        // }

        
        
        

        

//DELETE THE TASK


export const deleteTodo=(id)=>{

  
        
        return{
            type:DELETE_TODO,
            id,
        }}


  export const deleteTodoSaga=(id)=>{

    return{
      type:DELETE_TO_DO_SAGA,
      id,
      
    }
  }
        

 export const deleteAll=(todos)=>{
   console.log(todos)

  todos.forEach((e)=>{ 
    console.log(e)

    deleteTodo(e)
  })
 }


//UPDATE THE TASK


export const updateTodoSaga=({message,id,completed})=>{

  return ({
    type:UPDATE_TO_DO_SAGA,
    message,
    id,
    completed
  })
}

export const updateTodo=({message,id,completed})=>{
  console.log("pk aya")

           
            return({
             type: UPDATE_TODO,
             message,
             id,
             completed
        })
            
        // }})

       
        

    }





//TASK COMPLETED OR NOT


export const taskCompleted=(id,index,toogle)=>{
    // return async (dispatch)=>{
        // await firebase.database().ref("/").child(`${id}`).update({
        //     completed:toogle?false:true
        // },(error)=>{
        //     if (error){
        //     console.log("File is not updated")
        // }
        // else{
             return({
             type:TASK_COMPLETED,
             id,
           index,
           toogle

      //   })}
      // }
             })
        
    }




//DELETE ALL COMPLETED TASK



export const deletecompleted=(todos)=>{
  // return async (dispatch)=>{

    // await firebase.database().ref("/").get().then((snapshot)=>{
    //   if(snapshot.exists()){
    //     snapshot.forEach((e)=>{
    //       if(e.val().completed===true){
    //         dispatch(deleteTodo(e.val().id));
    //       }
    //     })
    //   }
    // })




    return({
 type:DELETE_COMPLETED_TASK,
    })
  }




//SHOW ALL COMPLETED TASK


export const showcompletedtask=()=>({
  type:SHOW_COMPLETED_TASK
})



//SHOW ALL THE TASK

export const showall=()=>({
  type:SHOW_ALL
})




//SHOW UNCOMPLETED TASK

export const showuncompletedtask=()=>({
  type:SHOW_UNCOMPLETED_TASK
})



//FETCH DATA FROM FIREBASE AFTER RELOAD

export const fetchfbdata=()=>{
  return{
    type:FETCH_DATA
  }

  //   return async (dispatch)=>{

  //     try{
  //       await   firebase.database().ref("/").get().then((snapshot) => {
  // if (snapshot.exists()) {


  // snapshot.forEach((e)=>{
  //   console.log(e.val());
    
  //   dispatch(updateTodo({message:e.val().task, id:e.val().id, completed:e.val().completed}));
    
  // })

  //     }})}
  //     catch(e){
  //       console.log(e);


  //     }
      
  }


  export const stoptoast=()=>{
    // return async (dispatch)=>{
      return({
        type:STOP_SHOW_TOAST
      })
    }
  
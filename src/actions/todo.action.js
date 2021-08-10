import { ADD_TODO, DELETE_TODO, UPDATE_TODO,TASK_COMPLETED,DELETE_COMPLETED_TASK, SHOW_COMPLETED_TASK, SHOW_ALL, SHOW_UNCOMPLETED_TASK, STOP_SHOW_TOAST } from "./types";
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

export const addTodo = (message,callback) => {

    return async (dispatch)=>{
    //
      console.log(message)
       await firebase.database().ref("/").child(`${message.id}`).set({
           ...message
          

        },(error)=>{
            if (error){
            console.log("File is not saved")
        }
        else{

         
            callback()
           
            dispatch({
            type:ADD_TODO,
            message,
        })
            
        }

        })}}
        
        

        

//DELETE THE TASK


export const deleteTodo=(id)=>{

    return async (dispatch)=>{

        await firebase.database().ref("/").child(`${id}`).remove()
        
        dispatch({
            type:DELETE_TODO,
            id,
        })
        

    }
}


//UPDATE THE TASK


export const updateTodo=({message,id,completed})=>{

    return async (dispatch)=>{

        await firebase.database().ref("/").child(`${id}`).update({
            task:message,

        },(error)=>{
            if (error){
            console.log("File is not updated")
        }
        else{
           
             dispatch({
             type: UPDATE_TODO,
             message,
             id,
             completed
        })
            
        }})

       
        

    }
}




//TASK COMPLETED OR NOT


export const taskCompleted=(id,index,toogle)=>{
    return async (dispatch)=>{
        await firebase.database().ref("/").child(`${id}`).update({
            completed:toogle?false:true
        },(error)=>{
            if (error){
            console.log("File is not updated")
        }
        else{
             dispatch({
             type:TASK_COMPLETED,
           index,
           toogle

        })}}
        )
        
    }
}



//DELETE ALL COMPLETED TASK



export const deletecompleted=()=>{
  return async (dispatch)=>{

    await firebase.database().ref("/").get().then((snapshot)=>{
      if(snapshot.exists()){
        snapshot.forEach((e)=>{
          if(e.val().completed===true){
            dispatch(deleteTodo(e.val().id));
          }
        })
      }
    })


    dispatch({
 type:DELETE_COMPLETED_TASK,
    })
  }
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

    return async (dispatch)=>{

      try{
        await   firebase.database().ref("/").get().then((snapshot) => {
  if (snapshot.exists()) {


  snapshot.forEach((e)=>{
    console.log(e.val());
    
    dispatch(updateTodo({message:e.val().task, id:e.val().id, completed:e.val().completed}));
    
  })

      }})}
      catch(e){
        console.log(e);


      }
      
  }} 


  export const stoptoast=()=>{
    return async (dispatch)=>{
      dispatch({
        type:STOP_SHOW_TOAST
      })
    }
  }
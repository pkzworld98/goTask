import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, addTodoSaga } from "../../actions";
import cuid from "cuid";
import MuiAlert from '@material-ui/lab/Alert';
import "./Addtodo.css"
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import { IconButton } from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Tooltip from '@material-ui/core/Tooltip';

const AddTodo = () => {

  const [tasks, setTasks] = useState("");
  const dispatch = useDispatch();

  




  ///MATERIAL UI COMPONENTS
 function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const [open, setOpen] = React.useState(false);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };



//HANDLE INPUT CHANGES

  function handleInputChange(e) {
    setTasks(e.target.value);
    console.log(tasks);
  }




const showToast = () => {
setOpen(true)
}



  //HANDLE SUBMIT 


  function handleFormSubmit(e) {
    e.preventDefault();

                      
    dispatch(addTodoSaga({ task: tasks, id: cuid(),completed:false},showToast));    

     //DISPATCHING ACTION TO ADD TASK
    e.target.userInput.value = "";
   

  }



  return (
  
    <form className="form" onSubmit={handleFormSubmit}>
      <div className="main-input my-5">
        
         <input
  
        type='text'
        name='userInput'
        placeholder="What needs to be done?"
        onChange={(e) => handleInputChange(e)}
      />

 
      <Tooltip title="Add The Task">                         
         
      <IconButton color="secondary" type="submit">
        <AddCircleOutlineOutlinedIcon/>
        </IconButton>
      </Tooltip>
   
      </div>
      

    </form>
  );
};

export default AddTodo;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../actions";
import cuid from "cuid";
import "./Addtodo.css"
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import { IconButton } from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Tooltip from '@material-ui/core/Tooltip';



const AddTodo = () => {

  const [tasks, setTasks] = useState("");
  const dispatch = useDispatch();
  function handleInputChange(e) {
    setTasks(e.target.value);
    console.log(tasks);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    dispatch(addTodo({ task: tasks, id: cuid(),completed:false }));
    e.target.userInput.value = "";
    console.log(tasks);
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
        </IconButton></Tooltip>

      </div>
      

    </form>
  );
};

export default AddTodo;

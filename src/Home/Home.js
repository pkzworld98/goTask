import React, { useState } from 'react'
import "./home.css"
import img from "../PK.png"
import AddTodo from '../components/AddTodo/AddTodo'
import TodoList from '../components/TodoList/TodoList'
import logo from "../logoo.png"
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AssignmentTwoToneIcon from '@material-ui/icons/AssignmentTwoTone';
import {deletecompleted, showall, showcompletedtask,showuncompletedtask} from "../actions"
import Tooltip from '@material-ui/core/Tooltip';


function Home() {
    
    const dispatch=useDispatch();

 

    const task=useSelector(state=>state.todos.data);
    const notcompleted=task.filter((e)=>e.completed===false).length;
    const del=(e)=>{
       dispatch(deletecompleted());

       
    }
    const showcomplete=()=>{
        dispatch(showcompletedtask())

    }

    const showuncomplete=()=>{
        dispatch(showuncompletedtask())


    }
    const showAll=()=>{
        dispatch(showall())

    }

    

    return (
        <div className="home">
            {/* <h1 id="welcome">
                Welcome to</h1> */}
{/* 
            <img src={img}  style={{height:"150px"}}alt="" /> */}
            <div className="pkc my-5 ">

          

            <div class="card" className="pkcard" style={{width:"36rem"}}>
  <img src={logo} className="card-img-top py-2 my-2" alt="he" style={{width:"600px", height:"180px"}}/>
  <AddTodo/>
                <TodoList  /></div>
           
  <div className="my-5 foot">
        <div style={{fontWeight:"lighter"}}>{`${notcompleted}  More Task To Complete`}</div>
        
  <Tooltip title="Show Completed Task">
        <IconButton >
               <AssignmentTurnedInIcon onClick={showcomplete} />
             </IconButton>
              </Tooltip>

             <Tooltip title="Show Remaining Task">
             <IconButton  color="secondary">
               <AssignmentTwoToneIcon  onClick={showuncomplete}/>
             </IconButton>
               </Tooltip>

               <Tooltip title="Show All Task">

             <IconButton >
                 <VisibilityIcon onClick={showAll}/>
             </IconButton></Tooltip>

             <Tooltip title="Delete All Completed Task">
             <IconButton color="secondary" onClick={del}>
                 <DeleteIcon/>
             </IconButton></Tooltip>

  </div>


            <div className="info ">
                <span id="special">Thanku for visiting my site. My name is Prabhat Kumar.</span>

            </div>
  </div>



        </div>
    )
}

export default Home

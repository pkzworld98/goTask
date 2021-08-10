import React from 'react'
import "./home.css"

import AddTodo from '../components/AddTodo/AddTodo'
import TodoList from '../components/TodoList/TodoList'
import logo from "../logoo.png"
import { useDispatch, useSelector } from 'react-redux'


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




    //MATERIAL UI CODE FOR SNACKBAR ALERT

   




    //DISPATCHING ACTION

    //DELETE COMPLETED TASK
    const del=(e)=>{
       dispatch(deletecompleted());

       
    }

    //SHOW COMPLETED TASK
    const showcomplete=()=>{
        dispatch(showcompletedtask())

    }


    //SHOW UN COMPLETED TASK
    const showuncomplete=()=>{
        dispatch(showuncompletedtask())


    }

    //SHOW ALL TASK
    const showAll=()=>{
        dispatch(showall())

    }

    

    return (
        <div className="home">
    
           
            <div className="pkc my-5 ">
               
          

            <div class="card" className="pkcard" style={{width:"36rem"}}>


                {/*........ lOGO......... */}

  <img src={logo} className="card-img-top py-2 my-2" alt="he" style={{width:"600px", height:"180px"}}/>    
 




   {/*...........................................COMPONENETS ............................................. */}


                 <AddTodo/>
                <TodoList  />
 </div>
           
  <div className="my-5 foot">
        <div style={{fontWeight:"lighter"}}>{`${notcompleted}  More Task To Complete`}</div>




 {/*...................................... Icons....................................... */}
        
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
             </IconButton>
</Tooltip>

<Tooltip title="Delete All Completed Task">
             <IconButton color="secondary" onClick={del}>
                 <DeleteIcon/>
             </IconButton>
</Tooltip>








{/*...................................... COPYRIGHTS OR PS............................................................ */}
  </div>


            <div className="special">
                <span >Hey, Thanku for using our TodoList app. Now go make your own list.</span>

            </div>
  </div>



        </div>
    )
}

export default Home

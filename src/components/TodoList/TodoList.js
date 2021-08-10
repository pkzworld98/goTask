import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";
import "./todolist.css"




const TodoList = () => {
 
  
  const taskobj = useSelector((state) => state.todos.data);             //FETCHING TASK FROM STORE



  const toodler=useSelector((state)=>state.todos.selectedFilter);       //FETCHING TOODLER(SELECTED FILTER)




  const taskItems = taskobj.map((task) => { 
    return <TodoItem task={task} key={task.id} />;                    //MAPPING AND CALLING TODOITEM COMPONENT WITH EACH TASK OBJECT
  });
  


  const completedTask=taskobj.filter((task)=>task.completed!==false);          //FILTERING COMPLETED AND UNCOMPLETED TASK
  const uncompletedTask=taskobj.filter((task)=>task.completed===false);




 
 const completedtaskItems = completedTask.map((task) => {                     //COMPLETED TASK ITEMS MAPPING
    return <TodoItem task={task} key={task.id} />;
  });





  const uncompletedtaskItems = uncompletedTask.map((task) => {           //UNCOMPLETED TASK ITEMS MAPPING
    return <TodoItem task={task} key={task.id} />;
  });


  return <div className="scroll my-3">
    <div class="card" style={{width:"36rem"}}>


      {/* CHANGING TITLE OR HEADER */}
  <div class="card-header" style={{color:"red",fontWeight:"bolder"}}>
    {toodler==="notcompleted"?`Uncompleted Task (${uncompletedTask.length}) `:toodler==="complete"?`Completed Task (${completedtaskItems.length})`:`All Task (${taskItems.length})`}
  </div>
 





 {/* DISPLAYING TASK ACCORDING TO CHOICES */}

 
  {toodler==="notcompleted"?uncompletedtaskItems:toodler==="complete"?completedtaskItems:taskItems}
  
  </div>


 

    </div>;
};

export default TodoList

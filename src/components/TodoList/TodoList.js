import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";
import "./todolist.css"


//material ui- codes



const TodoList = () => {
 
  
  const taskobj = useSelector((state) => state.todos.data);

  const toodler=useSelector((state)=>state.todos.selectedFilter);

  // const toodler=useSelector((state)=>state.toodler.tood);
  const taskItems = taskobj.map((task) => {
    return <TodoItem task={task} key={task.id} />;
  });
  // console.log(toodler)

  const completedTask=taskobj.filter((task)=>task.completed!==false);
  const uncompletedTask=taskobj.filter((task)=>task.completed===false);

  console.log(completedTask)

    const completedtaskItems = completedTask.map((task) => {
    return <TodoItem task={task} key={task.id} />;
  });
  const uncompletedtaskItems = uncompletedTask.map((task) => {
    return <TodoItem task={task} key={task.id} />;
  });
  console.log(taskobj.length);

  return <div className="scroll my-3">
    <div class="card" style={{width:"36rem"}}>
  <div class="card-header" style={{color:"red",fontWeight:"bolder"}}>
    {toodler==="notcompleted"?`Uncompleted Task (${uncompletedTask.length}) `:toodler==="complete"?`Completed Task (${completedtaskItems.length})`:`All Task (${taskItems.length})`}
  </div>
  {/* {taskItems} */}
  {/* {completedtaskItems} */}
  {toodler==="notcompleted"?uncompletedtaskItems:toodler==="complete"?completedtaskItems:taskItems}
  
  </div>


 

    </div>;
};

export default TodoList

import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, deleteTodoSaga, taskCompleted, updateTodo, updateTodoSaga } from "../../actions";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import "./todoitem.css"
import DoneOutlineOutlinedIcon from '@material-ui/icons/DoneOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import lightGreen from '@material-ui/core/colors/lightGreen';

  import Tooltip from '@material-ui/core/Tooltip';

  import MuiAlert from '@material-ui/lab/Alert';

import Snackbar from '@material-ui/core/Snackbar';




const TodoItem = ({ task }) => {

const [checked, setChecked] = React.useState([0]);
const data=useSelector(state=>state.todos.data);                 //FETCHING TASK FROM STORE






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



///////////////////////////////////////// MATERIAL  UI CODE///////////////////////////////

  const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
  root2:{
    width: '100%',
    maxWidth: 500,
  
    backgroundColor: theme.palette.backgroundColor,
  },
}));

 const classes = useStyles();


 /////////////////HANDLE CHECKBOX TOOGLE.//////////

 const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
   
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    

    setChecked(newChecked);
    const index=data.findIndex(element=>element.id===value);
    console.log(data[index].completed);
  
    dispatch(taskCompleted(value,index,data[index].completed));
  };




    const value=task.id;
    const labelId = `checkbox-list-label-${value}`;




///handle delete icon

    const deletehandle=()=>{
     
       dispatch(deleteTodoSaga(task.id))
        setOpen(true)

    }



//main
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const textRef = useRef(null);



/// FUNCTION TO EDIT OR UPDATE TASK


  function editItemToState(e) {
    e.preventDefault();
    dispatch(updateTodoSaga({ message: textRef.current.value, id: task.id }));
    setIsUpdate(false);
    textRef.current = null;
  }



//EDIT BOX DISPLAY OR FORM
  const renderForm = () => {
    return (
      <form class="render" onSubmit={editItemToState}>
        <input ref={textRef} type='text' defaultValue={task.task} />
        <IconButton type="submit">
          <DoneOutlineOutlinedIcon/>
        </IconButton>
      
      </form>
    );
  };



  // DISPLAY ITEM


  const renderItem = () => {
    return (
      <>
         <List className={task.completed?classes.root:classes.root2}>
    <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
      
      <ListItemIcon>
        <Tooltip title="Mark Completed">
     <Checkbox
                edge="start"
              
             
            
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              /></Tooltip>
      </ListItemIcon>
      {!task.completed?<ListItemText id={labelId} style={{fontWeight:"bolder"}} primary={task.task}/>
      :<ListItemText id={labelId} style={{textDecoration:"line-through",color:"red",fontStyle:"oblique"}}primary={task.task}/>
      }

       
      
      <ListItemSecondaryAction>
        <Tooltip title="Delete The Task">
              <IconButton edge="end" aria-label="comments" color="secondary" onClick={deletehandle}>
                <CloseIcon/>
              </IconButton></Tooltip><Tooltip title="Edit The Task">
               <IconButton edge="end" aria-label="comments" className="ml-3" color="inherit" onClick={()=>setIsUpdate(true)}>
                 <EditOutlinedIcon/>
                
              </IconButton></Tooltip>
            </ListItemSecondaryAction>
            


       
  
   
    </ListItem>
     <Divider variant="inset" component="li" />
  </List>
   
      </>
    );
  };

  return (
    <>
      <p></p>
      <div>{isUpdate ? renderForm() : renderItem()}</div>
    </>
  );
};

export default TodoItem;

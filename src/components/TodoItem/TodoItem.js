import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, taskCompleted, updateTodo } from "../../actions";
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
import CommentIcon from '@material-ui/icons/Comment';
import "./todoitem.css"
import DoneOutlineOutlinedIcon from '@material-ui/icons/DoneOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { red } from "@material-ui/core/colors";
import lightGreen from '@material-ui/core/colors/lightGreen';
  import { createTheme } from '@material-ui/core/styles';
  import Tooltip from '@material-ui/core/Tooltip';




const TodoItem = ({ task }) => {

const [checked, setChecked] = React.useState([0]);
const data=useSelector(state=>state.todos.data);
console.log(data)

const lightg=lightGreen[500];

const theme = createTheme({
  palette: {
    primary: {
      main: lightGreen[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

///material ui
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
 console.log(checked);

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
  
    dispatch(taskCompleted(index,data[index].completed));
  };


    const value=task.id;
    const labelId = `checkbox-list-label-${value}`;






//maiin
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const textRef = useRef(null);
  function editItemToState(e) {
    e.preventDefault();
    dispatch(updateTodo({ message: textRef.current.value, id: task.id }));
    setIsUpdate(false);
    textRef.current = null;
  }


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
              <IconButton edge="end" aria-label="comments" color="secondary" onClick={() => dispatch(deleteTodo(task.id))}>
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

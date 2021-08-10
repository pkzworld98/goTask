import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { stoptoast } from '../actions';
import MuiAlert from '@material-ui/lab/Alert';

import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';

function MuiSnackbar() {

  const open=useSelector(state=>state.todos.showtoast)
  const message=useSelector(state=>state.todos.toastmessage)
   const type=useSelector(state=>state.todos.toasttype)



     function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}



    const dispatch=useDispatch();

const handleClose=()=>{
   dispatch(stoptoast());
     
}


    return (
       <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type} >
         {message}
        </Alert>
      </Snackbar>
 
    )
}

export default MuiSnackbar

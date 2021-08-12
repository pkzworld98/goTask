
import { useEffect} from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import './App.css';
import Home from './Home/Home';
import { fetchfbdata } from './actions';
import MuiSnackbar from './components/MuiSnackbar';

function App() {
  const dispatch=useDispatch();
  const show=useSelector(state=>state.todos.showtoast)



  useEffect(()=>{
    dispatch(fetchfbdata(dispatch));
  
  },[])

  return (
    <div className="App">
      <Home/>
      {show && <MuiSnackbar/>}
     
  
       
 
</div>
  );
}

export default App;

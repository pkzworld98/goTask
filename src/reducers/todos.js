


const initialState = {
  data: [],
  selectedFilter:"all",
  showtoast:false,
  toastmessage:"",
  toasttype:"success"
};

const todos = (state = initialState, action) => {
 
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        data: [...state.data, action.message],
        showtoast:true,
        toastmessage:"Task added successfully",
        toasttype:"success"
        
      };

    case "STOP_SHOW_TOAST":
      return{
        ...state,
        showtoast:false
      }
    case "SAVE_TODOS":
      return{
        ...state,
        data:action.todos


      }

    case "DELETE_TODO":
      return {
        ...state,
        data: [...state.data.filter((todo) => todo.id !== action.id)],
         showtoast:true,
        toastmessage:"Task deleted successfully",
        toasttype:"error"
      };
    case "UPDATE_TODO":
      return {
        ...state,
        data: [
          ...state.data.filter((todo) => todo.id !== action.id),
          { task: action.message, id: action.id ,completed:action.completed},

        ],
      
      };


      case "TASK_COMPLETED":
        return { 
       ...state, 
       data: state.data.map(
           (content, i) => i === action.index ? {...content, completed:action.toogle?false:true}
                                   : content
       )
       
    }
    case "DELETE_COMPLETED_TASK":
      return{
        ...state,
        data:state.data.filter((todo)=>todo.completed!==true)
      }
        case "SHOW_COMPLETED_TASK":
            return{
               ...state,
               selectedFilter:"complete"

            }

        case "SHOW_ALL":
            return{
                ...state,
                selectedFilter:"all"
            }
        case "SHOW_UNCOMPLETED_TASK":
            return{
                ...state,
              selectedFilter:"notcompleted"
            }
  //       
    default:
      return state;
  }
};

export default todos;

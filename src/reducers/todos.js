


const initialState = {
  data: [],
  selectedFilter:"all"
};

const todos = (state = initialState, action) => {
  console.log(action.index);
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        data: [...state.data, action.message],
      };
    case "DELETE_TODO":
      return {
        ...state,
        data: [...state.data.filter((todo) => todo.id !== action.id)],
      };
    case "UPDATE_TODO":
      return {
        ...state,
        data: [
          ...state.data.filter((todo) => todo.id !== action.id),
          { task: action.message, id: action.id },
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

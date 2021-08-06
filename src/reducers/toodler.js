const initialState={
    tood:false,
    taskk:false
}

const toodler=(state=initialState,action)=>{

    switch(action.type){
        case "SHOW_COMPLETED_TASK":
            return{
               ...state,
               tood:true,
               taskk:false

            }

        case "SHOW_ALL":
            return{
                ...state,
                tood:false,
                taskk:false
            }
        case "SHOW_UNCOMPLETED_TASK":
            return{
                ...state,
                taskk:true,
                tood:false
            }
            default:
                return state;
    }
}
export default toodler
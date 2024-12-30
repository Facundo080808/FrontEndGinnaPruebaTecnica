import { createSlice } from "@reduxjs/toolkit";

const Tasks = createSlice({
    name:"tasks",
    initialState:{tasksList:[]},
        reducers:{
            getTasks:(state,action)=>{
                state.tasksList = action.payload;
            },
        }
})

export default Tasks.reducer;
export const{getTasks} =Tasks.actions;
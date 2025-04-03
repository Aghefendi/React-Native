import { createSlice } from "@reduxjs/toolkit";

export const useSlace=createSlice({
name:'tasks',
initialState:{
tasks:[],
},
reducers:{
addTodo:(state,action)=>{

    state.tasks.push(action.payload);
},

removeTodo:(state,action)=>{

    state.tasks=state.tasks.filter(todo=>todo.id!==action.payload);
},

    
},




})
export const { addTodo, removeTodo } = useSlace.actions;
export default useSlace.reducer;
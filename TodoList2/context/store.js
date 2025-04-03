import { configureStore } from '@reduxjs/toolkit'
import useReducer from './useSlace'

export default configureStore({
  reducer: {
    tasks:useReducer,


  }
})

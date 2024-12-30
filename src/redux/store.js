import {configureStore} from "@reduxjs/toolkit"
import TasksReducer from "../redux/reducer"

export const store = configureStore({reducer:{
    tasks : TasksReducer
}})

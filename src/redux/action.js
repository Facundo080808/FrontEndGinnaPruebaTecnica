import { enviromentVariables } from "../utils/enviromentVariables";
import { getTasks  } from "./reducer";

export function getAllTasksAction() {
    return async (dispatch)=>{
        try {
            console.log(enviromentVariables.URL);
            
            const taskInfo = await (await fetch(`${enviromentVariables.URL}/api/tasks/`)).json();
            console.log("todas las tasks ",taskInfo);
            
            return dispatch(getTasks(taskInfo))
        } catch (error) {
            console.log(error.message);
        }
    }
}

export function getCompletedTasksAction() {
    return async (dispatch)=>{
        try {
            const taskInfo = await (await fetch(`${enviromentVariables.URL}/api/tasks/`)).json();
            const completed = taskInfo.filter((e)=>e.state )
            console.log("tasks completadas ",completed);
            
            return dispatch(getTasks(completed))
        } catch (error) {
            console.log(error.message);
        }
    }
}

export function getPendingTasksAction() {
    return async (dispatch)=>{
        try {
            const taskInfo = await (await fetch(`${enviromentVariables.URL}/api/tasks/`)).json();
            const pending = taskInfo.filter((e)=>!e.state )
            console.log("tasks incompletas ",pending);
            
            return dispatch(getTasks(pending))
        } catch (error) {
            console.log(error.message);
        }
    }
}



export function getByIdTask(id) {
    return async (dispatch)=>{
        try {
            const response = await (await fetch(`${enviromentVariables.URL}/api/tasks/${id}`)).json();
            return dispatch(getTasks(response))
        } catch (error) {
            console.log(error.message);
        }
}}

export function updateTask(id,data) {
    return async (dispatch)=>{
        try {
            const response = await (await fetch(`${enviromentVariables.URL}/api/tasks/put/${id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(data)    
            })).json();
            return dispatch(getTasks(response))
        } catch (error) {
            console.log(error.message);
        }
}}



export function postAction(objeto) {
    return async(dispatch)=>{
    try {
        const response = {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(objeto)    
        }
        const post = await(await fetch(`${enviromentVariables.URL}/api/tasks/create` , response)).json();
        return dispatch(getTasks(post))
    } catch (error) {
        console.error(error.message);
    }
}}

export function updateAction(id,objeto) {
    return async(dispatch)=>{
    try {
        const response = {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(objeto)    
        }
        const post = await(await fetch(`${enviromentVariables.URL}/api/tasks/put/${id}` , response)).json();
        return dispatch(getTasks(post))
    } catch (error) {
        console.error(error.message);
    }
}} 

export function deleteAction(id) {
    return async(dispatch)=>{
    try {
        const response = {
                method: 'DELETE', 
                headers: {
                    'Content-Type': 'application/json' 
                },   
        }
        await(await fetch(`${enviromentVariables.URL}/api/tasks/delete/${id}` , response)).json();
        
    } catch (error) {
        console.error(error.message);
    }
}} 






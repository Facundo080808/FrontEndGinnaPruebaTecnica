import { useDispatch } from "react-redux";
import { getAllTasksAction, getCompletedTasksAction, getPendingTasksAction } from "../../redux/action";

export function Filters({reestart}) {
    const dispatch =useDispatch();
    const handleChangue = (e)=>{
        const {value}=e.target;
        switch (value) {
            case "completadas":
                dispatch(getCompletedTasksAction())
                reestart()
                break;
            case "pendientes":
                dispatch(getPendingTasksAction())
                reestart()
                break;
            case "todas":
                dispatch(getAllTasksAction())
                reestart()
                break;
            default:
                break;
        }
    }
    const Click = ()=>{
       
        reestart();
        
        return dispatch(getAllTasksAction())
    }
   
    
    return(
        <header className="flex items-center space-x-4 p-4 bg-gray-800 text-white">
    <button 
        onClick={Click} 
        className="px-6 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
    >
        Limpiar Filtros
    </button>
    
    <select 
        name="" 
        id="" 
        onChange={handleChangue} 
        className="px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" 
        defaultValue={"todas"}
    >
        <option value="completadas">Completadas</option>
        <option value="pendientes">Pendientes</option>
        <option value="todas">Todas</option>
    </select>
</header>
    )
}
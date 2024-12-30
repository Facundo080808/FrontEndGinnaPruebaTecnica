import { Link } from "react-router-dom";
import { getAllTasksAction } from "../../redux/action";
import { useDispatch } from "react-redux";

export function Nav({ Filters, restart }) {
    const dispatch = useDispatch();

    return (
        <header className="w-full bg-gray-800 text-white py-4 flex justify-between items-center px-8">
            <nav className="flex flex-row items-center">
                <Link to="/">
                    <button 
                        className="w-auto text-base m-4 p-4 rounded-md transition duration-200 border border-gray-400 hover:bg-blue-500 hover:text-white" 
                        onClick={() => dispatch(getAllTasksAction())}
                    >
                        Home
                    </button>
                </Link>
                <Link to="/create">
                    <button className="w-auto text-base m-4 p-4 rounded-md transition duration-200 border border-gray-400 hover:bg-green-500 hover:text-white">
                        Crear una tarea
                    </button>
                </Link>
            </nav>
            <div className="ml-auto">
                {Filters && <Filters reestart={restart}></Filters>}
            </div>
        </header>
    );
}

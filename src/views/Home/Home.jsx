import {useDispatch,useSelector} from 'react-redux';
import {useState,useEffect} from 'react';
import { getAllTasksAction } from '../../redux/action';
import Cards from '../../components/Cards/Cards';
import styles from "./Home.module.css";
import { Filters } from '../../components/filters/filters';
import { Nav } from '../../components/nav/nav';
//hu
function Home() {
    const itemsPorPage = 8;
    const dispatch = useDispatch();
    const Tasks = useSelector(state=>state.tasks.tasksList);
    const [tasks , setTasks] = useState(Array.isArray(Tasks) && Tasks);
    const [currentPage , setCurrentPage] = useState(0);
    const reestart = ()=>{
        setCurrentPage(0);
        setTasks(Array.isArray(Tasks) &&[...Tasks].splice(0, itemsPorPage))
    }
    useEffect(()=>{
        setCurrentPage(0);
        setTasks(Array.isArray(Tasks) &&[...Tasks].splice(0, itemsPorPage))
        dispatch(getAllTasksAction());
    
    },[dispatch])
    useEffect(() => {
        if (Array.isArray(Tasks) && Tasks.length > 0) {
            setTasks([...Tasks].splice(0, itemsPorPage));
        }
    }, [Tasks]);
    
    
    const nextHandler = ()=>{
        const total = Array.isArray(Tasks) && Tasks.length;
        const nextPage = currentPage + 1;
        const Index = nextPage * itemsPorPage;
        if (Index >= total) return;
        setTasks([...Tasks].splice(Index,itemsPorPage))
        setCurrentPage(nextPage);
    }
    const prevHandler = ()=>{
        const prevPage = currentPage - 1;
        if(prevPage < 0)return;
        const first = prevPage * itemsPorPage;
        setTasks([...Tasks].splice(first,itemsPorPage));
        setCurrentPage(prevPage);
    }
    
    return(
        <main className="grid items-center">
            <Nav Filters={Filters} restart={reestart}></Nav>
            <section className="flex flex-wrap w-full h-auto justify-between m-1 gap-0.5">
            { tasks.length > 0 ? tasks.map((task, index)=><Cards key={index} task={task}/>) : <h1 className="col-span-full text-center text-xl text-gray-500">loading...</h1>}
            </section>
           {tasks.length > 0 &&<> <article className={styles.pagination}>
                <button onClick={prevHandler} className={styles.button}>⬅️ Previous</button>
                <button className={styles.refresh} onClick={reestart}>{currentPage + 1}</button>
                <button onClick={nextHandler} className={styles.button}>Next ➡️</button>
            </article>
                    
            </>}
        </main>
    )
}

export default Home;
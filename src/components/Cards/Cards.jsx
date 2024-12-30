import {  UpdateIcon } from '../icons/deleteIcon';
import { Link } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { updateAction } from '../../redux/action';
import { useState } from 'react';

function Cards(props) {
    const dispatch = useDispatch()
    const changueState = ()=>{
        
        dispatch(updateAction(props.task._id,{
            title: props.task.title,
            description: props.task.description,
            state:true
        }))
    }
    const date = new Date(props.task.createdAt);
    const formattedDate = date instanceof Date && !isNaN(date) ? date.toLocaleString() : 'Fecha no disponible';
    
    return (
        <article className="bg-slate-300 rounded-lg overflow-hidden p-6 w-full md:w-1/3 lg:w-1/4 mx-auto mb-6 hover:shadow-xl hover:translate-x-1 transition-all duration-300 border border-black m-2">
            
                <h1 className="text-4xl font-bold text-black-500 mb-4">{props.task.title} </h1>
                <p className="text-gray-700 mb-4">{props.task.description}</p>
                <strong>{formattedDate}</strong>
                <article className="flex justify-around   ">
                    
                    <button className="text-black-500 hover:text-blue-700 transition duration-300">
                        <Link to={`/update/${props.task._id}`}>
                            <UpdateIcon className="h-6 w-6" />
                        </Link>
                    </button>
                    {!props.task.state ?
                    <button className="text-blue-500 hover:text-blue-700 font-semibold py-2 px-4 rounded-lg border border-blue-500 hover:border-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none" disabled={props.task.state} onClick={changueState}>
                        Terminar tarea
                    </button>
                    :
                    <h2 className='text-green-500 hover:text-green-700 font-semibold'>Tarea terminada</h2>
                    }
                
            </article>
        </article>
    );
}

export default Cards;

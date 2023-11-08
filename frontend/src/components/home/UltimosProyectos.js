import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UltimosProyectos() {
    const [projects, setProjects] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://127.0.0.1:8000/portfolio")
          .then((response) => response.json())
          .then((data) => {
            const ultimosProyectos = data.portfolio.slice(0, 3);

            console.log(ultimosProyectos)
            setProjects(ultimosProyectos);
          })
          .catch((error) => {
            console.log("Error al obtener los proyectos:", error);
          });
    }, [])
    

    return(
        <div className="pt-36 pb-14">
            <div className="p-2">
                <h3 className="text-3xl text-center text-blue-900 dark:text-white pb-8">
                    Últimos proyectos
                </h3>
                <Link 
                  to="/portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/portfolio');
                    window.scrollTo(0, 0);
                  }}
                  >
                <div className="flex justify-between items-center px-3 py-3">
                    <span className="text-blue-900 dark:text-cyan-500 hover:underline ml-auto">
                        Ver todo
                        <button type="button" className="text-white bg-blue-900 hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 ml-2 dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-blue-800">
                            <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                            <span className="sr-only">Icon description</span>
                        </button>
                    </span>
                </div>
                </Link>
            </div>
            <div className='group grid md:grid-cols-3 gap-8 mx-5 lg:ml-8'>
                {projects.map((p) => (
                    <Link 
                    to={`/portfolio/detail/${p.id}`}
                    className="relative block">
                    <div 
                        className='overflow-hidden transition-all hover:scale-105 card border border-gray-200 dark:border-cyan-500 rounded-lg p-3 shadow'>
                        <img className="rounded-t-lg pt-4 w-full h-60" src={p.image} alt="thumbnail" />
                        <div className="p-5">
                            <h3 className='bg-gradient-to-r from-cyan-200 to-cyan-300 bg-[length:0px_8px] bg-left-bottom
                                            bg-no-repeat
                                            transition-[background-size]
                                            duration-500
                                            hover:bg-[length:100%_3px]
                                            group-hover:bg-[length:100%_8px]
                                            dark:from-cyan-400 dark:to-cyan-700 text-xl mb-2 font-bold tracking-tight text-blue-950 dark:text-white'>
                                {p.title}
                            </h3>
                            
                            <p className='mb-3 description pt-2 text-blue-950 dark:text-white'>
                                {p.description}
                            </p>
                        </div>
                    </div>
                </Link>
                ))}
            </div>
        </div>
    )
}
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProjectsSkeleton from "./ProjectsSkeleton";

export default function UltimosProyectos() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
      const fetchProjects = async () => {
          try {
              // Determinar la URL base según el entorno
              const baseUrl = process.env.NODE_ENV === 'production'
                  ? 'https://francolotodev.com'  // Reemplaza con la URL de tu backend en producción
                  : 'http://127.0.0.1:8000';  // URL de desarrollo
  
              const response = await fetch(`${baseUrl}/portfolio`);
              const data = await response.json();
  
              // Tomar los últimos 3 proyectos
              const ultimosProyectos = data.portfolio.slice(0, 3);
  
              setProjects(ultimosProyectos);
              setLoading(false);
          } catch (error) {
              console.log("Error al obtener los proyectos:", error);
              setLoading(false);
          }
      };
  
      fetchProjects();
  }, []);

    if (loading) {
        // Muestra el esqueleto mientras se cargan los proyectos
        return (
          <div className="pt-20 pb-16 -mt-24 lg:-mt-20 md:-mt-20 bg-zinc-400 dark:bg-gray-700">
            <div className="bg-cyan-500 pt-8 shadow-xl shadow-cyan-700 dark:shadow-cyan-900 mb-12 rounded-md lg:mx-36 md:mx-36 mx-16">
                    <h3 className="text-3xl text-center text-zinc-100 dark:text-white pb-8">
                        Mis últimos proyectos
                    </h3>
            </div>
            <Link 
                  to="/portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/portfolio');
                    window.scrollTo(0, 0);
                  }}
                  >
                <div className="flex justify-between items-center px-3 py-3">
                    <span className="text-white hover:underline ml-auto">
                        Ver todo
                        <button type="button" className="text-zinc-400 bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 ml-2 dark:bg-white dark:text-gray-700 dark:focus:ring-blue-800">
                            <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                            <span className="sr-only">Icon description</span>
                        </button>
                    </span>
                </div>
                </Link>
            <div className="pt-10 group grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:mx-12 mx-8">
              {[...Array(3)].map((_, index) => (
                <ProjectsSkeleton key={index} />
              ))}
            </div>
          </div>
        );
      }
    

    return(
        <div className="pt-20 pb-16 bg-zinc-400 dark:bg-gray-700 ">
            <div >
                <div className="bg-cyan-500 pt-8 shadow-xl shadow-cyan-700 dark:shadow-cyan-900 mb-12 rounded-md lg:mx-36 md:mx-36 mx-16">
                    <h3 className="text-3xl text-center text-zinc-100 dark:text-white pb-8">
                        Mis últimos proyectos
                    </h3>
                </div>
                <Link 
                  to="/portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/portfolio');
                    window.scrollTo(0, 0);
                  }}
                  >
                <div className="flex justify-between items-center px-3 py-3">
                    <span className="text-white hover:underline ml-auto">
                        Ver todo
                        <button type="button" className="text-zinc-400 bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 ml-2 dark:bg-white dark:text-gray-700 dark:focus:ring-blue-800">
                            <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                            <span className="sr-only">Icon description</span>
                        </button>
                    </span>
                </div>
                </Link>
            </div>
            <div className='group grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mx-5 lg:ml-8 pt-8'>
                {projects.map((p) => (
                    <Link 
                    to={`/portfolio/detail/${p.id}`}
                    className="relative block">
                    <div 
                        className='overflow-hidden transition-all hover:scale-105 card border border-gray-200 dark:border-zinc-600 bg-zinc-100 dark:bg-zinc-400 rounded-lg p-3 shadow'>
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
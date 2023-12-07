import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "../paginacion/Pagination";
import ProjectsSkeleton from "./ProjectsSkeleton";

export default function ListaProyectos() {  
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true);
    const [projectsPerPage, setProjectsPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(1)

    const lastIndex = currentPage * projectsPerPage
    const firstIndex = lastIndex - projectsPerPage

    useEffect (() => {
        const fetchProjects = async () => {
            try {
                const apiUrl = process.env.NODE_ENV === 'production'
                    ? 'https://francolotodev.com/portfolio'
                    : 'http://127.0.0.1:8000/portfolio'

                const data = await fetch(apiUrl);
                const projects = await data.json();
                setProjects(projects.portfolio);
                setLoading(false);
            } catch(error) {
                console.error("Error listando proyectos:", error);
                setLoading(false)
            }
        };

        fetchProjects();
    }, []);
    

    const totalProjects = projects.length

    if (loading) {
        // Muestra el esqueleto mientras se cargan los proyectos
        return (
          <div className="pt-12 pb-16 -mt-24 lg:-mt-20 md:-mt-20 bg-zinc-400 dark:bg-gray-700">
            <div className="group grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:mx-12 mx-8">
              {[...Array(6)].map((_, index) => (
                <ProjectsSkeleton key={index} />
              ))}
            </div>
          </div>
        );
      }

    return(
        <div className='pt-12 -mt-24 lg:-mt-20 md:-mt-20 bg-zinc-400 dark:bg-gray-700'>

            <div className='group grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:mx-12 mx-8'>
            {projects && projects.map(p => (
 
                <Link 
                  to={`/portfolio/detail/${p.id}`}
                  className="relative block">
                    <div 
                      className='overflow-hidden transition-all hover:scale-105 card border border-gray-200 dark:border-zinc-600 rounded-lg p-3 shadow  bg-zinc-100 dark:bg-zinc-400'>
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
                            
                            <p className='mb-3 pt-2 text-blue-950 dark:text-white'>
                                {p.description}
                            </p>
                        </div>
                    </div>
                </Link>
            )).slice(firstIndex, lastIndex)}
        
            </div>
            <Pagination 
              projectsPerPage={projectsPerPage} 
              currentPage={currentPage} 
              setCurrentPage={setCurrentPage} 
              totalProjects={totalProjects}
              />
        </div>
    );
}


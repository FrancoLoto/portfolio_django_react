import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "../paginacion/Pagination";

export default function ListaProyectos() {
    
    const [projects, setProjects] = useState([])
    const [projectsPerPage, setProjectsPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(1)

    const lastIndex = currentPage * projectsPerPage
    const firstIndex = lastIndex - projectsPerPage

    const projectList = async() => {
        const data = await fetch('http://127.0.0.1:8000/portfolio')
        const projects = await data.json()
        console.log(projects)
        setProjects(projects.portfolio)
    }

    const totalProjects = projects.length

    useEffect(() => {
        projectList()
    }, [])

    return(
        <div className='pt-12 bg-zinc-100 dark:bg-gray-900'>
            <div className='mb-5 mx-5 pb-4'>  
                <p className='ml-16 text-lg text-gray-500 dark:text-white'>Este es mi portafolio.</p>
            </div>

            <div className='group grid md:grid-cols-3 gap-8 mx-5 lg:ml-8'>
            {projects && projects.map(p => (
 
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


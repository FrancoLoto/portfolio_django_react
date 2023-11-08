import React from 'react';

export const Pagination = ({
    projectsPerPage,
    totalProjects,
    currentPage,
    setCurrentPage
}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++){
        pageNumbers.push(i)
    }

    const onPreviusPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const onNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const onSpecificPage = (n) => {
        setCurrentPage(n)
    }

    return(
        <>
        <div className="flex justify-center pt-12 pb-12">
            <nav aria-label="Page navigation example">
                <ul className="flex items-center -space-x-px h-10 text-base">
                    <li>
                        <button 
                          onClick={onPreviusPage} 
                          className={`flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === 1 ? 'px-8 py-3 text-white bg-gray-300 rounded focus:outline-none cursor-default': 'hover:text-gray-700'}`}
                          disabled={currentPage === 1}
                          >
                          
                            Anterior
                        </button>
                    </li>
                    {
                        pageNumbers.map(noPage => (
                            <li key={noPage}>
                                <button 
                                    className={`${noPage === currentPage ? 'flex items-center justify-center px-4 h-10 leading-tight text-white bg-gray-600':'flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400'}`}
                                    onClick={() => onSpecificPage(noPage)}
                                    
                                >
                                    {noPage}
                                </button>
                            </li>
                        ))
                    }
                    <li>
                        <button 
                          onClick={onNextPage} 
                          className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400  ${currentPage >= pageNumbers.length ? 'px-8 py-3 text-white bg-gray-300 rounded focus:outline-none cursor-default':'hover:text-gray-700'}`}
                          disabled={currentPage >= pageNumbers.length}
                          >
                            Siguiente
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    )
};
import { useState, useEffect } from 'react';



const Educacion = ({ darkMode }) => {
    const [education, setEducation] = useState([])

    useEffect(() => {
        getData()
      }, [])

    const getData = async () => {
        const educationResponse = await fetch('/education')
        const educationData = await educationResponse.json()
        setEducation(educationData)
    
    }

    return(
        <div className={`${darkMode  === "dark" ? "dark" : "light"} lg:pb-20 bg-zinc-400 dark:bg-gray-700`}>

            <div className='text-center pb-20 pt-20'>
                <h2 className='text-5xl font-principal text-blue-900 dark:text-white'>Mi Educación</h2>
            </div>

            <div className='group grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:mx-12 mx-8'>
            {education && education.map(e => (
                <div key={e.id} className='overflow-hidden second-card transition-all border border-gray-200 dark:border-zinc-600 rounded-lg p-3 shadow bg-zinc-100 dark:bg-zinc-400'>
        
                    <h3 className='text-lg border-b-2 border-blue-900 dark:border-gray-700 text-blue-950 dark:text-white'>{e.title}, {e.school}</h3>
                    <h5 className='py-2 text-gray-900 dark:text-cyan-900'>{e.degree} - {e.years}</h5>
                    {e.url && (
                        <a href={e.url} target='_blank' rel="noreferrer" className='text-cyan-500 hover:text-cyan-600 hover:underline dark:text-cyan-300 dark:hover:text-cyan-400'>Ver certificado</a>
                    )}
                    <p className='pt-2 text-blue-950 description dark:text-white pr-2'>{e.description}</p>
                </div>
            ))}
            </div>

        </div>
    )
};

export default Educacion
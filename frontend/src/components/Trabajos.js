import {useState, useEffect} from 'react';

const Trabajos = ({ workRef }) => {

    const [work, setWork] = useState([])

    useEffect(() => {
        getData()
      }, [])

    const getData = async () => {
        const workResponse = await fetch('/work')
        const workData = await workResponse.json()
        setWork(workData)

    }

    return(
            <div className='md:h-screen pt-24' ref={workRef}>
                <div className='mb-5 mx-5'>
                <h2 className='text-5xl mb-3 text-blue-900 dark:text-blue-100'>Mi experiencia laboral</h2>
                <p className='text-lg text-blue-700 dark:text-cyan-300'>Aquí está mi experiencia laboral.</p>
                </div>

                <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mx-5'>
                {work && work.map(w => (
                    <div key={w.id} className='border rounded-sm p-3 shadow'>
                        <h3 className='text-lg border-b-2 border-blue-900 dark:border-blue-300 dark:text-blue-300'>{w.job_title} - {w.company}</h3>
                        <h5 className='py-2 text-blue-700 dark:text-blue-200'>{w.years}</h5>
                        <p className='text-blue-950 dark:text-blue-200'>{w.description}</p>
                    </div>
                ))}

                
                </div>

            </div>
    )
};

export default Trabajos
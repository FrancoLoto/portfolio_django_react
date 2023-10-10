import { useState, useEffect } from 'react';


const Educacion = ( { educationRef }) => {
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
            <div className='md:h-screen pt-24' ref={educationRef}>
                <div className='mb-5 mx-5'>
                <h2 className='text-5xl mb-3 text-blue-900 dark:text-blue-200'>Mi educación</h2>
                <p className='text-lg text-blue-700 dark:text-cyan-300'>Acá está la educación que tengo.</p>
                </div>

                <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mx-5'>
                {education && education.map(e => (
                    <div key={e.id} className='border rounded-sm p-3 shadow'>
            
                        <h3 className='text-lg border-b-2 border-blue-900 dark:border-blue-300 text-blue-950 dark:text-blue-300'>{e.title}, {e.school}</h3>
                        <h5 className='py-2 text-blue-700 dark:text-blue-200'>{e.degree} - {e.years}</h5>
                        <p className=' text-blue-950 dark:text-blue-100'>{e.description}</p>
                    </div>
                ))}

                </div>

            </div>
    )
};

export default Educacion
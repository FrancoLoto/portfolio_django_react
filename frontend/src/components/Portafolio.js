import { useState, useEffect }from 'react';

const Portafolio = ({ portfolioRef }) => {
    const [portfolio, setPortfolio] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const portfolioResponse = await fetch('/portfolio')
        const portfolioData = await portfolioResponse.json()
        setPortfolio(portfolioData)

    }

    return(
            <div className='md:h-screen pt-24' ref={portfolioRef}>
                <div className='mb-5 mx-5'>
                    <h2 className='text-5xl mb-3 text-blue-900 dark:text-blue-300'>Mi portafolio</h2>
                    <p className='text-lg text-blue-700 dark:text-cyan-300'>Este es mi portafolio.</p>
                </div>

                <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mx-5'>
                {portfolio && portfolio.map(p => (
                    <div key={p.id} className='pb-2 border rounded-sm p-3 shadow'>
                        <h3 className='text-lg border-b-2 border-blue-900 dark:border-blue-300 text-blue-950 dark:text-blue-300'>{p.title}</h3>
                        <div className='pt-2'>
                            <a href={p.url} className='py-2 text-blue-500 hover:text-blue-700 transition cursor-pointer'>Ver código en GitHub</a>
                        </div>
                        <figure className="lg:flex-shrink-0">
                            <img className="h-64 lg:w-96 w-full object-cover rounded" src={p.image} alt="" />
                        </figure>
                        <p className='pt-2 text-blue-950 dark:text-blue-200'>{p.description}</p>
                    </div>
                ))}
                </div>

            </div>
    )
};

export default Portafolio
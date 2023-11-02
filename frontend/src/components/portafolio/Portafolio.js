import { useState, useEffect }from 'react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import Nav from '../navegacion/Nav';
import Footer from '../navegacion/Footer';
import HeroSection from './HeroSection';
import CTA from './CallToAction';

const Portafolio = ({ darkMode, toggleDarkMode }) => {
    const [portfolio, setPortfolio] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const portfolioResponse = await fetch('/portfolio');
            if (!portfolioResponse.ok) {
                throw new Error('Failed to fetch data');
            }
            const portfolioData = await portfolioResponse.json();
            setPortfolio(portfolioData.results.portfolio);
        } catch(error) {
            console.error(error);
        }
    }

    return(
        <>  
            <Helmet>
                <title>Franco Loto | Portafolio</title>
                <meta name="description" content="Desarrollador full-stack."/> 
                <meta name="keywords" content='franco loto, programador, diseñador web, desarrollador web, desarrollo de software, ingeniero de software'/>
                <meta name="robots" content='all'/>
                <link rel="canonical" href="https://www.francolotodev.com/"/>
                <meta name="author" content="Desarrollo Software"/>
                <meta name="publisher" content="Franco Loto"/>

                {/* Social Media Tags */}
                <meta property='og:title' content='Franco Loto'/>
                <meta property='og:description' content='Desarrollador full-stack.'/>
                <meta property='og:url' content='https://www.francolotodev.com/'/>
                <meta property='og:image' content='#'/>

                <meta name="twitter:title" content='Franco Loto' />
                <meta
                    name="twitter:decription"
                    description='Desarrollador full-stack.'
                />
                <meta name="twitter:image" content="#"/>
                <meta name="twitter:card" content="summary_large_image"/>
                
            </Helmet>
            <div className={`${darkMode  === "dark" ? "dark" : "light"} min-h-screen flex flex-col`}>
                <Nav onToggleDarkMode={toggleDarkMode}/>
                <HeroSection darkMode={darkMode}/>
                <div className='md:h-screen pt-24 bg-zinc-100 dark:bg-gray-900'>
                    <div className='mb-5 mx-5'>
                        <h2 className='text-5xl mb-3 text-blue-900 dark:text-blue-100'>Mi portafolio</h2>
                        <p className='text-lg text-blue-700 dark:text-cyan-300'>Este es mi portafolio.</p>
                    </div>

                    <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mx-5'>
                    {portfolio && portfolio.map(p => (
                        <Link to={`/portfolio/detail/${p.id}`}>
                            <div key={p.id} className='pb-2 border rounded-sm p-3 shadow'>
                                <h3 className='text-lg border-b-2 border-blue-900 dark:border-blue-300 text-blue-950 dark:text-blue-300'>{p.title}</h3>
                                <figure className="lg:flex-shrink-0">
                                    
                                        <img className="pt-4 object-cover" src={p.image} alt="" />
                                    
                                </figure>
                                <p className='pt-3 text-blue-950 dark:text-blue-200'>{p.description}</p>
                            </div>
                        </Link>
                    ))}
                
                    </div>
                </div>
                <CTA />
                <Footer />
            </div>
        </>
)};

export default Portafolio
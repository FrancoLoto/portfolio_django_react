import { Helmet } from 'react-helmet-async';
import Nav from '../navegacion/Nav';
import Footer from '../navegacion/Footer';
import HeroSection from './HeroSection';
import CTA from '../home/CallToAction';
import ListaProyectos from './ListaProyectos';

const Portafolio = ({ darkMode, toggleDarkMode }) => {
    

    return(
        <>  
            <Helmet>
                <title>Franco Loto | Portafolio</title>
                <meta name="description" content="Desarrollador full-stack."/> 
                <meta name="keywords" content='franco loto, programador, diseñador web, desarrollador web, desarrollo de software, ingeniero de software, programador argentina, programador bahia blanca'/>
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
            <div className={`${darkMode  === "dark" ? "dark" : "light"}`}>
                <Nav onToggleDarkMode={toggleDarkMode}/>
                <HeroSection darkMode={darkMode}/>
                <ListaProyectos />             
                <CTA />            
                <Footer />
            </div>
        </>
)};

export default Portafolio
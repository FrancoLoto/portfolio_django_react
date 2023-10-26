import { useRef, useState } from 'react';
import Nav from "./Nav.js"
import Educacion from './Educacion.js';
import Portafolio from './Portafolio.js';
import { Tweet } from 'react-tweet'
import Footer from './Footer.js';
import Contacto from './Contacto.js';
import HeroSection from './HeroSection.js';


const Home = () => {

    const homeRef = useRef(null)
    const educationRef = useRef(null)
    const workRef = useRef(null)
    const portfolioRef = useRef(null)
    const contactoRef = useRef(null)

    // Obtiene el modo oscuro almacenado en LocalStorage o establece 'light' como predeterminado.
    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') || 'light');

    function toggleDarkMode() {
        const newMode = darkMode === 'dark' ? 'light' : 'dark';
        setDarkMode(newMode);
        localStorage.setItem('darkMode', newMode);  // Almacena en LocalStorage
    }

    return(
        <div className={`${darkMode  === "dark" ? "dark" : "light"} min-h-screen flex flex-col`}>
          <div className='bg-zinc-100 dark:bg-gray-900'>
            <Nav onToggleDarkMode={toggleDarkMode} homeRef={homeRef} educationRef={educationRef} workRef={workRef} portfolioRef={portfolioRef} contactoRef={contactoRef} />

            <HeroSection />            
          
              
              
            

            <Educacion educationRef={educationRef}/>
            <Portafolio portfolioRef={portfolioRef}/>
            <Contacto contactoRef={contactoRef}/>
            
            <div className='flex justify-center mt-20'>
              <Tweet id="1637494657104990218" className=""/>
            </div>

            <Footer />
          </div>
        </div>
    )
}

export default Home
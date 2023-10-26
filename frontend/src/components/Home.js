import { useRef, useState } from 'react';
import Nav from "./Nav.js"
import Educacion from './Educacion.js';
import Trabajos from './Trabajos.js';
import Portafolio from './Portafolio.js';
import { Tweet } from 'react-tweet'
import Footer from './Footer.js';
import Contacto from './Contacto.js';


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

            
            <div className='md:h-screen pt-16' ref={homeRef}>
              <div className='md:w-2/4 w-10/12 mx-auto mt-10 mb-3'>
                <h1 className='text-5xl mb-3 text-blue-900 dark:text-blue-100'>Franco Loto</h1>
                <p className='text-2xl text-blue-700 dark:text-cyan-400 ml-2'>Desarrollo de software</p>
              </div>
              

              <div className='flex md:flex-row flex-col space-between md:w-2/4 m-auto py-5 border rounded-lg px-3 shadow border-blue-900 dark:border-blue-300'>
                <img alt='profile' className='rounded-full w-64 h-64 mx-8' src='./foto_perfil.jpg'/>
                <div>
                  <h5 className='text-2xl text-blue-900 dark:text-cyan-100 border-b-2 border-blue-900 dark:border-blue-300'>Biografía</h5>
                  <p className='pt-3 dark:text-blue-100'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor porttitor risus, vel viverra leo vestibulum nec. Nunc eu leo enim. Vestibulum eu imperdiet magna. Proin sed magna vitae lacus laoreet pulvinar. Vestibulum dapibus eros ultrices dapibus sollicitudin. Cras elementum sed arcu quis eleifend. Integer porta ligula nec efficitur blandit. Suspendisse eleifend vel nisi at aliquet. In vitae tempor erat. Fusce tincidunt urna vitae mi volutpat rhoncus. Nulla interdum nisi in justo tempus accumsan.</p>
                </div>
              </div>
              
              
            </div>

            <Educacion educationRef={educationRef}/>
            <Trabajos workRef={workRef}/>
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
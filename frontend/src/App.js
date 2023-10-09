import { useRef, useState } from 'react';
import Nav from './components/Nav'
import Educacion from './components/Educacion';
import Trabajos from './components/Trabajos';
import Portafolio from './components/Portafolio';
import { Tweet } from 'react-tweet'
import Footer from './components/Footer';


function App() {

  const homeRef = useRef(null)
  const educationRef = useRef(null)
  const workRef = useRef(null)
  const portfolioRef = useRef(null)

  const [darkMode, setDarkMode] = useState("dark")

  function toggleDarkMode() {
    if (darkMode === "dark") {
      setDarkMode("light");
    } else {
      setDarkMode("dark");
    }
  }

  return (
    <>
      <div className={`${darkMode  === "dark" ? "dark" : "light"} min-h-screen flex flex-col`}>
        <div className='bg-zinc-100 dark:bg-gray-900'>
          <Nav onToggleDarkMode={toggleDarkMode} homeRef={homeRef} educationRef={educationRef} workRef={workRef} portfolioRef={portfolioRef} />

          <div className='md:h-screen pt-16' ref={homeRef}>
            <div className='md:w-2/4 w-10/12 mx-auto mt-10 mb-3'>
              <h1 className='text-5xl mb-3 text-blue-900 dark:text-blue-300'>Franco Loto</h1>
              <p className='text-2xl text-blue-700 dark:text-cyan-400 ml-2'>Desarrollo de software</p>
            </div>

            <div className='flex md:flex-row flex-col space-between md:w-2/4 m-auto py-5 border rounded-sm px-3 shadow border-blue-900 dark:border-blue-300'>
              <img alt='profile' className='rounded-full w-64 h-64 mx-8' src='./foto_perfil.jpg'/>
              <div>
                <h5 className='text-2xl text-blue-900 dark:text-cyan-300 border-b-2 border-blue-900 dark:border-blue-300'>Biografía</h5>
                <p className='pt-3 dark:text-blue-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor porttitor risus, vel viverra leo vestibulum nec. Nunc eu leo enim. Vestibulum eu imperdiet magna. Proin sed magna vitae lacus laoreet pulvinar. Vestibulum dapibus eros ultrices dapibus sollicitudin. Cras elementum sed arcu quis eleifend. Integer porta ligula nec efficitur blandit. Suspendisse eleifend vel nisi at aliquet. In vitae tempor erat. Fusce tincidunt urna vitae mi volutpat rhoncus. Nulla interdum nisi in justo tempus accumsan.</p>
              </div>
            </div>
          </div>

          <Educacion educationRef={educationRef}/>
          <Trabajos workRef={workRef}/>
          <Portafolio portfolioRef={portfolioRef}/>
          
          <div className='flex justify-center '>
            <Tweet id="1637494657104990218" className=""/>
          </div>

          <Footer />
        </div>
      </div>
    
      
    </>
  );
}

export default App;

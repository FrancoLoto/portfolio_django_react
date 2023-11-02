import Nav from "../navegacion/Nav.js"
import { Tweet } from 'react-tweet'
import Footer from '../navegacion/Footer.js';
import HeroSection from './HeroSection.js';


const Home = ({ darkMode,toggleDarkMode }) => {

    return(
        <div className={`${darkMode  === "dark" ? "dark" : "light"} min-h-screen flex flex-col`}>
          <div className='bg-zinc-100 dark:bg-gray-900'>
            <Nav onToggleDarkMode={toggleDarkMode} />

            <HeroSection />     
            
            <div className='flex justify-center mt-20'>
              <Tweet id="1637494657104990218" className=""/>
            </div>

            <Footer />
          </div>
        </div>
    )
}

export default Home
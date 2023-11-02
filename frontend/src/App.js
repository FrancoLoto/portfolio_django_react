import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Home from "./components/home/Home";
import PortafolioDetail from './components/portafolio/PortafolioDetail';
import SobreMi from "./components/sobre-mi/SobreMi";
import Portafolio from "./components/portafolio/Portafolio";
import Contacto from "./components/contacto/Contacto";


function App() {

  // Obtiene el modo oscuro almacenado en LocalStorage o establece 'light' como predeterminado.
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') || 'light');

  function toggleDarkMode() {
      const newMode = darkMode === 'dark' ? 'light' : 'dark';
      setDarkMode(newMode);
      localStorage.setItem('darkMode', newMode);  // Almacena en LocalStorage
  }

  return (
    
    <HelmetProvider>
      <Helmet>
        <title>Franco Loto | Inicio</title>
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
      <Router>
          <Routes>

            <Route exact path="/" element={<Home toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>} />

            <Route path="/sobre-mi" element={<SobreMi toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>} />
            <Route path="/portfolio" element={<Portafolio toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>} />
            <Route path="/portfolio/detail/:projectId"  element={<PortafolioDetail toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>}/>
            <Route path="/contacto" element={<Contacto toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>} />
              
          </Routes>
        </Router>
      </HelmetProvider>

  );
}

export default App;

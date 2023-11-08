import Footer from "../navegacion/Footer"
import Nav from "../navegacion/Nav"
import HeroSection from "./HeroSection"
import Educacion from "./Educacion"
import { Helmet } from "react-helmet-async";
import CTA from "../home/CallToAction";



const SobreMi = ({ darkMode, toggleDarkMode }) => {
    return(
        <>  
            <Helmet>
                <title>Franco Loto | Sobre Mí</title>
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
                <HeroSection />
                <Educacion />
                <CTA />
                <Footer />
            </div>
        </>
    )
}

export default SobreMi
import React from "react";
import heroPortafolio from "../assets/img/foto-hero-portafolio.jpg"

const HeroSection = ({ darkMode }) => {
    return(
        <div className={`${darkMode  === "dark" ? "dark" : "light"} min-h-screen flex flex-col bg-zinc-100 dark:bg-gray-900`}>
            <section className="grid grid-cols-1 gap-0 md:grid-cols-2 mt-28 min-h-screen mb-20">
                <div className="flex flex-col items-start justify-center px-4 py-20 lg:px-20 lg:-mt-72">
                    <span className="mb-3 px-1 text-white bg-cyan-500 badge dark:bg-cyan-500">PORTAFOLIO</span>
                    <h1 className="mb-6 text-4xl font-bold leading-tight text-blue-900 dark:text-white md:text-4xl lg:text-5xl">Hechale un vistazo a mis proyectos.</h1>
                    
                    <p className="mb-5 text-base text-gray-500 dark:text-white tracking-relaxed md:text-lg">Aquí puedes ver los proyectos que he creado y/o participado. Puedes acceder a ellos y ver el código en mis repositorios de GitHub.</p>
                </div>
                <div className="">
                    <img
                    src={heroPortafolio}
                    alt="3 women looking at a laptop"
                    className="object-cover w-full lg:h-full h-screen md:h-screen"
                    loading="lazy"
                    />      
                </div>
                <div className=" bg-gray-900 dark:bg-gray-800 md:-mt-40 lg:-mt-80 "></div>
                <div className=" bg-gray-900 lg:-mt-80 md:-mt-40 -mt-60 opacity-90"></div>
            </section>
        </div>
    )
}

export default HeroSection
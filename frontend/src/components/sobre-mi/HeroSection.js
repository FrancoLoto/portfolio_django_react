import React from "react";
import heroSobreMi from "../assets/img/foto-hero-sobre-mi.jpg"


const HeroSection = ({ darkMode }) => {
    return(
        <div className={`${darkMode  === "dark" ? "dark" : "light"} min-h-screen flex flex-col bg-zinc-100 dark:bg-gray-900`}>
            <section className="grid grid-cols-1 gap-0 md:grid-cols-2 mt-28 min-h-screen">
                <div>
                    <img
                    src={heroSobreMi}
                    alt="3 women looking at a laptop"
                    className="object-cover w-full lg:h-full h-full md:h-screen"
                    loading="lazy"
                    />
                </div>
                <div className=" bg-gray-900 lg:hidden md:hidden opacity-90 -mt-60"></div>
                
                <div className="flex flex-col items-start justify-center px-10 py-24 lg:px-20 lg:pr-24 lg:mb-60 md:mb-40 md:px-10">
                    <span className="mb-3 px-1 text-white bg-cyan-500 badge dark:bg-cyan-500">SOBRE MÍ</span>
                    <h1 className="mb-6 text-4xl font-bold leading-tight text-blue-900 dark:text-white md:text-4xl lg:text-5xl">Esta es mi historia.</h1>
                    
                    <p className="mb-5 text-base text-gray-500 dark:text-white tracking-relaxed md:text-lg">Desde el diseño hasta la implementación, me dedico a proporcionar experiencias digitales excepcionales. Mi objetivo es llevar las ideas de mis clientes a la realidad digital, ofreciendo soluciones personalizadas y escalables que se alineen con sus objetivos y necesidades específicas.</p>
                </div>
            
                <div className=" bg-gray-900 lg:-mt-60 md:-mt-60 opacity-90 "></div>
                <div className=" bg-gray-900 dark:bg-gray-800 md:-mt-60 lg:-mt-60"></div>
            </section>
        </div>
    )
}

export default HeroSection
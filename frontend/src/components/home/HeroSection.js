import React from "react";
import foto_hero from "../assets/img/foto-hero-home.png"
import { Link } from "react-router-dom";

const HeroSection = () => {

    return(
        
        <section className="bg-zinc-100 dark:bg-gray-900 py-12 lg:py-16 mt-20 md:mt-24 lg:pb-24 pb-28">
            <div className="max-w-screen-xl mx-auto lg:grid lg:grid-cols-12 lg:gap-8 lg:pt-4">
                <div className="lg:col-span-7 lg:flex lg:flex-col lg:justify-center">
                    <h1 className="mb-4 text-4xl font-principal font-semibold leading-none tracking-tight lg:pt-0 pt-6 px-7 md:pl-10 md:text-5xl xl:text-6xl text-blue-900 dark:text-white">Hola, soy Franco!</h1>
                    <p className="mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-xl px-7 md:pl-10 dark:text-gray-400">Desarrollo sitios y aplicaciones web utilizando las tecnologías de <a href="https://www.djangoproject.com/" className="hover:underline">Django</a> para el backend y <a href="https://es.react.dev/" className="hover:underline">React</a> para el frontend. and based on the components from the <a href="https://flowbite.com/docs/getting-started/introduction/" className="hover:underline">Flowbite Library</a> and the <a href="https://flowbite.com/blocks/" className="hover:underline">Blocks System</a>.</p>
                    <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 px-6">
                        <Link 
                          to="/contacto" 
                          className="inline-flex items-center justify-center w-full md:ml-4 px-5 py-3 text-sm font-medium text-center text-white rounded-lg sm:w-auto hover:bg-cyan-600 dark:text-white bg-cyan-500  dark:bg-cyan-500 hover:dark:bg-cyan-600"
                        >
                          Contáctame
                        </Link> 
                        <Link 
                          to="/sobre-mi" 
                          className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-white bg-blue-900 border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-blue-950 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-blue-900 dark:border-gray-600 dark:hover:text-white dark:hover:bg-blue-950"
                          >
                          Conoce más
                        </Link>
                    </div>
                </div>
                <div className="lg:col-span-5 lg:flex lg:justify-end md:flex md:justify-center flex justify-center pt-16">
                    <img src={foto_hero} className="rounded-full border-2 bg-cyan-500 dark:border-cyan-500 border-blue-900  h-72 w-72 lg:h-96 lg:w-96 md:w-80 md:h-80" alt="hero" />
                </div>                
            </div>
        </section>
        
    )
}

export default HeroSection
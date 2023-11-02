import React from "react";

const HeroSection = ({ darkMode }) => {
    return(
        <div className={`${darkMode  === "dark" ? "dark" : "light"} min-h-screen flex flex-col bg-zinc-100 dark:bg-gray-900`}>
            <section className="grid grid-cols-1 gap-0 md:grid-cols-2">
                <div className="flex flex-col items-start justify-center px-4 py-24 lg:px-20">
                    <span className="mb-3 px-1 text-white dark:text-white bg-cyan-500 badge dark:bg-cyan-500">PORTAFOLIO</span>
                    <h1 className="mb-6 text-4xl font-bold leading-tight text-blue-900 dark:text-white md:text-4xl lg:text-5xl">Hechale un vistazo a mis proyectos.</h1>
                    
                    <p className="mb-5 text-base text-gray-500 dark:text-white tracking-relaxed md:text-lg">Aquí puedes ver los proyectos que he creado o participado. Puedes acceder a ellos y ver el código en mis repositorios de GitHub.</p>
                </div>
                <div>
                    <img
                    src="https://images.unsplash.com/photo-1531548731165-c6ae86ff6491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                    alt="3 women looking at a laptop"
                    className="object-cover w-full h-64 bg-gray-100 md:h-full"
                    loading="lazy"
                    />
                </div>
            </section>
        </div>
    )
}

export default HeroSection
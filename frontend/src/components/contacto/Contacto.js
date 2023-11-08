import React from 'react';
import Nav from '../navegacion/Nav';
import Footer from '../navegacion/Footer';
import { Helmet } from 'react-helmet-async';


const Contacto = ({ darkMode, toggleDarkMode }) => {
    return(
        <>
            <Helmet>
                <title>Franco Loto | Contacto</title>
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

            <div className={`${darkMode  === "dark" ? "dark" : "light"}`}>
                <Nav onToggleDarkMode={toggleDarkMode}/>
                <section className='bg-zinc-100 dark:bg-gray-900 grid grid-cols-1 gap-0 md:grid-cols-2 mt-16' id="contacto">
                    <div>
                        <div
                        
                        className="object-cover w-full h-64 bg-gray-100 dark:bg-gray-900 md:h-full">
                        
                        </div>
                    </div>
                    <div className='mx-auto p-3 mt-16 mb-20' >
                    <h2 className='text-center mb-6 text-3xl text-blue-900 dark:text-blue-100'>Contáctame</h2>
                        <div>
                            <form action="https://formspree.io/f/mnqklnnl" method="POST">
                                <div className='mt-3'>
                                    <label className='leading-10 font-semibold text-blue-900 dark:text-blue-100' htmlFor="name">Nombre</label>
                                    <input
                                    type="text"
                                    id="name"
                                    name="sender-name"
                                    placeholder="Ingrese su nombre"
                                    className='w-full py-2 px-3 rounded-lg border border-blue-900 dark:border-blue-300 text-sm outline-none'
                                    required
                                    />
                                </div>
                                <div className='mt-3'>
                                    <label className='leading-10 font-semibold text-blue-900 dark:text-blue-100' htmlFor="email">Email</label>
                                    <input
                                    type="email"
                                    id="email"
                                    name="sender-email"
                                    placeholder="Ingrese su email"
                                    className='w-full py-2 px-3 rounded-lg border border-blue-900 dark:border-blue-300 text-sm outline-none'
                                    required
                                    />
                                </div>
                                <div>
                                    <label className='leading-10 font-semibold text-blue-900 dark:text-blue-100' htmlFor="mensaje">Mensaje</label>
                                    <textarea
                                    id="mensaje"
                                    cols="50"
                                    rows="10"
                                    placeholder="Ingrese su mensaje"
                                    name="mensaje"
                                    className='w-full py-2 px-3 rounded-lg border border-blue-900 dark:border-blue-300 text-sm outline-none'
                                    required
                                    ></textarea>
                                </div>
                                <input
                                type="submit"
                                value="Enviar"
                                id="submit-btn"
                                className="w-full py-2 px-3 mt-6 bg-blue-900 hover:bg-blue-950 dark:bg-cyan-500 dark:hover:bg-cyan-600 border-2 border-blue-900 dark:border-cyan-500 dark:hover:border-cyan-600 rounded-lg text-base text-white font-bold transition duration-300 cursor-pointer"
                                />

                            </form>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}

export default Contacto

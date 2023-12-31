import React from 'react';
import Nav from '../navegacion/Nav';
import Footer from '../navegacion/Footer';
import { Helmet } from 'react-helmet-async';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'


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
                <section className='bg-zinc-600 grid grid-cols-1 gap-0 lg:grid-cols-2 md:grid-cols-2 mt-16 px-4' id="contacto">

                        <div className='lg:mt-28 md:mt-36 mt-24 md:pr-10 lg:pl-10 md:pl-3 pl-3 pr-6'>
                            <h2 className="text-2xl font-bold tracking-tight py-2 text-white bg-cyan-500 badge dark:bg-cyan-500 sm:text-3xl text-center">
                            ¡Trabajemos Juntos!
                            </h2>
                            <p className="mt-6 md:mt-8 text-lg leading-6 text-gray-100">
                            Si estás buscando llevar tu presencia en línea al siguiente nivel o necesitas una aplicación web a medida, estaré encantado de colaborar contigo. ¡Vamos a construir algo increíble juntos!

                            ¡Espero tener la oportunidad de trabajar contigo y hacer realidad tus ideas en el mundo digital!
                            </p>
                            <dl className="mt-8 text-base text-gray-500">
                            
                            <div className="mt-16">
                                <dt className="sr-only">Phone number</dt>
                                <dd className="flex">
                                <PhoneIcon className="h-6 w-6 flex-shrink-0 text-zinc-100" aria-hidden="true" />
                                <span className="ml-3 text-zinc-100">+54 2920 242840</span>
                                </dd>
                            </div>
                            <div className="mt-4 text-zinc-200">
                                <dt className="sr-only">Email</dt>
                                <dd className="flex">
                                <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-zinc-100" aria-hidden="true" />
                                <span className="ml-3">franco.loto1995@gmail.com</span>
                                </dd>
                            </div>
                            </dl>
                    </div>
                    <div className='mx-auto p-3 mt-16 mb-20' >
                    
                    <div className='mt-4'>
                        <form action="https://formspree.io/f/mnqklnnl" method="POST">
                            <div className='mt-3'>
                                <label className='leading-10 font-semibold text-white' htmlFor="name">Nombre</label>
                                <input
                                type="text"
                                id="name"
                                name="sender-name"
                                placeholder="Ingrese su nombre"
                                className='w-full py-2 px-3 rounded-lg border border-gray-300 dark:border-white text-sm outline-none'
                                required
                                />
                            </div>
                            <div className='mt-3'>
                                <label className='leading-10 font-semibold text-white' htmlFor="email">Email</label>
                                <input
                                type="email"
                                id="email"
                                name="sender-email"
                                placeholder="Ingrese su email"
                                className='w-full py-2 px-3 rounded-lg border border-gray-300 dark:border-white text-sm outline-none'
                                required
                                />
                            </div>
                            <div>
                                <label className='leading-10 font-semibold text-white' htmlFor="mensaje">Mensaje</label>
                                <textarea
                                id="mensaje"
                                cols="50"
                                rows="10"
                                placeholder="Ingrese su mensaje"
                                name="mensaje"
                                className='w-full py-2 px-3 rounded-lg border border-gray-300 dark:border-white text-sm outline-none'
                                required
                                ></textarea>
                            </div>
                            <input
                            type="submit"
                            value="Enviar"
                            id="submit-btn"
                            className="w-full py-2 px-3 mt-6 bg-cyan-500 hover:bg-cyan-600 border-2 border-cyan-500 hover:border-cyan-600 rounded-lg text-base text-white font-bold transition duration-300 cursor-pointer"
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

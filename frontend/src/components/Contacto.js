import React from 'react';


const Contacto = ({ contactoRef }) => {
    return(
        
        <section className='mt-8 flex justify-center' id="contacto" ref={contactoRef}>
            <div className='max-w-2xl mx-auto p-3 rounded-lg border border-blue-900 dark:border-blue-300' >
            <h2 className='text-center mb-6 text-3xl text-blue-900 dark:text-blue-300'>Contactame</h2>
                <div>
                    <form action="https://formspree.io/f/mnqklnnl" method="POST">
                        <div className='mt-3'>
                            <label className='leading-10 font-semibold text-blue-900 dark:text-blue-300' for="name">Nombre</label>
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
                            <label className='leading-10 font-semibold text-blue-900 dark:text-blue-300' for="email">Email</label>
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
                            <label className='leading-10 font-semibold text-blue-900 dark:text-blue-300' for="mensaje">Mensaje</label>
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
                          className="w-full py-2 px-3 mt-6 bg-blue-900 hover:bg-blue-950 dark:bg-cyan-300 dark:hover:bg-cyan-400 border-2 border-blue-900 dark:border-blue300 rounded-lg text-base text-blue-100 dark:text-blue-900 font-bold transition duration-300 cursor-pointer"
                        />

                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contacto

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

const Nav = ({ homeRef, onToggleDarkMode }) => {
    const [toggleMenu, setToggleMenu] = useState(false)

    const navigate = useNavigate();

    const navIconHandler = e => {
        e.preventDefault()
        setToggleMenu(!toggleMenu)
    }

    const executeScroll = ref => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }
    return(
        <>
            <nav className='bg-zinc-100 dark:bg-gray-900 hidden md:block sticky top-0 px-2 sm:px-4 py-2.5'>
                <div className="flex items-center justify-between mx-auto px-8 sm:px-24">
                    <Link 
                      to="/" 
                      className="hover:scale-105"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate('/');
                        window.scrollTo(0, 0);
                      }}
                      >
                        <span className='cursor-pointer items-center mx-4 my-4 text-3xl font-semibold transition ease-in-duration-100'>
                            <span className=" text-blue-900 dark:text-white dark:hover:text-cyan-100 hover:text-blue-900 ">franco</span><span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-700">loto</span>
                        </span>
                    </Link>
                    <ul className='flex '>
                        <Link 
                           to="/sobre-mi"
                           onClick={(e) => {
                            e.preventDefault();
                            navigate('/sobre-mi');
                            window.scrollTo(0, 0);
                          }}><li 
                           className='text-md cursor-pointer mx-3 my-5 text-blue-900 dark:text-white dark:hover:text-cyan-100 hover:text-blue-950 border-b-2 border-transparent hover:border-cyan-500 transition dark:hover:border-cyan-600 duration-300 ease-in-out'
                        >SOBRE MÍ</li>
                        </Link>
                        <Link 
                          to="/portfolio"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate('/portfolio');
                            window.scrollTo(0, 0);
                          }}><li className='text-md cursor-pointer mx-3 my-5 text-blue-900 dark:text-white dark:hover:text-cyan-100 hover:text-blue-950 border-b-2 border-transparent hover:border-cyan-500 transition dark:hover:border-cyan-600 duration-300 ease-in-out'>PORTAFOLIO</li></Link>
                        <Link 
                          to="/contacto"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate('/contacto');
                            window.scrollTo(0, 0);
                          }}><li className='text-md cursor-pointer mx-3 my-5 text-blue-900 dark:text-white dark:hover:text-cyan-100 hover:text-blue-950 border-b-2 border-transparent hover:border-cyan-500 transition dark:hover:border-cyan-600 duration-300 ease-in-out'>CONTACTO</li></Link>
                        <li className='text-lg cursor-pointer mx-3 my-5 text-blue-900 dark:text-white dark:hover:text-cyan-100 hover:text-blue-950 border-b-2 border-transparent hover:border-cyan-500 transition dark:hover:border-cyan-600 duration-300 ease-in-out'>
                            <a href="/Franco_Loto.pdf" target="_blank" rel="noopener noreferrer">CV</a>
                        </li>
                        <li className='cursor-pointer mx-14 my-5'>
                            <button onClick={onToggleDarkMode}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-blue-900 hover:text-blue-950 dark:text-white dark:hover:text-cyan-100"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                                    />
                                </svg>
                            </button>
                        </li>
                    </ul> 
                </div> 
            </nav>

        
            {/* Mobile Navbar */}
            <nav className='bg-zinc-100 dark:bg-gray-900 md:hidden block sticky top-0 px-2 sm:px-4 py-2.5'>
                <div className='flex items-center justify-between mx-auto px-8 sm:px-24'>
                    <Link to="/">
                        <span className='cursor-pointer items-center hover:scale-110 mx-4 my-4 text-3xl font-semibold  transition ease-in-duration-100' onClick={() => executeScroll(homeRef)}>
                            <span className="text-blue-900 dark:text-blue-200 dark:hover:text-cyan-200 hover:text-blue-900">franco</span><span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-900">loto</span>
                        </span>
                    </Link>
                    <svg
                      onClick={navIconHandler}
                      className='cursor-pointer w-8 h-8 text-blue-900 dark:text-blue-200 dark:hover:text-cyan-200 my-4 mr-5'
                      x-show='!showMenu'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      >
                    <path d='M4 6h16M4 12h16M4 18h16'></path>
                    </svg>

                    <button onClick={onToggleDarkMode} className="mr-2 -ml-48">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-blue-900 hover:text-blue-700 dark:text-blue-200 dark:hover:text-cyan-200"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                                    />
                                </svg>
                            </button>

                    
                </div>

                

                <div className={toggleMenu ? '' : 'hidden'}>
                    <div className='grid grid-cols-1 bg-zinc-100 dark:bg-gray-900 cursor-pointer'>
                        <Link to="/sobre-mi"><div className="mx-3 my-5 text-blue-900 dark:text-blue-300 dark:hover:text-blue-200 hover:text-blue-700 transition">SOBRE MÍ</div></Link>
                        <Link to="/portfolio"><div className="mx-3 my-5 text-blue-900 dark:text-blue-300 dark:hover:text-blue-200 hover:text-blue-700 transition">PORTAFOLIO</div></Link>
                        <Link to="/contacto"><div className="mx-3 my-5 text-blue-900 dark:text-blue-300 dark:hover:text-blue-200 hover:text-blue-700 transition">CONTACTO</div></Link>
                        <div className='mx-3 my-5 text-blue-900 dark:text-blue-300 dark:hover:text-blue-200 hover:text-blue-700 transition'>
                            <a href="/Franco_Loto.pdf" target="_blank" rel="noopener noreferrer">DESCARGAR CV</a>
                        </div>
                    </div>
                </div>

                
                
            </nav>
        </>
    )
}

export default Nav;

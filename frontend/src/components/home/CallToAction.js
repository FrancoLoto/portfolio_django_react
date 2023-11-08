import { Link, useNavigate } from 'react-router-dom'

export default function CTA({ darkMode }) {
    const navigate = useNavigate();

    return (

        <div className={`${darkMode  === "dark" ? "dark" : "light"}`}>
            <div className="mx-auto max-w-full py-10 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8 bg-gray-900 dark:bg-zinc-100 ">
                <h2 className="ml-8 lg:text-3xl font-bold tracking-tight text-gray-900">
                    <span className="block text-3xl text-cyan-400 dark:text-cyan-500 py-1">Trabajamos juntos?</span>
                    <span className="block text-3xl text-white dark:text-blue-900">Si te interesa lo que hago no dudes en contactarme.</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 mr-8">
                    <div className="inline-flex rounded-md shadow">
                        <Link
                        to="/contacto"
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/contacto');
                            window.scrollTo(0, 0);
                          }}
                        className="items-center rounded-md border border-transparent bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-500 hover:dark:bg-cyan-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-celeste-dos transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                        Contactar
                        </Link>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <Link
                        to="/sobre-mi"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/sobre-mi');
                            window.scrollTo(0, 0);
                          }}
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-900 dark:bg-blue-900 hover:dark:bg-blue-950 px-5 py-3 text-base font-medium text-white hover:bg-blue-950"
                        >
                        Aprende más
                        </Link>
                    </div>
                </div>
            </div>
        </div>
 )

}
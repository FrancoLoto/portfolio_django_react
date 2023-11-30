

const AcercaDeMi = ({ darkMode }) => {
    return(
        <div className={`${darkMode  === "dark" ? "dark" : "light"} lg:pb-20 bg-zinc-100 dark:bg-gray-900 text-center`}>
            <div>
            <h4 className="pt-20 pb-14 text-3xl font-semibold text-blue-900 dark:text-cyan-500">Tecnologías que utilizo</h4>
            <h6 className="text-2xl pb-3 text-gray-400">Backend con Django</h6>
            <p className="px-10 dark:text-white">Django, con su estructura elegante y su enfoque en la productividad, es la columna vertebral de mis proyectos. Utilizo su poderoso ORM para gestionar la interacción con la base de datos, aprovechando la eficiencia que ofrece. Además, utilizo librerías clave como DjangoRestFramework para desarrollar APIs potentes, facilitando la creación de servicios web escalables y flexibles.  La seguridad es una prioridad fundamental en mis proyectos, y Django proporciona características integradas que refuerzan la protección contra vulnerabilidades comunes. Esta combinación de herramientas y enfoques en el backend me permite construir aplicaciones web sólidas, seguras y de alto rendimiento.</p>

            <h6 className="text-2xl pt-8 pb-3 text-gray-400">Frontend con React</h6>
            <p className="px-10  dark:text-white">En el lado del frontend, adopto React por su capacidad para construir interfaces de usuario interactivas y dinámicas. Desde componentes reutilizables hasta enrutamiento eficiente, React proporciona la base para experiencias de usuario modernas e intuitivas.</p>

            <h6 className="text-2xl pt-8 pb-3 text-gray-400">Enfoque en la Experiencia del Usuario</h6>
            <p className="px-10 dark:text-white">Entiendo que el éxito de una aplicación web va más allá del código: se trata de la experiencia del usuario. Me esfuerzo por crear interfaces atractivas y amigables que no solo cumplan con los requisitos funcionales, sino que también cautiven a los usuarios desde el primer click.</p>

            <h4 className="pt-20 pb-14 text-3xl font-semibold text-blue-900 dark:text-cyan-500">Mis Servicios</h4>
            <ul>
                <li className="dark:text-white text-xl">-  Desarrollo de Aplicaciones Web</li>
                <li className="dark:text-white text-xl">- Diseño y Desarrollo de Sitios Web</li>
                <li className="dark:text-white text-xl">- Integración de APIs y Servicios Externos</li>
                <li className="dark:text-white text-xl pb-16 lg:pb-8">- Mantenimiento y Soporte Continuo</li>
            </ul>
            </div>
        </div>
    )
}

export default AcercaDeMi
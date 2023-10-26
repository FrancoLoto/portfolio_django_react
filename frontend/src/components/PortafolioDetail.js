import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";


function PortafolioDetail() {

    const [project, setProject] = useState(null);
    const { projectId } = useParams();

    useEffect(() => {
        // Realizar una solicitud GET al endpoint de detalle del proyecto en tu API
        axios.get(`/portfolio/detail/${projectId}`)
          .then((response) => {
            setProject(response.data.project);
          })
          .catch((error) => {
            console.error("Error al obtener los detalles del proyecto", error);
          });
      }, [projectId]);
    
      if (!project) {
        return <div>Cargando...</div>;
      }

      return(
            <>
            <article className="px-4 py-24 mx-auto max-w-7xl" itemid="#" itemscope itemtype="http://schema.org/BlogPosting">
              <div className="w-full mx-auto mb-12 text-left md:w-3/4 lg:w-1/2">
                <img src={project.image} class="object-cover w-full h-64 bg-center rounded-lg" alt="Kutty" />
                <p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">Development</p>
                <h1 className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl" itemprop="headline" title="Rise of Tailwind - A Utility First CSS Framework">
                  {project.title}
                </h1>
                <div className="flex mb-6 space-x-2">
                  <a className="text-gray-900 bg-gray-100 badge hover:bg-gray-200" href={project.github_url} target="_blank" rel="noreferrer">
                  <div className="flex ">
                    Ver en GitHub
                    <svg className="w-5 ml-1.5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                      <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                    </svg>
                  </div>
                  </a>
                  <a className="text-gray-900 bg-gray-100 badge hover:bg-gray-200" href={project.web_url} target="_blank" rel="noreferrer">
                  <div className="flex ">
                    Ver sitio web
                    <svg className="w-6 ml-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  </a>
                </div>
                <div className="flex items-center text-gray-700">
                <div className="ml-2">
                    <p className="text-sm font-semibold text-gray-800">{project.created_at}</p>
                    
                    
                  </div>
                  <div className="ml-2">
                    <p className="text-sm font-semibold text-gray-800">Tecnologías utilizadas</p>
                    {project.tech_tags}
                    
                  </div>
                </div>
              </div>

              <div class="w-full mx-auto prose md:w-3/4 lg:w-1/2">
                <p>
                  {project.description}
                </p>
                <p>Tailwind is a utility-first CSS framework, the keyword being ‘utility’. It is basically a set of classes that you can use in your HTML.</p>
                <pre>
                  
                </pre>
                <p>
                  Therefore, we don’t have to write any custom CSS to get this button. This can be heavily extended to build whole web applications without the need for any other styles apart from a tailwind.
                </p>
                <p>...</p>
              </div>
            </article>
        <Footer />
        </>
      )
}

export default PortafolioDetail
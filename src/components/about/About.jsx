import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode } from 'react-icons/fa';
import { LiaCertificateSolid } from 'react-icons/lia';

const AboutMe = () => {
  return (
    <section className="w-full min-h-[calc(100vh-80px)] bg-background py-16 relative">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="mb-10">
          <h2 className="text-text text-h1 font-roboto">Sobre mí</h2>
        </div>
        
        {/* Contenido principal */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between relative">
          {/* Columna izquierda - Texto */}
          <div className="lg:w-8/12 pr-0 lg:pr-12 z-10">
            <div className="lg:max-w-full">
              <p className="text-text text-h2 mb-2 leading-relaxed">
                Hola, soy Gustavo Bolívar.
              </p>
              <p className="text-text text-h5 mb-2 leading-relaxed">
                Hasta hace poco, llevaba una vida como la de cualquier otra persona, con hobbies y aspiraciones.
                Seguí el camino tradicional: estudié, busqué trabajo y me adapté a lo que se esperaba...
                Pero un día decidí tomar un giro diferente y diseñar mi propio camino.
              </p>
              <p className="text-text text-h5 mb-2 leading-relaxed">
                Ahora, me he propuesto desarrollar y aprovechar al máximo todas mis habilidades en el mundo de la tecnología.
              </p>
              <p className="text-text text-h4 mb-2 leading-relaxed">
                ¿Y adivina qué?
              </p>
              <p className="text-text text-h5 leading-relaxed">
                El resultado ha sido increíblemente satisfactorio y gratificante.
                Me he convertido en un full stack developer motivado y comprometido a seguir creciendo.
                Estoy decidido a convertirme en uno de los mejores en este campo, disfrutando cada paso del proceso.
              </p>
            </div>
          </div>
          
          {/* Columna derecha - Imagen (posición absoluta) */}
          <div className="absolute right-0 lg:right-4 top-0 lg:w-5/12 h-full z-0">
            <div className="relative w-full h-full">
              <img 
                src="/images/robot.png" 
                alt="Robot" 
                className="relative bottom-10 left-[150px] w-full max-w-lg object-contain"
              />
            </div>
          </div>
        </div>

{/* Tarjetas - Centradas debajo */}
<div className="w-full flex justify-center mt-12 z-20 relative">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-5xl">
    {/* Tarjeta Proyectos - Con Link y efecto hover */}
    <Link to="/projects" className="block">
      <div className="bg-card rounded-2xl relative h-48 min-w-[320px] md:w-[500px] cursor-pointer transform transition-transform duration-300 hover:scale-105">
        <div 
          className="absolute w-full h-full top-0 left-0 rounded-2xl"
          style={{
            background: "linear-gradient(30deg, #1C4470 35%, #2963A3 50%, #1C4470 75%)",
            boxShadow: "13px 13px 4px 4px rgba(0, 0, 0, 0.25)"
          }}
        ></div>
        <div className="relative z-10 p-6 h-full flex flex-col justify-center">
          <div className="flex items-center justify-between mb-3">
            <span className="text-text text-h4 bg-primario rounded-3xl bg-opacity-50 px-2 py-2">
              <FaCode />
            </span>
            <span className="text-text text-h2">4</span>
          </div>
          <h3 className="text-text text-h3 font-roboto mb-1">Proyectos</h3>
          <p className="text-text text-h5">Mira lo que he construido</p>
        </div>
      </div>
    </Link>
    
    {/* Tarjeta Certificados - Con Link y efecto hover */}
    <Link to="/certificates" className="block">
      <div className="bg-card rounded-2xl relative h-48 min-w-[320px] md:w-[500px] cursor-pointer transform transition-transform duration-300 hover:scale-105">
        <div 
          className="absolute w-full h-full top-0 left-0 rounded-2xl"
          style={{
            background: "linear-gradient(30deg, #1C4470 35%, #2963A3 50%, #1C4470 75%)",
            boxShadow: "13px 13px 4px 4px rgba(0, 0, 0, 0.25)"
          }}
        ></div>
        <div className="relative z-10 p-6 h-full flex flex-col justify-center">
          <div className="flex items-center justify-between mb-3">
            <span className="text-text text-h4 bg-primario rounded-3xl bg-opacity-50 px-2 py-2">
              <LiaCertificateSolid />
            </span>
            <span className="text-text text-h2">3</span>
          </div>
          <h3 className="text-text text-h3 font-roboto mb-1">Certificados</h3>
          <p className="text-text text-h5">Mira mis certificaciones</p>
        </div>
      </div>
    </Link>
  </div>
</div>
      </div>
    </section>
  );
};

export default AboutMe;




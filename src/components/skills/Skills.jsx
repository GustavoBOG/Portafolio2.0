// import React, { useState } from 'react';
// import { TbWorld } from "react-icons/tb";
// import { FaGear } from "react-icons/fa6";
// import { BsTools } from "react-icons/bs";

// const Skills = () => {
//   const [activeCategory, setActiveCategory] = useState('FRONTEND');

//   // Datos de habilidades organizados por categoría
//   const skillsData = {
//     FRONTEND: [
//       { name: 'HTML5', icon: '/images/skills/html5.png', alt: 'Logo de HTML5' },
//       { name: 'CSS', icon: '/images/skills/css.png', alt: 'Logo de CSS' },
//       { name: 'JAVASCRIPT', icon: '/images/skills/js.png', alt: 'Logo de JavaScript' },
//       { name: 'REACT', icon: '/images/skills/react.png', alt: 'Logo de React' },
//       { name: 'NPM', icon: '/images/skills/npm.png', alt: 'Logo de NPM' },
//       { name: 'TAILWIND', icon: '/images/skills/tailwind.png', alt: 'Logo de Tailwind' }
//     ],
//     BACKEND: [
//       { name: 'MYSQL', icon: '/images/skills/mySQL.png', alt: 'Logo de MySQL' },
//       { name: 'EXPRESS', icon: '/images/skills/express.png', alt:'Logo de Express'},
//       { name: 'JWT', icon: '/images/skills/jwt.png', alt: 'Logo de JWT' },
//       { name: 'NODE', icon: '/images/skills/node.png', alt: 'Logo de NODE' },
//     ],
//     TOOLS: [
//       { name: 'VS CODE', icon: '/images/skills/vsc.png', alt: 'Logo de VISUAL ESTUDIO CODE' },
//       { name: 'MYSQL', icon: '/images/skills/mySQL.png', alt: 'Logo de MySQL' },
//       { name: 'POSTMAN', icon: '/images/skills/postman.png', alt: 'Logo de POSTMAN' },
//       { name: 'SLACK', icon: '/images/skills/slack.png', alt: 'Logo de SLACK' },
//       { name: 'DISCORD', icon: '/images/skills/discord.png', alt: 'Logo de DISCORD' },
//       { name: 'NOTION', icon: '/images/skills/notion.png', alt: 'Logo de NOTION' },
//       { name: 'GITBASH', icon: '/images/skills/gitbash.png', alt: 'Logo de GITBASH' },
//       { name: 'GITHUB', icon: '/images/skills/github.png', alt: 'Logo de GITHUB' },
//       { name: 'FIGMA', icon: '/images/skills/figma.png', alt: 'Logo de FIGMA' },
//       { name: 'MEET', icon: '/images/skills/meet.png', alt: 'Logo de MEET' },
//       { name: 'ZOOM', icon: '/images/skills/zoom.png', alt: 'Logo de ZOOM' },
//       { name: 'TRELLO', icon: '/images/skills/trello.png', alt: 'Logo de TRELLO' }

//     ]
//   };

//   const categoryLayout = {
//     FRONTEND: { cols: 3, rows: 2 },
//     BACKEND: { cols: 4, rows: 1 },
//     TOOLS: { cols: 6, rows: 2 }
//   };

//   const categoryIcons = {
//     FRONTEND: <TbWorld className=" text-text text-h1" />,
//     BACKEND: <FaGear className="text-text text-h1" />,
//     TOOLS: <BsTools className="text-text text-h1" />
//   };

//   return (
//     <section className="w-full min-h-[calc(100vh-80px)] bg-background py-10 relative">
//       <div >
//         {/* Título */}
//         <div className=" text-center">
//           <h2 className="text-text text-h1 font-roboto">Skills</h2>
//         </div>
        
//         {/* Pestañas de Categorías - Ancho completo */}
//         <div className="mb-10 w-full bg-header py-4 px-6 relative">
//           <div className="grid grid-cols-3 gap-12 max-w-4xl w-full mx-auto">
//             {Object.keys(skillsData).map((category) => (
//               <button
//                 key={category}
//                 className={`flex flex-col items-center justify-center p-6 rounded-xl cursor-pointer transition-all duration-300 ${
//                   activeCategory === category ? 'bg-midnightBlue' : 'shadow-inner shadow-white/10'
//                 }`}
//                 style={{
//                   boxShadow: activeCategory === category ? '8px 8px 4px rgba(0, 0, 0, 0.25)' : 'inset 8px 8px 4px rgba(15, 15, 15, 0.46)'
//                 }}
//                 onClick={() => setActiveCategory(category)}
//               >
//                 <div className="mb-2">
//                   {categoryIcons[category]}
//                 </div>
//                 <span className="text-text font-roboto text-h4">{category}</span>
//               </button>
//             ))}
//           </div>
//         </div>
        
//         {/* Cuadrícula de Habilidades */}
//         <div className="flex justify-center">
//           <div 
//             className={`grid gap-8 max-w-6xl w-full`}
//             style={{
//               gridTemplateColumns: `repeat(${categoryLayout[activeCategory].cols}, minmax(0, 1fr))`,
//               gridTemplateRows: `repeat(${categoryLayout[activeCategory].rows}, minmax(0, 1fr))`
//             }}
//           >
//             {skillsData[activeCategory].map((skill, index) => (
//               <div 
//                 key={index} 
//                 className="flex flex-col items-center justify-center p-4"
//               >
//                 <div>
//                   <img 
//                     src={skill.icon} 
//                     alt={skill.alt}
//                     className="w-16 h-16 object-contain" 
//                   />
//                 </div>
//                 <span className="text-text text-center font-roboto">{skill.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React, { useState } from 'react';
import { TbWorld } from "react-icons/tb";
import { FaGear } from "react-icons/fa6";
import { BsTools } from "react-icons/bs";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('FRONTEND');

  const skillsData = {
    FRONTEND: [
      { name: 'HTML5', icon: '/images/skills/html5.png', alt: 'Logo de HTML5' },
      { name: 'CSS', icon: '/images/skills/css.png', alt: 'Logo de CSS' },
      { name: 'JAVASCRIPT', icon: '/images/skills/js.png', alt: 'Logo de JavaScript' },
      { name: 'REACT', icon: '/images/skills/react.png', alt: 'Logo de React' },
      { name: 'NPM', icon: '/images/skills/npm.png', alt: 'Logo de NPM' },
      { name: 'TAILWIND', icon: '/images/skills/tailwind.png', alt: 'Logo de Tailwind' }
    ],
    BACKEND: [
      { name: 'MYSQL', icon: '/images/skills/mySQL.png', alt: 'Logo de MySQL' },
      { name: 'EXPRESS', icon: '/images/skills/express.png', alt:'Logo de Express'},
      { name: 'JWT', icon: '/images/skills/jwt.png', alt: 'Logo de JWT' },
      { name: 'NODE', icon: '/images/skills/node.png', alt: 'Logo de NODE' },
    ],
    TOOLS: [
      { name: 'VS CODE', icon: '/images/skills/vsc.png', alt: 'Logo de VISUAL ESTUDIO CODE' },
      { name: 'MYSQL', icon: '/images/skills/mySQL.png', alt: 'Logo de MySQL' },
      { name: 'POSTMAN', icon: '/images/skills/postman.png', alt: 'Logo de POSTMAN' },
      { name: 'SLACK', icon: '/images/skills/slack.png', alt: 'Logo de SLACK' },
      { name: 'DISCORD', icon: '/images/skills/discord.png', alt: 'Logo de DISCORD' },
      { name: 'NOTION', icon: '/images/skills/notion.png', alt: 'Logo de NOTION' },
      { name: 'GITBASH', icon: '/images/skills/gitbash.png', alt: 'Logo de GITBASH' },
      { name: 'GITHUB', icon: '/images/skills/github.png', alt: 'Logo de GITHUB' },
      { name: 'FIGMA', icon: '/images/skills/figma.png', alt: 'Logo de FIGMA' },
      { name: 'MEET', icon: '/images/skills/meet.png', alt: 'Logo de MEET' },
      { name: 'ZOOM', icon: '/images/skills/zoom.png', alt: 'Logo de ZOOM' },
      { name: 'TRELLO', icon: '/images/skills/trello.png', alt: 'Logo de TRELLO' }
    ]
  };

  const categoryLayout = {
    FRONTEND: { cols: 3, rows: 2 },
    BACKEND: { cols: 4, rows: 1 },
    TOOLS: { cols: 6, rows: 2 }
  };

  const categoryIcons = {
    FRONTEND: <TbWorld className=" text-text text-h1" />,
    BACKEND: <FaGear className="text-text text-h1" />,
    TOOLS: <BsTools className="text-text text-h1" />
  };

  return (
    <section className="w-full min-h-[calc(100vh-80px)] bg-background py-10 relative">
      <div>
        <div className=" text-center">
          <h2 className="text-text text-h1 font-roboto">Skills</h2>
        </div>
        
        <div className="mb-10 w-full bg-header py-4 px-6 relative">
          <div className="grid grid-cols-3 gap-4  w-full mx-auto"> 
            {Object.keys(skillsData).map((category) => (
              <button
                key={category}
                className={`flex flex-col items-center justify-center py-2  rounded-xl cursor-pointer transition-all duration-300 ${
                  activeCategory === category ? 'bg-[#264470]' : 'shadow-inner shadow-white/10'
                }`}
                style={{
                  boxShadow: activeCategory === category ? '8px 8px 4px rgba(0, 0, 0, 0.25)' : 'inset 8px 8px 4px  rgba(15, 15, 15, 0.46)'
                }}
                onClick={() => setActiveCategory(category)}
              >
                <div className="mb-2">
                  {categoryIcons[category]}
                </div>
                <span className="text-text font-roboto text-h4">{category}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center">
          <div 
            className={`grid gap-8 max-w-6xl w-full`}
            style={{
              gridTemplateColumns: `repeat(${categoryLayout[activeCategory].cols}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${categoryLayout[activeCategory].rows}, minmax(0, 1fr))`
            }}
          >
            {skillsData[activeCategory].map((skill, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center p-4"
              >
                <div>
                  <img 
                    src={skill.icon} 
                    alt={skill.alt}
                    className="w-36 h-36 object-contain hover:scale-125 transition-all" 
                  />
                </div>
                <span className="text-text text-h5 text-center font-roboto mt-5 ">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
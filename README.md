import React, { useState } from 'react';

// const Skills = () => {
//   const [activeCategory, setActiveCategory] = useState('FRONTEND');

//   // Datos de habilidades organizados por categoría
//   const skillsData = {
//     FRONTEND: [
//       { name: 'HTML5', icon: '/images/skills/html5.png', alt: 'Logo de HTML5' },
//       { name: 'CSS', icon: '/images/skills/css.png', alt: 'Logo de CSS' },
//       { name: 'JAVASCRIPT', icon: '/images/skills/javascript.png', alt: 'Logo de JavaScript' },
//       { name: 'REACT', icon: '/images/skills/react.png', alt: 'Logo de React' },
//       { name: 'ANGULAR', icon: '/images/skills/angular.png', alt: 'Logo de Angular' },
//       { name: 'VUE', icon: '/images/skills/vue.png', alt: 'Logo de Vue' }
//     ],
//     BACKEND: [
//       { name: 'NPM', icon: '/images/skills/npm.png', alt: 'Logo de NPM' },
//       { name: 'NODE', icon: '/images/skills/node.png', alt: 'Logo de Node.js' },
//       { name: 'EXPRESS', icon: '/images/skills/express.png', alt: 'Logo de Express' },
//       { name: 'MONGODB', icon: '/images/skills/mongodb.png', alt: 'Logo de MongoDB' }
//     ],
//     TOOLS: [
//       { name: 'TAILWIND', icon: '/images/skills/tailwind.png', alt: 'Logo de Tailwind' },
//       { name: 'GIT', icon: '/images/skills/git.png', alt: 'Logo de Git' },
//       { name: 'GITHUB', icon: '/images/skills/github.png', alt: 'Logo de GitHub' },
//       { name: 'FIGMA', icon: '/images/skills/figma.png', alt: 'Logo de Figma' },
//       { name: 'VS CODE', icon: '/images/skills/vscode.png', alt: 'Logo de VS Code' },
//       { name: 'POSTMAN', icon: '/images/skills/postman.png', alt: 'Logo de Postman' },
//       { name: 'JIRA', icon: '/images/skills/jira.png', alt: 'Logo de Jira' },
//       { name: 'DOCKER', icon: '/images/skills/docker.png', alt: 'Logo de Docker' },
//       { name: 'AWS', icon: '/images/skills/aws.png', alt: 'Logo de AWS' },
//       { name: 'FIREBASE', icon: '/images/skills/firebase.png', alt: 'Logo de Firebase' },
//       { name: 'JEST', icon: '/images/skills/jest.png', alt: 'Logo de Jest' },
//       { name: 'CYPRESS', icon: '/images/skills/cypress.png', alt: 'Logo de Cypress' }
//     ]
//   };

//   // Configuración de visualización para cada categoría
//   const categoryLayout = {
//     FRONTEND: { cols: 3, rows: 2 },
//     BACKEND: { cols: 4, rows: 1 },
//     TOOLS: { cols: 6, rows: 2 }
//   };

//   // Iconos para las categorías
//   const categoryIcons = {
//     FRONTEND: (
//       <svg className="w-8 h-8 text-text" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
//       </svg>
//     ),
//     BACKEND: (
//       <svg className="w-8 h-8 text-text" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
//       </svg>
//     ),
//     TOOLS: (
//       <svg className="w-8 h-8 text-text" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
//       </svg>
//     )
//   };

//   return (
//     <section className="w-full min-h-[calc(100vh-80px)] bg-background py-16 relative">
//       <div className="container mx-auto px-4">
//         {/* Título */}
//         <div className="mb-10 text-center">
//           <h2 className="text-text text-h1 font-roboto">Skills</h2>
//         </div>
        
//         {/* Pestañas de Categorías - Ancho completo */}
//         <div className="mb-10 w-full bg-header py-4 px-6 relative">
//           <div className="grid grid-cols-3 gap-4 max-w-4xl w-full mx-auto">
//             {Object.keys(skillsData).map((category) => (
//               <button
//                 key={category}
//                 className={`flex flex-col items-center justify-center p-6 rounded-xl cursor-pointer transition-all duration-300 ${
//                   activeCategory === category ? 'bg-midnightBlue' : 'shadow-inner shadow-white/10'
//                 }`}
//                 style={{
//                   boxShadow: activeCategory === category ? '8px 8px 4px rgba(0, 0, 0, 0.25)' : 'inset 1px 1px 3px rgba(255, 255, 255, 0.1)'
//                 }}
//                 onClick={() => setActiveCategory(category)}
//               >
//                 <div className="mb-2">
//                   {categoryIcons[category]}
//                 </div>
//                 <span className="text-text font-roboto text-h3">{category}</span>
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
//                 <div 
//                   className="bg-card rounded-2xl relative h-32 w-32 flex items-center justify-center mb-4 overflow-hidden"
//                   style={{
//                     boxShadow: "8px 8px 4px rgba(0, 0, 0, 0.25)"
//                   }}
//                 >
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


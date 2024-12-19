// import { useState } from "react";
// import { ArrowUpRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import projectImg from "@/assets/hellcat.jpg";

// export interface Project {
//   id: number;
//   name: string;
//   category: string;
//   image: string;
//   link: string;
// }

// const projects: Project[] = [
//   {
//     id: 1,
//     name: "sharlee",
//     category: "Branding",
//     image: projectImg,
//     link: "/work/sharlee",
//   },
//   {
//     id: 2,
//     name: "act responsable",
//     category: "Web Development",
//     image: projectImg,
//     link: "/work/act-responsable",
//   },
//   {
//     id: 3,
//     name: "dua lipa",
//     category: "Portrait",
//     image: projectImg,
//     link: "/work/dua-lipa",
//   },
//   {
//     id: 4,
//     name: "cocolyze",
//     category: "UX/UI Design",
//     image: projectImg,
//     link: "/work/cocolyze",
//   },
//   {
//     id: 5,
//     name: "les indécis",
//     category: "Branding",
//     image: projectImg,
//     link: "/work/les-indecis",
//   },
// ];

// export function WorkPage() {
//   const [activeProject] = useState<Project | null>(null);
//   const navigate = useNavigate();

//   const handleProjectClick = (project: Project) => {
//     navigate(`/project/${project.id}`, { state: { project } });
//   };

//   return (
//     <div className="min-h-screen mt-16 w-full bg-gradient-to-br from-white via-white to-green-50 py-6 md:py-12 px-4">
//       <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 shadow-lg rounded-lg bg-white">
//         {/* Preview Section */}
//         <div className="relative h-[300px] md:h-[450px] lg:h-[650px] rounded-xl overflow-hidden bg-gray-100 shadow-md order-2 lg:order-1">
//           <AnimatePresence>
//             {activeProject ? (
//               <motion.img
//                 key={activeProject.id}
//                 src={activeProject.image}
//                 alt={activeProject.name}
//                 className="absolute inset-0 w-full h-full object-cover"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               />
//             ) : (
//               <div className="flex items-center justify-center h-full text-gray-400 text-center">
//                 Hover over a project to preview
//               </div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Projects List Section */}
//         <div className="flex flex-col py-6 md:py-12 px-4 md:px-8 order-1 lg:order-2">
//           <div className="flex justify-between items-start mb-8 md:mb-16">
//             <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-gray-800">
//               WORK
//             </h1>
//             <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
//               {projects.length}
//             </span>
//           </div>

//           <div className="space-y-4 md:space-y-6">
//             {projects.map((project) => (
//               <div
//                 key={project.id}
//                 className="group cursor-pointer"
//                 onClick={() => handleProjectClick(project)}
//               >
//                 <a
//                   href=""
//                   className="flex justify-between items-center py-3 md:py-6 border-b border-gray-300 group-hover:bg-gray-50 transition-all rounded-lg px-2 md:px-4"
//                 >
//                   <div className="flex items-center gap-2 md:gap-3">
//                     <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
//                     <span className="text-base md:text-xl font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
//                       {project.name}
//                     </span>
//                   </div>
//                   <span className="text-xs md:text-sm font-medium text-gray-600">
//                     {project.category}
//                   </span>
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WorkPage;
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import projectImg from "@/assets/hellcat.jpg";

export interface Project {
  id: number;
  name: string;
  category: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "sharlee",
    category: "Branding",
    image: projectImg,
    link: "/work/sharlee",
  },
  {
    id: 2,
    name: "act responsable",
    category: "Web Development",
    image: projectImg,
    link: "/work/act-responsable",
  },
  {
    id: 3,
    name: "dua lipa",
    category: "Portrait",
    image: projectImg,
    link: "/work/dua-lipa",
  },
  {
    id: 4,
    name: "cocolyze",
    category: "UX/UI Design",
    image: projectImg,
    link: "/work/cocolyze",
  },
  {
    id: 5,
    name: "les indécis",
    category: "Branding",
    image: projectImg,
    link: "/work/les-indecis",
  },
];

export function WorkPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(
    projects[0]
  );
  const navigate = useNavigate();

  const handleProjectClick = (project: Project) => {
    navigate(`/project/${project.id}`, { state: { project } });
  };

  const handleProjectHover = (project: Project) => {
    setActiveProject(project);
  };

  return (
    <div className="min-h-screen mt-16 w-full bg-gradient-to-br from-white via-white to-green-50 py-6 md:py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 shadow-lg rounded-lg bg-white">
        {/* Preview Section */}
        <div className="relative h-[300px] md:h-[450px] lg:h-[650px] rounded-xl overflow-hidden bg-gray-100 shadow-md order-2 lg:order-1">
          <AnimatePresence>
            {activeProject ? (
              <motion.img
                key={activeProject.id}
                src={activeProject.image}
                alt={activeProject.name}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400 text-center">
                Hover over a project to preview
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Projects List Section */}
        <div className="flex flex-col py-6 md:py-12 px-4 md:px-8 order-1 lg:order-2">
          <div className="flex justify-between items-start mb-8 md:mb-16">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-gray-800">
              WORK
            </h1>
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
              {projects.length}
            </span>
          </div>

          <div className="space-y-4 md:space-y-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => handleProjectClick(project)}
                onMouseEnter={() => handleProjectHover(project)}
              >
                <a
                  href=""
                  className="flex justify-between items-center py-3 md:py-6 border-b border-gray-300 group-hover:bg-gray-50 transition-all rounded-lg px-2 md:px-4"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-base md:text-xl font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                      {project.name}
                    </span>
                  </div>
                  <span className="text-xs md:text-sm font-medium text-gray-600">
                    {project.category}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkPage;

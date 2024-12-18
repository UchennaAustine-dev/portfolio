import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import projectImg from "@/assets/hellcat.jpg";

interface Project {
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
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-white to-green-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-12 shadow-lg rounded-lg">
        {/* Preview Section */}
        <div className="relative h-[650px] rounded-xl overflow-hidden bg-gray-100 shadow-md">
          <AnimatePresence>
            {activeProject && (
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
            )}
          </AnimatePresence>
        </div>

        {/* Projects List Section */}
        <div className="flex flex-col">
          <div className="flex justify-between items-start mb-16">
            <h1 className="text-4xl font-bold tracking-wide text-gray-800">
              WORK
            </h1>
            <span className="text-4xl font-semibold text-gray-800">
              {projects.length}
            </span>
          </div>

          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onMouseEnter={() => setActiveProject(project)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <a
                  href={project.link}
                  className="flex justify-between items-center py-6 border-b border-gray-300 group-hover:bg-gray-50 transition-all rounded-lg px-4"
                >
                  <div className="flex items-center gap-3">
                    <ArrowUpRight className="w-6 h-6 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-xl font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                      {project.name}
                    </span>
                  </div>
                  <span className="text-gray-600 text-sm font-medium">
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

// ProjectDetailedPage.tsx
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Project } from "./WorkPage";

const ProjectDetailedPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if the project is available in the location state
  const project = location.state?.project as Project | undefined;

  if (!project) {
    // Redirect to the work page if the project is not available
    navigate("/work");
    return null;
  }

  const handleBackClick = () => {
    navigate("/work");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-white to-green-50 py-6 md:py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 shadow-lg rounded-lg bg-white">
        {/* Project Image */}
        <div className="relative h-[300px] md:h-[450px] lg:h-[650px] rounded-xl overflow-hidden bg-gray-100 shadow-md order-2 lg:order-1">
          <img
            src={project.image}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Project Details */}
        <div className="flex flex-col py-6 md:py-12 px-4 md:px-8 order-1 lg:order-2">
          <div className="flex justify-between items-start mb-8 md:mb-16">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-gray-800">
              {project.name}
            </h1>
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
              {project.category}
            </span>
          </div>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.
          </p>

          <div className="flex justify-between items-center mt-8 md:mt-12">
            <a
              href={project.link}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
              View Project
            </a>
            <button
              onClick={handleBackClick}
              className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
            >
              Back to Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailedPage;

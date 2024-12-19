// // ProjectDetailedPage.tsx
// import { useLocation, useNavigate } from "react-router-dom";
// import { ArrowUpRight } from "lucide-react";
// import { Project } from "./WorkPage";

// const ProjectDetailedPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Check if the project is available in the location state
//   const project = location.state?.project as Project | undefined;

//   if (!project) {
//     // Redirect to the work page if the project is not available
//     navigate("/work");
//     return null;
//   }

//   const handleBackClick = () => {
//     navigate("/work");
//   };

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-white via-white to-green-50 py-6 md:py-12 px-4">
//       <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 shadow-lg rounded-lg bg-white">
//         {/* Project Image */}
//         <div className="relative h-[300px] md:h-[450px] lg:h-[650px] rounded-xl overflow-hidden bg-gray-100 shadow-md order-2 lg:order-1">
//           <img
//             src={project.image}
//             alt={project.name}
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//         </div>

//         {/* Project Details */}
//         <div className="flex flex-col py-6 md:py-12 px-4 md:px-8 order-1 lg:order-2">
//           <div className="flex justify-between items-start mb-8 md:mb-16">
//             <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-gray-800">
//               {project.name}
//             </h1>
//             <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
//               {project.category}
//             </span>
//           </div>

//           <p className="text-base md:text-lg text-gray-700 leading-relaxed">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
//             perspiciatis unde omnis iste natus error sit voluptatem accusantium
//             doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
//             inventore veritatis et quasi architecto beatae vitae dicta sunt
//             explicabo.
//           </p>

//           <div className="flex justify-between items-center mt-8 md:mt-12">
//             <a
//               href={project.link}
//               className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
//             >
//               <ArrowUpRight className="w-4 h-4" />
//               View Project
//             </a>
//             <button
//               onClick={handleBackClick}
//               className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
//             >
//               Back to Work
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetailedPage;
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

  const handleNextProject = () => {
    // Logic to navigate to the next project
    // For simplicity, we'll assume projects are in an array and we navigate to the next index
    // You can implement this logic based on your project list
  };

  const handlePreviousProject = () => {
    // Logic to navigate to the previous project
    // For simplicity, we'll assume projects are in an array and we navigate to the previous index
    // You can implement this logic based on your project list
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-white to-green-50 py-6 md:py-12 px-4">
      <div className="container mx-auto">
        {/* Project Header */}
        <div className="flex justify-between items-center mb-8 md:mb-16">
          <button
            onClick={handleBackClick}
            className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
          >
            Back to Work
          </button>
          <div className="flex items-center gap-4">
            <button
              onClick={handlePreviousProject}
              className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
            >
              Previous Project
            </button>
            <button
              onClick={handleNextProject}
              className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
            >
              Next Project
            </button>
          </div>
        </div>

        {/* Project Image */}
        <div className="relative h-[300px] md:h-[450px] lg:h-[650px] rounded-xl overflow-hidden bg-gray-100 shadow-md mb-8 md:mb-16">
          <img
            src={project.image}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Project Details */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 md:mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-gray-800 mb-4">
              {project.name}
            </h1>
            <div className="flex flex-col md:flex-row md:items-center md:gap-8 mb-4">
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-600 mb-2">
                  Category
                </h2>
                <p className="text-base md:text-lg text-gray-700">
                  {project.category}
                </p>
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-600 mb-2">
                  Year
                </h2>
                <p className="text-base md:text-lg text-gray-700">2022</p>
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-600 mb-2">
                  Awards
                </h2>
                <p className="text-base md:text-lg text-gray-700">
                  1x Awwwards (Honors)
                  <br />
                  1x CSS Design Awards (Site of the day)
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Sharlee is the nickname I use on social medias. The goal of this
              project was to create my own identity, adaptable and modular to
              work with both my real name and my nickname. First, the identity
              needed to be defined in brand guidelines and then had to be
              adapted for digital medias (website, wallpapers, social medias)
              and physical formats (business cards/stickers, letter paper and
              resume).
            </p>
          </div>
        </div>

        {/* Brand Guidelines */}
        <div className="mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Brand Guidelines
          </h2>
          <div className="flex flex-col md:flex-row md:items-center md:gap-8">
            <div className="md:w-1/3">
              <img
                src={project.image}
                alt="Brand Guidelines"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {/* Add your brand guidelines content here */}
              </p>
            </div>
          </div>
        </div>

        {/* Project Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePreviousProject}
            className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
          >
            Previous Project
          </button>
          <a
            href={project.link}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <ArrowUpRight className="w-4 h-4" />
            View Project
          </a>
          <button
            onClick={handleNextProject}
            className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
          >
            Next Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailedPage;

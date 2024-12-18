import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleProjects = () => navigate("/work");
  const handleLearnMore = () => navigate("/about");

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen text-center">
      <div className="max-w-4xl w-full space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
            <div className="animate-fade-in font-medium leading-tight sm:leading-[1.2] mb-4">
              Welcome! I'm{" "}
              <span className="text-blue-600 dark:text-blue-400 font-bold block sm:inline">
                Onwuka Uchenna Austine
              </span>
            </div>
            <div className="animate-fade-in [animation-delay:200ms] font-medium leading-tight">
              Or simply call me
              <span className="text-purple-600 dark:text-purple-400 italic font-bold block sm:inline">
                {" "}
                {`</Austine>`}{" "}
              </span>
            </div>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 animate-fade-in [animation-delay:400ms] leading-relaxed px-4 sm:px-0">
            Your go-to
            <span className="text-green-600 font-bold">
              {" "}
              Full-Stack Developer
            </span>
            ,
            <br />
            passionate about solving complex problems and crafting exceptional
            digital experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-4 animate-fade-in [animation-delay:600ms] text-base sm:text-xl">
          <Button
            variant="link"
            className="text-blue-700 dark:text-blue-300 hover:text-blue-500 font-semibold transition-all duration-500 ease-in-out w-full sm:w-auto"
            onClick={handleProjects}
          >
            → Explore My Projects
          </Button>
          <Button
            variant="link"
            className="text-blue-700 dark:text-blue-300 hover:text-blue-500 font-semibold transition-all duration-500 ease-in-out w-full sm:w-auto"
            onClick={handleLearnMore}
          >
            → Discover More About Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;

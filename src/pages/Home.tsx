import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleProjects = () => navigate("/work");
  const handleLearnMore = () => navigate("/about");

  return (
    <div className="space-y-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-800 dark:text-gray-100 space-y-2">
        <div className="animate-fade-in font-medium leading-[70px] ">
          Welcome! I’m{" "}
          <span className="text-blue-600 dark:text-blue-400 font-bold">
            Onwuka Uchenna Austine
          </span>
        </div>
        <div className="animate-fade-in [animation-delay:200ms] mt-8 font-medium">
          Or simply call me
          <span className="text-purple-600 dark:text-purple-400 italic font-bold">
            {" "}
            {`</Austine>`}{" "}
          </span>
        </div>
      </h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 animate-fade-in [animation-delay:400ms] leading-relaxed">
        Your go-to
        <span className="text-green-600 font-bold"> Full-Stack Developer</span>,
        <br />
        passionate about solving complex problems and crafting exceptional
        digital experiences.
      </p>

      <div className="flex justify-center gap-6 pt-4 animate-fade-in [animation-delay:600ms] text-xl ">
        <Button
          variant="link"
          className="text-blue-700 dark:text-blue-300 hover:text-blue-500 font-semibold transition-all duration-500 ease-in-out"
          onClick={handleProjects}
        >
          → Explore My Projects
        </Button>
        <Button
          variant="link"
          className="text-blue-700 dark:text-blue-300 hover:text-blue-500 font-semibold transition-all duration-500 ease-in-out"
          onClick={handleLearnMore}
        >
          → Discover More About Me
        </Button>
      </div>
    </div>
  );
};

export default Home;

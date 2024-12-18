import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => navigate("/about");

  return (
    <div className="space-y-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-800 dark:text-gray-100 space-y-2">
        <div className="animate-fade-in">
          HI, I'M{" "}
          <span className="text-gray-900 dark:text-white">
            CHARLES BRUYERRE
          </span>
        </div>
        <div className="animate-fade-in [animation-delay:200ms]">
          BUT YOU CAN CALL ME{" "}
          <span className="text-gray-900 dark:text-white">SHARLEE</span>
        </div>
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 animate-fade-in [animation-delay:400ms]">
        I'm a graphic designer, UX/UI designer
        <br />& front-end web developer
      </p>

      <div className="flex justify-center gap-6 pt-4 animate-fade-in [animation-delay:600ms]">
        <Button
          variant="link"
          className="text-gray-800 dark:text-gray-200 hover:text-gray-600"
        >
          view my projects
        </Button>
        <Button
          variant="link"
          className="text-gray-800 dark:text-gray-200 hover:text-gray-600"
          onClick={handleLearnMore}
        >
          learn more
        </Button>
      </div>
    </div>
  );
};

export default Home;

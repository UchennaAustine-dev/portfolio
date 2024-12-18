import { ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function About() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-hidden animate-fade-in">
      {/* Top navigation elements */}
      <div className="absolute top-6 left-6 flex items-center gap-4">
        <button
          onClick={() => navigate("/")}
          className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
        >
          <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600" />
        </button>
      </div>

      {/* Circular "brat" logo */}
      <div className="absolute top-6 right-6">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full bg-green-400/80 dark:bg-green-500/80 flex items-center justify-center">
            <span className="text-white text-sm font-medium">brat</span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full animate-spin-slow [animation-duration:12s]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  id="circle"
                  d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                  className="text-gray-700 dark:text-gray-300"
                />
                <text className="text-[8px] fill-current">
                  <textPath href="#circle">
                    now playing · now playing · now playing ·
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-6 pt-32">
        <h1 className="text-6xl font-bold tracking-tight text-gray-800 dark:text-gray-100 mb-12">
          ABOUT
        </h1>
        <div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 mb-12" />
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
          Hey, my name is Charles Bruyerre and I use Sharlee as my nickname
          across social medias. I'm a graphic designer, UX/UI designer &
          front-end web developer from France. I'm also passionate about pop
          music and make portraits and universes around what I listen to and I'm
          always curious to learn more when it comes to new technologies and
          creative coding.
        </p>
        <a
          href="#resume"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors group"
        >
          <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
          <span className="font-light tracking-wide">resume</span>
        </a>
      </div>
    </div>
  );
}

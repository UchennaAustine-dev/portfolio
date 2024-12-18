import { useNavigate } from "react-router-dom";

interface NavigationMenuProps {
  isMenuOpen: boolean;
}

export function NavigationMenu({ isMenuOpen }: NavigationMenuProps) {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    // You might want to add a prop to close the menu in the parent component
  };

  return (
    <div
      className={`fixed inset-0 bg-white dark:bg-gray-900 z-40 transition-transform duration-500 ease-in-out ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <nav className="space-y-8">
          <div
            onClick={() => handleNavigation("/")}
            className="block group cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400 font-mono">01</span>
              <span className="text-4xl md:text-6xl font-bold tracking-tight text-gray-800 dark:text-gray-200 font-space-grotesk group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                HOME
              </span>
            </div>
          </div>
          <div
            onClick={() => handleNavigation("/work")}
            className="block group cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400 font-mono">02</span>
              <span className="text-4xl md:text-6xl font-bold tracking-tight text-gray-800 dark:text-gray-200 font-space-grotesk group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                WORK
              </span>
            </div>
          </div>
          <div
            onClick={() => handleNavigation("/about")}
            className="block group cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400 font-mono">03</span>
              <span className="text-4xl md:text-6xl font-bold tracking-tight text-gray-800 dark:text-gray-200 font-space-grotesk group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 transition-all duration-300">
                ABOUT
              </span>
            </div>
          </div>
          <div
            onClick={() => handleNavigation("/contact")}
            className="block group cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400 font-mono">04</span>
              <span className="text-4xl md:text-6xl font-bold tracking-tight text-gray-800 dark:text-gray-200 font-space-grotesk group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 transition-all duration-300">
                CONTACT
              </span>
            </div>
          </div>
        </nav>

        <div className="mt-20 flex gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            instagram
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            behance
          </a>
        </div>
      </div>
    </div>
  );
}

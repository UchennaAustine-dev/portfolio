// import { Moon, Menu, X, Sun } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useState, useEffect } from "react";
// import { NavigationMenu } from "./NavigationMenu";

// const Header = () => {
//   const [isDark, setIsDark] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     // Directly manipulating the document's class for dark mode
//     document.documentElement.classList.toggle("dark", isDark);
//   }, [isDark]);

//   const toggleTheme = () => setIsDark(!isDark);
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <>
//       <header className="p-6 flex justify-between items-center relative z-50">
//         <div
//           className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold"
//           aria-label="Personal Logo"
//         >
//           S
//         </div>

//         <nav className="flex items-center gap-4">
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={toggleTheme}
//             aria-label="Toggle dark mode"
//             className="transition-transform hover:scale-110"
//           >
//             {isDark ? (
//               <Sun className="h-5 w-5" />
//             ) : (
//               <Moon className="h-5 w-5" />
//             )}
//           </Button>

//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={toggleMenu}
//             aria-label="Toggle menu"
//             className={`transition-all duration-300 hover:scale-110 ${
//               isMenuOpen ? "rotate-45" : ""
//             }`}
//           >
//             {isMenuOpen ? (
//               <X className="h-5 w-5" />
//             ) : (
//               <Menu className="h-5 w-5" />
//             )}
//           </Button>
//         </nav>
//       </header>

//       <NavigationMenu isMenuOpen={isMenuOpen} />
//     </>
//   );
// };

// export default Header;

// import { Moon, Menu, X, Sun } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useState, useEffect } from "react";
// import { NavigationMenu } from "./NavigationMenu";

// const Header = () => {
//   const [isDark, setIsDark] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     // Directly manipulating the document's class for dark mode
//     document.documentElement.classList.toggle("dark", isDark);
//   }, [isDark]);

//   const toggleTheme = () => setIsDark(!isDark);
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const closeMenu = () => setIsMenuOpen(false);

//   return (
//     <>
//       <header className="p-6 flex justify-between items-center relative z-50">
//         <div
//           className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold"
//           aria-label="Personal Logo"
//         >
//           S
//         </div>

//         <nav className="flex items-center gap-4">
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={toggleTheme}
//             aria-label="Toggle dark mode"
//             className="transition-transform hover:scale-110"
//           >
//             {isDark ? (
//               <Sun className="h-5 w-5" />
//             ) : (
//               <Moon className="h-5 w-5" />
//             )}
//           </Button>

//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={toggleMenu}
//             aria-label="Toggle menu"
//             className={`transition-all duration-300 hover:scale-110 ${
//               isMenuOpen ? "rotate-45" : ""
//             }`}
//           >
//             {isMenuOpen ? (
//               <X className="h-5 w-5" />
//             ) : (
//               <Menu className="h-5 w-5" />
//             )}
//           </Button>
//         </nav>
//       </header>

//       <NavigationMenu isMenuOpen={isMenuOpen} onMenuClose={closeMenu} />
//     </>
//   );
// };

// export default Header;

import { Moon, Menu, X, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { NavigationMenu } from "./NavigationMenu";
import { Logo } from "./Logo";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="p-6 flex justify-between items-center relative z-50">
        <Logo
          className="transition-transform hover:scale-110 cursor-pointer duration-500 ease-in-out"
          aria-label="Onwuka Uchenna Austine - Software Developer"
        />

        <nav className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="transition-transform hover:scale-110"
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className={`transition-all duration-300 hover:scale-110 ${
              isMenuOpen ? "rotate-45" : ""
            }`}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </nav>
      </header>

      <NavigationMenu isMenuOpen={isMenuOpen} onMenuClose={closeMenu} />
    </>
  );
};

export default Header;

// import { ArrowDown } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export function About() {
//   const navigate = useNavigate();

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden animate-fade-in">
//       {/* Top navigation elements */}
//       <div className="absolute top-6 left-6 flex items-center gap-4">
//         <button
//           onClick={() => navigate("/")}
//           className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
//         >
//           <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600" />
//         </button>
//       </div>

//       {/* Circular "brat" logo */}
//       <div className="absolute top-6 right-6">
//         <div className="relative w-16 h-16">
//           <div className="absolute inset-0 rounded-full bg-green-400/80 dark:bg-green-500/80 flex items-center justify-center">
//             <span className="text-white text-sm font-medium">brat</span>
//           </div>
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-full h-full animate-spin-slow [animation-duration:12s]">
//               <svg viewBox="0 0 100 100" className="w-full h-full">
//                 <path
//                   id="circle"
//                   d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
//                   fill="none"
//                   className="text-gray-700 dark:text-gray-300"
//                 />
//                 <text className="text-[8px] fill-current">
//                   <textPath href="#circle">
//                     now playing · now playing · now playing ·
//                   </textPath>
//                 </text>
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="max-w-3xl mx-auto px-6 pt-32">
//         <h1 className="text-6xl font-bold tracking-tight text-gray-800 dark:text-gray-100 mb-12">
//           ABOUT
//         </h1>
//         <div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 mb-12" />
//         <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
//           Hey, my name is Charles Bruyerre and I use Sharlee as my nickname
//           across social medias. I'm a graphic designer, UX/UI designer &
//           front-end web developer from France. I'm also passionate about pop
//           music and make portraits and universes around what I listen to and I'm
//           always curious to learn more when it comes to new technologies and
//           creative coding.
//         </p>
//         <a
//           href="#resume"
//           className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors group"
//         >
//           <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
//           <span className="font-light tracking-wide">resume</span>
//         </a>
//       </div>
//     </div>
//   );
// }

// import { ArrowDown } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import aboutImage from "../assets/hellcat.jpg";

// export function About() {
//   const navigate = useNavigate();

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden bg-[#F5F5F5] text-[#1E1E1E] animate-fade-in">
//       {/* Top navigation elements */}
//       <div className="absolute top-6 left-6 flex items-center gap-4">
//         <button
//           onClick={() => navigate("/")}
//           className="w-8 h-8 rounded-full border border-[#1E1E1E] flex items-center justify-center hover:bg-[#1E1E1E] hover:text-[#F5F5F5] transition-colors"
//         >
//           <div className="w-2 h-2 rounded-full bg-[#1E1E1E] group-hover:bg-[#F5F5F5]" />
//         </button>
//       </div>

//       {/* Circular "brat" logo */}
//       <div className="absolute top-6 right-6">
//         <div className="relative w-16 h-16">
//           <div className="absolute inset-0 rounded-full bg-[#1E1E1E] flex items-center justify-center">
//             <span className="text-[#F5F5F5] text-sm font-medium">brat</span>
//           </div>
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-full h-full animate-spin-slow [animation-duration:12s]">
//               <svg viewBox="0 0 100 100" className="w-full h-full">
//                 <path
//                   id="circle"
//                   d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
//                   fill="none"
//                   className="text-[#1E1E1E]"
//                 />
//                 <text className="text-[8px] fill-current">
//                   <textPath href="#circle">
//                     now playing · now playing · now playing ·
//                   </textPath>
//                 </text>
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="max-w-5xl mx-auto px-6 pt-32">
//         <h1 className="text-6xl font-bold tracking-tight mb-12">ABOUT</h1>
//         <div className="h-px bg-[#1E1E1E] mb-12" />
//         <div className="flex flex-col md:flex-row gap-12">
//           <div className="md:w-1/2">
//             <p className="text-lg leading-relaxed mb-12">
//               Hey, my name is Charles Bruyerre and I use Sharlee as my nickname
//               across social medias. I'm a graphic designer, UX/UI designer &
//               front-end web developer from France. I'm also passionate about pop
//               music and make portraits and universes around what I listen to and
//               I'm always curious to learn more when it comes to new technologies
//               and creative coding.
//             </p>
//             <a
//               href="#resume"
//               className="inline-flex items-center gap-2 text-[#1E1E1E] hover:underline transition-all group"
//             >
//               <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
//               <span className="font-light tracking-wide">resume</span>
//             </a>
//           </div>
//           <div className="md:w-1/2 mb-5">
//             <img
//               src={aboutImage}
//               alt="Charles Bruyerre"
//               className="w-full h-auto rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Background text */}
//       <div className="absolute bottom-0 left-0 w-full overflow-hidden">
//         <p className="text-[200px] font-bold text-[#1E1E1E]/5 whitespace-nowrap animate-marquee">
//           ONWUKA UCHENNA AUSTINE
//         </p>
//       </div>
//     </div>
//   );
// }

import { ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import aboutImage from "../assets/hellcat.jpg";

export function About() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#F5F5F5] text-[#1E1E1E] animate-fade-in">
      {/* Top navigation elements */}
      <div className="absolute top-6 left-6 flex items-center gap-4">
        <button
          onClick={() => navigate("/")}
          className="w-8 h-8 rounded-full border border-[#1E1E1E] flex items-center justify-center hover:bg-[#1E1E1E] hover:text-[#F5F5F5] transition-colors"
        >
          <div className="w-2 h-2 rounded-full bg-[#1E1E1E] group-hover:bg-[#F5F5F5]" />
        </button>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 pt-32">
        <h1 className="text-6xl font-extrabold tracking-tight mb-12 text-[#1E1E1E]">
          Meet Austine
        </h1>
        <div className="h-px bg-[#1E1E1E] mb-12" />
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed mb-12">
              Hey there! I’m <strong>Onwuka Uchenna Austine</strong>, but feel
              free to call me <strong>Austine</strong>. I’m a dedicated {""}
              <span className="text-[#FF5733]">
                Full-Stack Software Developer
              </span>
              , on a mission to transform wild ideas into groundbreaking digital
              realities. From crafting sleek, responsive designs to architecting
              robust back-end systems, I breathe life into technology—one line
              of code at a time.
            </p>
            <p className="text-lg leading-relaxed mb-12">
              With expertise in{" "}
              <span className="text-[#FF5733]">JavaScript</span>,{" "}
              <span className="text-[#FF5733]">TypeScript</span>,{" "}
              <span className="text-[#FF5733]">React Vite</span>, and{" "}
              <span className="text-[#FF5733]">Next Js</span>, and{" "}
              <span className="text-[#FF5733]">Node.js etc...</span>, I
              specialize in building high-performance web applications that
              balance innovation and functionality. Whether it’s creating
              stunning user interfaces or diving deep into cloud architecture,
              I’m all about delivering impactful solutions that leave a lasting
              impression.
            </p>
            {/* <p className="text-lg leading-relaxed mb-12">
              When I’m not immersed in code, you’ll find me exploring
              open-source projects, sharing insights as a tech educator, or
              experimenting with the latest in{" "}
              <span className="text-[#FF5733]">AI</span> and{" "}
              <span className="text-[#FF5733]">machine learning</span>. My
              ultimate goal? To inspire, innovate, and empower through
              technology.
            </p> */}
            <a
              href="#resume"
              className="inline-flex items-center gap-2 text-[#1E1E1E] hover:text-[#FF5733] hover:underline transition-all group cursor-pointer my-5"
            >
              <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
              <span className="font-medium tracking-wide">View My Resume</span>
            </a>
          </div>
          <div className="md:w-1/2 mb-5">
            <img
              src={aboutImage}
              alt="Onwuka Uchenna Austine"
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            />
          </div>
        </div>
      </div>

      {/* Background text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <p className="text-[200px] font-extrabold text-[#1E1E1E]/5 whitespace-nowrap animate-marquee">
          ONWUKA UCHENNA AUSTINE
        </p>
      </div>
    </div>
  );
}

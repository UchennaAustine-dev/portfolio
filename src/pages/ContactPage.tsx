// import { ArrowUpRight, Circle } from "lucide-react";
// import { Link } from "react-router-dom";

// export function ContactPage() {
//   return (
//     <div className="min-h-screen w-full">
//       <div className="max-w-6xl mx-auto px-6 py-5">
//         {/* Header */}
//         <h1 className="text-[120px] font-light tracking-wide text-[#6B7280] mb-10">
//           CONTACT
//         </h1>
//         <div className="w-full h-[5px] bg-slate-400 mb-24" />

//         {/* Contact Information */}
//         <div className="grid md:grid-cols-2 gap-24">
//           {/* Mail Section */}
//           <div className="space-y-6">
//             <div className="flex items-center gap-4">
//               <h2 className="text-2xl text-[#6B7280] tracking-wide">MAIL</h2>
//               <Circle className="w-4 h-4 text-[#6B7280]" />
//             </div>
//             <Link
//               to="uchennaaustine8@gmail.com"
//               className="group inline-flex items-center gap-2 text-[#6B7280] hover:text-[#4B5563] transition-colors"
//             >
//               <span className="text-xl tracking-wide">
//                 uchennaaustine8@gmail.com
//               </span>
//               <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//             </Link>
//           </div>

//           {/* Social Media Section */}
//           <div className="space-y-6">
//             <h2 className="text-2xl text-[#6B7280] tracking-wide">
//               SOCIAL MEDIAS
//             </h2>
//             <div className="space-y-4">
//               <Link
//                 to="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group inline-flex items-center gap-2 text-[#6B7280] hover:text-[#4B5563] transition-colors"
//               >
//                 <span className="text-xl tracking-wide">instagram</span>
//                 <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//               </Link>
//               <br />
//               <Link
//                 to="https://behance.net"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group inline-flex items-center gap-2 text-[#6B7280] hover:text-[#4B5563] transition-colors"
//               >
//                 <span className="text-xl tracking-wide">behance</span>
//                 <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { ArrowUpRight, Circle } from "lucide-react";

export function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-5">
        {/* Header */}
        <h1 className="text-[50px] md:text-[90px] font-bold tracking-wide text-gray-800 dark:text-gray-100 mb-10">
          Get In Touch
        </h1>
        <div className="w-full h-[5px] bg-gray-400 dark:bg-gray-700 mb-24" />

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-24">
          {/* Email Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 tracking-wide">
                Email Me
              </h2>
              <Circle className="w-5 h-5 text-gray-800 dark:text-gray-100" />
            </div>
            <a
              href="mailto:uchennaaustine8@gmail.com"
              className="group inline-flex items-center gap-2 text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span className="text-xl tracking-wide font-medium">
                uchennaaustine8@gmail.com
              </span>
              <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          {/* Phone Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 tracking-wide">
                Call Me
              </h2>
              <Circle className="w-5 h-5 text-gray-800 dark:text-gray-100" />
            </div>
            <a
              href="tel:+1234567890"
              className="group inline-flex items-center gap-2 text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span className="text-xl tracking-wide font-medium">
                +234 902 439 1654
              </span>
              <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          {/* Social Media Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 tracking-wide">
              Connect Online
            </h2>
            <div className="space-y-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span className="text-xl tracking-wide font-medium">
                  Instagram
                </span>
                <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span className="text-xl tracking-wide font-medium">
                  Behance
                </span>
                <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

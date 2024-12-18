import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className = "" }) => {
  const navigate = useNavigate();

  return (
    <div className={`relative ${className}`} onClick={() => navigate("/")}>
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-20 transform rotate-45"></div>
        <span className="text-white font-bold text-lg relative z-10">OUA</span>
      </div>
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-gray-900"></div>
    </div>
  );
};

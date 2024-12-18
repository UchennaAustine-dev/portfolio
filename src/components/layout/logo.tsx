import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" className="block w-12 h-12">
      <div className="text-[#6B7280] hover:text-[#4B5563] transition-colors">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
            fill="currentColor"
            fillOpacity="0.1"
          />
          <path
            d="M15.5 28.5c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>
    </Link>
  );
}

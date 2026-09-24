import React from "react";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant = "dark" }) => {
  const isDark = variant === "dark";

  return (
    <div className={`flex items-center gap-2.5 font-sans select-none ${className}`}>
      {/* Icon: Modern energy hexagon with electric pulse */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 via-cyan-500 to-emerald-400 p-[2px] shadow-sm shadow-sky-500/20">
        <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
          <svg
            className="w-5 h-5 text-cyan-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1">
          <span className={`text-xl font-extrabold tracking-tight ${isDark ? "text-slate-900" : "text-white"}`}>
            GRUPO
          </span>
          <span className="text-xl font-black tracking-wider bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
            EMAX
          </span>
        </div>
        <span className={`text-[10px] uppercase font-semibold tracking-widest ${isDark ? "text-slate-500" : "text-slate-400"}`}>
          Consulting Energético
        </span>
      </div>
    </div>
  );
};

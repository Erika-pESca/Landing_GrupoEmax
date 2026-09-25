import React from "react";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light"; // "dark": letras oscuras para fondos claros (Navbar); "light": letras blancas para fondos oscuros (Footer)
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant = "dark" }) => {
  const isDark = variant === "dark";

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {isDark ? (
        /* Logotipo oficial para fondo claro (Barra de Navegación) */
        <img
          src="/imagenes/logo_header_transparent.png"
          alt="Grupo EMAX"
          className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 hover:scale-105"
        />
      ) : (
        /* Logotipo oficial para fondo oscuro (Footer) */
        <img
          src="/imagenes/logo_footer_transparent.png"
          alt="Grupo EMAX"
          className="h-9 sm:h-11 w-auto object-contain transition-transform duration-200 hover:scale-105"
        />
      )}
    </div>
  );
};

"use client";

import React from "react";

export const RedEnergiaFondo: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Malla SVG vectorial sutil y elegante en segundo plano (opacidad suave para óptima legibilidad del texto) */}
      <svg
        className="absolute w-full h-full opacity-20 sm:opacity-30 transition-opacity duration-300"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Degradados cinéticos suaves */}
          <linearGradient id="gradienteCircuito1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
            <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.7" />
            <stop offset="80%" stopColor="#34d399" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="gradienteCircuito2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.2" />
          </linearGradient>

          {/* Filtro de resplandor neón sutil */}
          <filter id="resplandorNeon" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Trazos de circuito cibernético sutiles (líneas finas elegants) */}
        <g stroke="url(#gradienteCircuito1)" fill="none">
          {/* Línea principal de circuito superior */}
          <path
            d="M-50 180 L220 180 L340 300 L580 300 L680 190 L950 190 L1080 320 L1500 320"
            strokeWidth="1.2"
            className="animate-circuit-flow"
          />

          {/* Línea secundaria de circuito con ángulo */}
          <path
            d="M120 -30 L120 240 L280 400 L460 400 L560 500 L850 500"
            strokeWidth="1"
            className="animate-circuit-flow-reverse"
          />

          {/* Conexiones de malla inferior */}
          <path
            d="M250 720 L420 560 L780 560 L940 720 L1280 720"
            strokeWidth="1"
            className="animate-circuit-flow"
          />
        </g>

        {/* 2. Red de constelación tipo Plexus (Triángulos y nodos enlazados sutiles) */}
        <g stroke="url(#gradienteCircuito2)" fill="none" opacity="0.6">
          {/* Polígonos de constelación suaves */}
          <polygon
            points="220,180 340,300 280,400"
            fill="#38bdf8"
            fillOpacity="0.02"
            stroke="#38bdf8"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <polygon
            points="680,190 950,190 850,340"
            fill="#34d399"
            fillOpacity="0.02"
            stroke="#34d399"
            strokeWidth="1"
          />
          <polygon
            points="950,190 1080,320 1200,200"
            fill="#22d3ee"
            fillOpacity="0.02"
            stroke="#22d3ee"
            strokeWidth="1"
            strokeDasharray="6 3"
          />
          <polygon
            points="420,560 560,500 640,640"
            fill="#0284c7"
            fillOpacity="0.02"
            stroke="#38bdf8"
            strokeWidth="1"
          />

          {/* Líneas interconectadas de constelación tenue */}
          <line x1="220" y1="180" x2="680" y2="190" stroke="#38bdf8" strokeWidth="0.8" opacity="0.4" />
          <line x1="340" y1="300" x2="460" y2="400" stroke="#34d399" strokeWidth="0.8" opacity="0.4" />
          <line x1="850" y1="340" x2="1080" y2="320" stroke="#22d3ee" strokeWidth="0.8" opacity="0.4" />
        </g>

        {/* 3. Nodos de energía suaves con pulso concéntrico discreto */}
        <g filter="url(#resplandorNeon)">
          {/* Nodo 1 */}
          <circle cx="220" cy="180" r="4" fill="#38bdf8" />
          <circle cx="220" cy="180" r="9" stroke="#38bdf8" strokeWidth="1" fill="none" opacity="0.5" className="animate-ping" style={{ animationDuration: "3s" }} />

          {/* Nodo 2 */}
          <circle cx="340" cy="300" r="4" fill="#34d399" />
          <circle cx="340" cy="300" r="8" stroke="#34d399" strokeWidth="1" fill="none" opacity="0.5" />

          {/* Nodo 3 */}
          <circle cx="680" cy="190" r="4.5" fill="#38bdf8" />
          <circle cx="680" cy="190" r="10" stroke="#38bdf8" strokeWidth="1" fill="none" opacity="0.4" className="animate-ping" style={{ animationDuration: "3.5s" }} />

          {/* Nodo 4 */}
          <circle cx="950" cy="190" r="4" fill="#34d399" />
          <circle cx="950" cy="190" r="9" stroke="#34d399" strokeWidth="1" fill="none" opacity="0.5" />

          {/* Nodo 5 */}
          <circle cx="1080" cy="320" r="4.5" fill="#22d3ee" />
          <circle cx="1080" cy="320" r="10" stroke="#22d3ee" strokeWidth="1" fill="none" opacity="0.4" className="animate-ping" style={{ animationDuration: "2.8s" }} />

          {/* Nodo 6 */}
          <circle cx="280" cy="400" r="3.5" fill="#38bdf8" />

          {/* Nodo 7 */}
          <circle cx="460" cy="400" r="3.5" fill="#34d399" />

          {/* Nodo 8 */}
          <circle cx="560" cy="500" r="4" fill="#22d3ee" />
          <circle cx="560" cy="500" r="9" stroke="#22d3ee" strokeWidth="1" fill="none" opacity="0.5" />

          {/* Nodo 9 */}
          <circle cx="780" cy="560" r="3.5" fill="#38bdf8" />
        </g>
      </svg>
    </div>
  );
};

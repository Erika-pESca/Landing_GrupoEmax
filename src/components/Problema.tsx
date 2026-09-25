"use client";

import React from "react";
import Image from "next/image";
import { AlertTriangle, FileQuestion, Gauge, RefreshCw, UserX } from "lucide-react";

export const Problema: React.FC = () => {
  const painPoints = [
    {
      icon: FileQuestion,
      title: "Facturas indescifrables",
      description:
        "Términos técnicos confusos, peajes regulados y conceptos opacos diseñados para que no entiendas exactamente por qué sube tu recibo cada mes.",
      stat: "8 de cada 10",
      statLabel: "españoles no entienden su factura",
    },
    {
      icon: Gauge,
      title: "Potencia sobredimensionada",
      description:
        "Pagas mes a mes por una potencia contratada que jamás llegas a consumir. Un coste fijo directo al bolsillo que nadie te avisa de optimizar.",
      stat: "Hasta 240 €/año",
      statLabel: "tirados en potencia no utilizada",
    },
    {
      icon: RefreshCw,
      title: "Subidas ocultas en renovaciones",
      description:
        "Las ofertas gancho expiran a los 12 meses y las comercializadoras te renuevan automáticamente a precios de mercado muy superiores.",
      stat: "+35% de subida",
      statLabel: "promedio en el segundo año de contrato",
    },
    {
      icon: UserX,
      title: "Nadie defiende tus intereses",
      description:
        "Las eléctricas defienden sus márgenes empresariales y sus call centers te atienden con robots. Nadie audita tu caso de manera 100% imparcial.",
      stat: "0 Asesoramiento",
      statLabel: "imparcial por parte de las comercializadoras",
    },
  ];

  return (
    <section id="problema" className="py-10 md:py-14 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la sección con Avatar personalizado */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 max-w-4xl mx-auto mb-8 md:mb-10 text-center md:text-left">
          {/* Avatar ilustrativo de usuario confundido */}
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/40 via-violet-500/30 to-sky-400/40 rounded-full blur-xl opacity-60 animate-pulse-subtle" />
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-slate-100 border-4 border-white shadow-xl overflow-hidden flex items-center justify-center">
              <img
                src="/imagenes/avatar_confundido.png"
                alt="Usuario confundido examinando la factura de luz y gas"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Pequeño globo de diálogo con icono de alerta */}
            <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30 animate-bounce text-sm">
              ❓
            </span>
          </div>

          {/* Textos del encabezado */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <AlertTriangle className="w-3.5 h-3.5 text-indigo-600" />
              La realidad del mercado energético español
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              ¿Por qué la mayoría de personas pagan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600 font-black">
                mucho más de lo debido
              </span>
              ?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              El sistema energético está diseñado para ser complejo y opaco. Identificar las trampas de tu contrato es el primer paso para recuperar el control de tu dinero.
            </p>
          </div>
        </div>

        {/* Cuadrícula de puntos de dolor (Estilo Claro Premium Moderno con acentos Morado Índigo / Azul Eléctrico) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            const stepNumber = `0${index + 1}`;
            return (
              <div
                key={index}
                className="relative group rounded-2xl bg-gradient-to-b from-white to-slate-50/80 border border-slate-200/90 p-6 sm:p-7 shadow-md shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-300/80 transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
              >
                {/* Resplandor decorativo sutil en hover */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/15 transition-all duration-300 pointer-events-none" />

                <div>
                  {/* Encabezado de la tarjeta: Ícono y número de paso */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50/80 border border-indigo-100 text-indigo-600 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:via-violet-600 group-hover:to-sky-500 group-hover:text-white group-hover:shadow-md group-hover:shadow-indigo-500/25 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-extrabold text-indigo-700 bg-indigo-50/90 border border-indigo-200/80 px-2.5 py-1 rounded-full shadow-2xs">
                      {stepNumber}
                    </span>
                  </div>

                  {/* Título del problema */}
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Descripción detallada */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bloque inferior destacado con la métrica de impacto */}
                <div className="pt-4 border-t border-indigo-100/80 mt-auto bg-indigo-50/50 -mx-6 -mb-6 p-4 rounded-b-2xl group-hover:bg-indigo-100/60 transition-colors">
                  <span className="block text-lg font-black text-indigo-700 tracking-tight flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
                    {item.stat}
                  </span>
                  <span className="text-xs text-slate-600 font-medium">
                    {item.statLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

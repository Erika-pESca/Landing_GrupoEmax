"use client";

import React from "react";
import { AlertTriangle, FileQuestion, Gauge, RefreshCw, UserX } from "lucide-react";

export const ProblemSection: React.FC = () => {
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
    <section id="problema" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            La realidad del mercado energético español
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            ¿Por qué la mayoría de personas pagan{" "}
            <span className="text-rose-600 underline decoration-rose-300 underline-offset-4">
              mucho más de lo debido
            </span>
            ?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            El sistema energético está diseñado para ser complejo y opaco. Identificar las trampas de tu contrato es el primer paso para recuperar el control de tu dinero.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative group rounded-2xl bg-slate-50 border border-slate-200/80 p-6 hover:bg-white hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-rose-100/70 text-rose-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 mt-auto">
                  <span className="block text-lg font-black text-rose-600 tracking-tight">
                    {item.stat}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {item.statLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom banner transition to solution */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-white">
              ¿Sospechas que tu comercializadora te está cobrando de más?
            </h4>
            <p className="text-sm text-slate-300">
              No tienes que descifrarlo por tu cuenta. En Grupo EMAX lo revisamos gratuitamente en menos de 24 horas.
            </p>
          </div>
          <a
            href="#formulario"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm transition-colors whitespace-nowrap shadow-md shadow-sky-500/20"
          >
            Revisar mi factura gratis
          </a>
        </div>
      </div>
    </section>
  );
};

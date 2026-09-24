"use client";

import React from "react";
import { CheckCircle2, Shield, Search, Zap, Layers, HeartHandshake } from "lucide-react";

export const SolutionSection: React.FC = () => {
  const pillars = [
    {
      icon: Search,
      title: "Auditoría Técnica y Comparación Imparcial",
      description:
        "Analizamos los últimos 12 meses de tu curva de consumo real, no solo la última factura. Comparamos más de 40 comercializadoras activas en el mercado español para dar con la fórmula matemática más ventajosa para ti.",
    },
    {
      icon: Zap,
      title: "Optimización Quirúrgica de Potencia",
      description:
        "Calculamos la potencia pico exacta que demandan tus electrodomésticos o maquinaria. Reducimos los tramos sobredimensionados para que dejes de regalar dinero cada mes en el término fijo de potencia.",
    },
    {
      icon: Layers,
      title: "Soluciones 360° en un Único Punto de Contacto",
      description:
        "Desde la luz y el gas de tu hogar o empresa, hasta climatización eficiente (aerotermia), autoconsumo con placas solares y baterías inteligentes con IA. Si genera o consume energía, EMAX lo optimiza.",
    },
    {
      icon: HeartHandshake,
      title: "Asesor Personal Dedicado Todo el Año",
      description:
        "Nos convertimos en tu departamento energético particular. Vigilamos el mercado constantemente y, si surge una mejor opción o intentan subirte los precios al renovar, te avisamos para actuar a tiempo.",
    },
  ];

  return (
    <section id="solucion" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5 text-sky-600" />
            La Solución EMAX
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Tu centro de soluciones energéticas 360°,{" "}
            <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
              no una comercializadora más
            </span>
            .
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            No vendemos tarifas enlatadas. Realizamos un estudio minucioso de tus hábitos de consumo para diseñar una solución a medida que minimiza tu gasto y protege tu economía.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-600 to-cyan-500 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-sky-500/20">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Independence manifesto banner */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-sky-600/20 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-2">
              Nuestro Compromiso de Independencia
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              “No representamos a ninguna compañía eléctrica. Representamos única y exclusivamente tus intereses.”
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              A diferencia de los intermediarios tradicionales que colocan la tarifa que les ofrece mayor comisión, en Grupo EMAX trabajamos con total transparencia. Si tu contrato actual ya es el más económico, te lo decimos con honestidad y no te cambiamos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2 text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Auditoría 100% Imparcial</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Sin costes ocultos</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Libertad total del cliente</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

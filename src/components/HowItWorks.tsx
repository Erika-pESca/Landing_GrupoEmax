"use client";

import React from "react";
import { UploadCloud, SearchCheck, CheckCircle2, ArrowRight } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: UploadCloud,
      title: "Nos envías tu factura",
      subtitle: "Menos de 1 minuto",
      description:
        "Adjuntas una foto o PDF de tu última factura de luz o gas a través del formulario (o nos dejas tus datos de contacto para que te llamemos). No necesitas recopilar historiales ni papeleos.",
    },
    {
      number: "02",
      icon: SearchCheck,
      title: "Auditamos tu consumo real",
      subtitle: "Análisis en 24h",
      description:
        "Nuestros consultores energéticos analizan tu curva horaria de potencia y comparan los precios actuales con las mejores ofertas vigentes del mercado regulado y libre en España.",
    },
    {
      number: "03",
      icon: CheckCircle2,
      title: "Recibes tu propuesta y ahorras",
      subtitle: "Decides con total libertad",
      description:
        "Te presentamos un informe claro con los euros exactos que ahorrarás al año. Si das tu visto bueno, tramitamos el cambio administrativo sin cortes ni complicaciones.",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-4">
            Proceso transparente y ágil
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Ahorrar en tu factura en{" "}
            <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              solo 3 pasos sencillos
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Sin visitas domiciliarias, sin trámites bancarios complejos y sin perder ni un segundo de tu tiempo.
          </p>
        </div>

        {/* 3 Steps Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl bg-slate-50 border border-slate-200/80 p-8 flex flex-col justify-between hover:bg-white hover:shadow-xl hover:border-slate-300 transition-all duration-300"
              >
                {/* Step badge & icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black tracking-tight text-slate-300 group-hover:text-sky-500 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-sky-600 text-white flex items-center justify-center shadow-md shadow-sky-600/25">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center text-xs font-semibold text-slate-500">
                  <span>Paso {index + 1} de 3</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fast Action Callout */}
        <div className="mt-14 text-center">
          <a
            href="#formulario"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white bg-slate-900 hover:bg-slate-800 shadow-xl shadow-slate-900/15 transition-all transform hover:-translate-y-0.5"
          >
            <span>Iniciar el Paso 1: Enviar mi factura</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

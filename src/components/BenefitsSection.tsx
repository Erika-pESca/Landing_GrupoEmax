"use client";

import React from "react";
import {
  Coins,
  TrendingDown,
  FileCheck2,
  PowerOff,
  UserCheck,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Coins,
      title: "100% Gratuito y sin permanencia",
      description:
        "El diagnóstico y auditoría no tienen coste para ti. Si tras analizar tu factura vemos que ya tienes la mejor opción, te lo decimos con honestidad y sigues igual.",
      tag: "Sin riesgo",
    },
    {
      icon: TrendingDown,
      title: "Ahorro directo desde el primer mes",
      description:
        "Reducimos tanto el término fijo (potencia) como el término variable (energía consumida), logrando un recorte de hasta el 40% en tu recibo mensual.",
      tag: "Hasta 40% ahorro",
    },
    {
      icon: FileCheck2,
      title: "Cero papeleos: nos encargamos de todo",
      description:
        "Olvídate de trámites farragosos, formularios confusos o esperas interminables al teléfono. Nuestro equipo gestiona la transición de principio a fin.",
      tag: "Gestión total",
    },
    {
      icon: PowerOff,
      title: "Garantía de suministro ininterrumpido",
      description:
        "El cambio es puramente administrativo según la normativa del mercado español. Jamás habrá cortes de luz o gas ni visitas molestas de técnicos.",
      tag: "100% Seguro",
    },
    {
      icon: UserCheck,
      title: "Tu propio asesor energético dedicado",
      description:
        "Nada de hablar con contestadores impersonales. Tendrás un asesor personal asignado con contacto directo para resolver cualquier duda o consulta.",
      tag: "Trato humano",
    },
    {
      icon: ShieldCheck,
      title: "Vigilancia activa frente a subidas sorpresa",
      description:
        "Monitorizamos tu contrato continuamente. Cuando se acerque la fecha de renovación, revisamos las condiciones para que no te apliquen tarifas abusivas.",
      tag: "Blindaje continuo",
    },
  ];

  return (
    <section id="beneficios" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4">
            <CheckCircle className="w-3.5 h-3.5 text-sky-600" />
            Por qué elegir Grupo EMAX
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Beneficios pensados para tu{" "}
            <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              tranquilidad y bolsillo
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Un servicio integral y transparente que convierte el laberinto de las eléctricas en una experiencia simple, rentable y segura.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors duration-200 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-emerald-50 group-hover:text-emerald-700 group-hover:border-emerald-200 transition-colors">
                      {benefit.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-sky-600 group-hover:text-sky-700">
                  <span>Ventaja garantizada por contrato</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

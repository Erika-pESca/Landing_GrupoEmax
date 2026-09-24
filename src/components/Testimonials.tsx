"use client";

import React from "react";
import { Star, Quote, TrendingDown, Building, Home, UtensilsCrossed } from "lucide-react";

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Laura & David Gómez",
      role: "Hogar Particular · Madrid",
      icon: Home,
      rating: 5,
      savings: "460 €/año (-37%)",
      quote:
        "Pensábamos que 140€ de luz al mes era lo normal. En Grupo EMAX revisaron nuestra factura y descubrieron que teníamos contratada casi el doble de la potencia que necesitábamos. En 24h nos gestionaron el cambio sin cortes ni molestias.",
    },
    {
      name: "Carlos M. Santillana",
      role: "Gerente Restaurante La Forja · Valencia",
      icon: UtensilsCrossed,
      rating: 5,
      savings: "2.180 €/año (-39%)",
      quote:
        "En hostelería el gasto de cámaras y cocinas es brutal. EMAX nos eliminó penalizaciones por energía reactiva y nos negoció una tarifa para pymes imbatible. Tener un asesor con nombre y apellidos al que llamar es un lujo.",
    },
    {
      name: "Marta R. Valls",
      role: "Directora Operaciones Estudio Coworking · Barcelona",
      icon: Building,
      rating: 5,
      savings: "1.420 €/año (-32%)",
      quote:
        "Totalmente transparentes. Lo mejor es que no te venden la moto: auditaron las facturas de nuestras dos sedes, hicieron el comparativo con 30 comercializadoras y se encargaron de todo el papeleo. Recomiendo 100%.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            Experiencias reales de clientes en España
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Casos de éxito que ya pagan{" "}
            <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              el precio justo por su energía
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Miles de familias y empresas ya disfrutan de tranquilidad y ahorro continuo gracias al asesoramiento independiente de Grupo EMAX.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => {
            const Icon = rev.icon;
            return (
              <div
                key={index}
                className="rounded-3xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between hover:shadow-xl hover:bg-white transition-all duration-300 relative group"
              >
                <div>
                  {/* Top rating & quote mark */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-slate-200 group-hover:text-sky-200 transition-colors" />
                  </div>

                  {/* Savings highlighted badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold mb-4">
                    <TrendingDown className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Ahorro certificado: {rev.savings}</span>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                    “{rev.quote}”
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-200/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {rev.name}
                    </h4>
                    <span className="text-xs text-slate-500 font-medium">
                      {rev.role}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

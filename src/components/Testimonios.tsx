"use client";

import React, { useState } from "react";
import {
  Star,
  Quote,
  TrendingDown,
  Building2,
  Home,
  UtensilsCrossed,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Receipt,
  FileCheck,
  Clock,
} from "lucide-react";

interface CaseStudy {
  id: string;
  tabLabel: string;
  type: string;
  location: string;
  clientName: string;
  role: string;
  avatarColor: string;
  icon: any;
  quote: string;
  ticketRef: string;
  cupsCode: string;
  date: string;
  powerBefore: string;
  powerAfter: string;
  energyPriceBefore: string;
  energyPriceAfter: string;
  extraCharges: string;
  monthlyBefore: string;
  monthlyAfter: string;
  annualSavings: string;
  percentSavings: string;
  summaryProblem: string;
  summaryTime: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "hogar-madrid",
    tabLabel: "01. Hogar en Madrid",
    type: "Vivienda Familiar · 95 m²",
    location: "Madrid Centro (28004)",
    clientName: "Laura & David Gómez",
    role: "Particulares · Tarifa Dual (Luz + Gas)",
    avatarColor: "from-sky-500 to-cyan-500",
    icon: Home,
    quote:
      "Pensábamos que 140€ de luz al mes era lo normal. En Grupo EMAX revisaron nuestra factura y descubrieron que teníamos contratada casi el doble de la potencia que necesitábamos. En 24h nos gestionaron el cambio sin cortes ni molestias.",
    ticketRef: "EMAX-MAD-8921",
    cupsCode: "ES0021************0F",
    date: "12/01/2026",
    powerBefore: "5.5 kW (39,40 €)",
    powerAfter: "3.4 kW (24,10 €)",
    energyPriceBefore: "0,189 €/kWh",
    energyPriceAfter: "0,119 €/kWh",
    extraCharges: "Eliminados seguros extra (-11,80 €/m)",
    monthlyBefore: "140,20 €",
    monthlyAfter: "88,10 €",
    annualSavings: "460,00 €",
    percentSavings: "-37%",
    summaryProblem: "Potencia sobredimensionada + seguro de urgencias eléctricas no solicitado.",
    summaryTime: "Estudio en 18h · Cambio efectivo en 3 días hábiles.",
  },
  {
    id: "restaurante-valencia",
    tabLabel: "02. Hostelería en Valencia",
    type: "Restaurante La Forja · Pyme",
    location: "Valencia Capital (46002)",
    clientName: "Carlos M. Santillana",
    role: "Gerente y Propietario",
    avatarColor: "from-amber-500 to-orange-500",
    icon: UtensilsCrossed,
    quote:
      "En hostelería las cámaras frigoríficas y cocinas disparan el consumo. EMAX nos eliminó penalizaciones por reactiva y nos negoció una tarifa para pymes imbatible. Tener un asesor con nombre y apellidos al que llamar es un lujo.",
    ticketRef: "EMAX-VLC-4412",
    cupsCode: "ES0031************4M",
    date: "04/02/2026",
    powerBefore: "15.0 kW (98,50 €)",
    powerAfter: "11.5 kW (75,20 €)",
    energyPriceBefore: "0,215 €/kWh",
    energyPriceAfter: "0,135 €/kWh",
    extraCharges: "Eliminada penalización reactiva (-48,00 €/m)",
    monthlyBefore: "610,00 €",
    monthlyAfter: "372,00 €",
    annualSavings: "2.180,00 €",
    percentSavings: "-39%",
    summaryProblem: "Penalización por energía reactiva + potencia punta mal calibrada en cámaras.",
    summaryTime: "Instalación de batería de condensadores + cambio de comercializadora.",
  },
  {
    id: "coworking-barcelona",
    tabLabel: "03. Empresa en Barcelona",
    type: "Oficinas Coworking Nova · Sede Central",
    location: "Barcelona (08007)",
    clientName: "Marta R. Valls",
    role: "Directora de Operaciones",
    avatarColor: "from-emerald-500 to-teal-500",
    icon: Building2,
    quote:
      "Totalmente transparentes. No te venden la moto: auditaron las facturas de nuestras dos sedes, hicieron el comparativo con 30 comercializadoras y se encargaron de todo el papeleo. Recomiendo el servicio al 100%.",
    ticketRef: "EMAX-BCN-7093",
    cupsCode: "ES0028************9K",
    date: "19/02/2026",
    powerBefore: "10.0 kW (68,00 €)",
    powerAfter: "8.0 kW (54,20 €)",
    energyPriceBefore: "0,198 €/kWh",
    energyPriceAfter: "0,128 €/kWh",
    extraCharges: "Optimización de tramos P1/P2/P3",
    monthlyBefore: "385,00 €",
    monthlyAfter: "266,00 €",
    annualSavings: "1.420,00 €",
    percentSavings: "-32%",
    summaryProblem: "Tarifa fija cara del año anterior sin renovar + potencia valle sin ajustar.",
    summaryTime: "Ajuste de maxímetro + tarifa indexada con precio tope garantizado.",
  },
];

export const Testimonios: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentCase = CASE_STUDIES[selectedIndex];

  return (
    <section id="testimonios" className="py-10 md:py-14 bg-slate-50 relative overflow-hidden border-b border-slate-200/80">
      {/* Luces sutiles de fondo */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado sin tarjetas */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Receipt className="w-3.5 h-3.5 text-amber-700" />
            Casos Reales con Factura Auditada
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            No te prometemos números al azar:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500">
              mira las facturas reales
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Selecciona un caso auditado y examina el ticket de desglose técnico con los euros exactos que recuperó cada cliente.
          </p>

          {/* Selector de Pestañas Interactivas (3 Casos) */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm max-w-full overflow-x-auto">
            {CASE_STUDIES.map((c, idx) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                className={`flex items-center gap-2 py-2.5 px-4 sm:px-5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                  selectedIndex === idx
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-[1.02]"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <span>{c.tabLabel}</span>
                <span
                  className={`text-[11px] font-semibold px-1.5 py-0.2 rounded-md ${
                    selectedIndex === idx
                      ? "bg-emerald-500/20 text-emerald-300"
                      : "bg-emerald-100 text-emerald-800"
                  }`}
                >
                  {c.percentSavings}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================
            EXPERIENCIA EDITORIAL + RECIBO DE AUDITORÍA
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LADO IZQUIERDO: STORYTELLING HUMANO & IMPACTO */}
          <div className="lg:col-span-6 space-y-6">
            {/* Header del Cliente */}
            <div className="flex items-center gap-4">
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${currentCase.avatarColor} p-0.5 shadow-md flex-shrink-0`}
              >
                <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-white font-bold text-lg">
                  {currentCase.clientName.charAt(0)}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-slate-900">
                    {currentCase.clientName}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Cliente Auditado
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  {currentCase.role} · {currentCase.location}
                </p>
              </div>
            </div>

            {/* Estrellas doradas */}
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-700 ml-1">5.0 / 5.0</span>
              <span className="text-xs text-slate-400">• Satisfacción verificada</span>
            </div>

            {/* Cita Editorial de Gran Formato */}
            <div className="relative pl-6 border-l-4 border-sky-500 py-1">
              <Quote className="absolute -top-3 -left-3 w-6 h-6 text-sky-200 fill-sky-200" />
              <blockquote className="text-lg sm:text-2xl font-medium text-slate-800 italic leading-relaxed">
                “{currentCase.quote}”
              </blockquote>
            </div>

            {/* 3 Hechos Clave de la Auditoría */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-rose-200">
                  ⚠️
                </span>
                <span>
                  <strong className="text-slate-900 font-semibold">Problema antes:</strong>{" "}
                  {currentCase.summaryProblem}
                </span>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-sky-200">
                  <Clock className="w-3 h-3" />
                </span>
                <span>
                  <strong className="text-slate-900 font-semibold">Resolución EMAX:</strong>{" "}
                  {currentCase.summaryTime}
                </span>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </span>
                <span>
                  <strong className="text-slate-900 font-semibold">Resultado garantizado:</strong>{" "}
                  <span className="text-emerald-700 font-bold">
                    +{currentCase.annualSavings} al año
                  </span>{" "}
                  sin costes ocultos.
                </span>
              </div>
            </div>

            {/* CTA Directo */}
            <div className="pt-3">
              <a
                href="#formulario"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 shadow-md shadow-sky-600/20 transition-all transform hover:-translate-y-0.5"
              >
                <span>Solicitar una auditoría como la de {currentCase.clientName.split(" ")[0]}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* LADO DERECHO: TICKET DE AUDITORÍA FÍSICA DIGITALIZADA */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Sombra de fondo para dar profundidad de papel */}
            <div className="absolute inset-x-8 -bottom-4 h-8 bg-slate-300/60 rounded-full blur-xl pointer-events-none" />

            {/* El Ticket de Factura Auditada */}
            <div className="w-full max-w-md bg-white border border-slate-300/80 rounded-2xl shadow-xl p-6 sm:p-8 font-mono text-xs text-slate-700 relative overflow-hidden">
              
              {/* Sello de Auditoría Certificada en diagonal */}
              <div className="absolute -right-12 top-7 rotate-45 bg-emerald-500/15 border border-emerald-500/40 text-emerald-800 text-[10px] font-black uppercase tracking-widest px-12 py-1 shadow-xs pointer-events-none">
                ✓ Auditado 100%
              </div>

              {/* Cabecera del Ticket */}
              <div className="text-center border-b border-dashed border-slate-300 pb-4 mb-4">
                <div className="flex items-center justify-center gap-1.5 font-bold text-slate-900 text-sm tracking-tight mb-1">
                  <Sparkles className="w-4 h-4 text-cyan-500" />
                  <span>GRUPO EMAX · AUDITORÍA ENERGÉTICA</span>
                </div>
                <p className="text-[10px] text-slate-500 font-sans">
                  Metamorfosis Energética S.L. · Granollers (Barcelona)
                </p>
                <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-mono">
                  <span>EXP: {currentCase.ticketRef}</span>
                  <span>FECHA: {currentCase.date}</span>
                </div>
                <div className="text-left text-[10px] text-slate-500 font-mono mt-0.5">
                  <span>CUPS: {currentCase.cupsCode}</span>
                </div>
              </div>

              {/* Desglose de Conceptos */}
              <div className="space-y-3 mb-4">
                <div>
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>1. POTENCIA CONTRATADA:</span>
                  </div>
                  <div className="flex justify-between text-slate-500 pl-2">
                    <span className="line-through text-rose-500">Antes: {currentCase.powerBefore}</span>
                    <span className="font-bold text-emerald-700">Ahora: {currentCase.powerAfter}</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>2. PRECIO ENERGÍA (kWh):</span>
                  </div>
                  <div className="flex justify-between text-slate-500 pl-2">
                    <span className="line-through text-rose-500">Antes: {currentCase.energyPriceBefore}</span>
                    <span className="font-bold text-emerald-700">Ahora: {currentCase.energyPriceAfter}</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>3. CARGOS Y CONCEPTOS EXTRA:</span>
                  </div>
                  <div className="text-emerald-700 font-bold pl-2">
                    ✓ {currentCase.extraCharges}
                  </div>
                </div>
              </div>

              {/* Línea divisoria perforada */}
              <div className="border-t-2 border-dashed border-slate-300 my-4" />

              {/* Comparativa de Totales */}
              <div className="space-y-2 mb-5">
                <div className="flex justify-between text-slate-500">
                  <span>FACTURA HABITUAL ANTERIOR:</span>
                  <span className="line-through text-rose-500 font-bold">{currentCase.monthlyBefore} /mes</span>
                </div>

                <div className="flex justify-between text-slate-900 font-bold text-sm">
                  <span>NUEVA FACTURA CON EMAX:</span>
                  <span className="text-emerald-700 text-base">{currentCase.monthlyAfter} /mes</span>
                </div>
              </div>

              {/* TOTAL AHORRO CERTIFICADO (Caja destacada en el ticket) */}
              <div className="bg-slate-900 text-white rounded-xl p-4 text-center mb-5 shadow-inner">
                <span className="block text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-0.5">
                  TOTAL AHORRO ANUAL EN TU BOLSILLO:
                </span>
                <div className="text-3xl font-black text-white tracking-tight">
                  +{currentCase.annualSavings}
                  <span className="text-sm font-bold text-emerald-400 ml-2">
                    ({currentCase.percentSavings})
                  </span>
                </div>
              </div>

              {/* Código de barras simulado decorativo en la base del recibo */}
              <div className="pt-2 text-center border-t border-dashed border-slate-300">
                <div className="flex justify-center items-center gap-1 h-8 opacity-60">
                  {[4, 2, 8, 3, 6, 2, 5, 2, 7, 3, 5, 2, 9, 3, 4, 2, 6, 4, 3, 5, 2, 8, 3, 6, 2].map(
                    (w, i) => (
                      <span
                        key={i}
                        className="bg-slate-800 h-full inline-block"
                        style={{ width: `${w}px` }}
                      />
                    )
                  )}
                </div>
                <span className="text-[9px] text-slate-400 tracking-widest mt-1 block">
                  * CERT-ID: 78921-EMAX-2026-SPAIN *
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

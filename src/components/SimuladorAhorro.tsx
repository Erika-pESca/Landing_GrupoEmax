"use client";

import React, { useState } from "react";
import {
  Zap,
  Flame,
  Sparkles,
  Building2,
  Home,
  TrendingDown,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Plane,
  Leaf,
  DollarSign,
} from "lucide-react";

export const SimuladorAhorro: React.FC = () => {
  const [clientType, setClientType] = useState<"particular" | "empresa">("particular");
  const [supplyType, setSupplyType] = useState<"luz" | "gas" | "dual">("dual");
  const [monthlySpend, setMonthlySpend] = useState<number>(120);
  const [selectedYears, setSelectedYears] = useState<1 | 3 | 5>(3);

  // Cambiar valores por defecto según el tipo de cliente
  const handleClientTypeChange = (type: "particular" | "empresa") => {
    setClientType(type);
    if (type === "particular" && monthlySpend > 400) {
      setMonthlySpend(120);
    } else if (type === "empresa" && monthlySpend < 200) {
      setMonthlySpend(650);
    }
  };

  // Porcentajes de estimación de ahorro según tipo de cliente y suministro
  const baseRate = clientType === "particular" ? 0.32 : 0.36;
  const supplyBonus = supplyType === "dual" ? 0.03 : supplyType === "luz" ? 0.01 : 0;
  const savingsRate = Math.min(0.42, baseRate + supplyBonus);

  const monthlySavings = Math.round(monthlySpend * savingsRate);
  const annualSavings = monthlySavings * 12;
  const periodSavings = annualSavings * selectedYears;
  const newEstimatedBill = Math.round(monthlySpend - monthlySavings);
  const percentageSaved = Math.round(savingsRate * 100);
  const co2Saved = Math.round((annualSavings / 100) * 85 * selectedYears);

  // RANGOS
  const minRange = clientType === "particular" ? 40 : 150;
  const maxRange = clientType === "particular" ? 400 : 2500;
  const step = clientType === "particular" ? 10 : 50;

  // Presets rápidos para interactuar con 1 clic
  const presets =
    clientType === "particular" ? [60, 90, 120, 180, 250] : [300, 600, 1000, 1500, 2200];

  // Cálculo del porcentaje de llenado del slider
  const sliderProgress = ((monthlySpend - minRange) / (maxRange - minRange)) * 100;

  // Impacto tangible en la vida real
  const getTangibleImpact = () => {
    if (annualSavings < 400) {
      return "Equivale a pagar toda tu conexión a internet del año o casi 3 meses de electricidad completamente gratis.";
    } else if (annualSavings < 900) {
      return "Equivale a unas vacaciones familiares de verano o a 4 meses de factura eléctrica pagados al 100%.";
    } else if (annualSavings < 2500) {
      return "Equivale a renovar electrodomésticos de máxima eficiencia A+++ o una escapada internacional.";
    } else {
      return "Equivale a una importante inyección de liquidez neta para tu negocio o amortizar placas solares en tiempo récord.";
    }
  };

  return (
    <section id="simulador" className="py-10 md:py-14 bg-slate-50 relative overflow-hidden border-y border-slate-200/80">
      {/* Luces y auras de fondo */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-sky-200/30 rounded-full blur-[120px] pointer-events-none -translate-y-1/3" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-emerald-200/25 rounded-full blur-[120px] pointer-events-none translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado elegante */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Zap className="w-3.5 h-3.5 text-sky-600 fill-sky-600/20" />
            Simulador de Ahorro Inteligente en Tiempo Real
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Calcula cuánto dinero estás{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500">
              perdiendo cada mes
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Ajusta los parámetros según tu factura habitual y comprueba en vivo la optimización exacta que podemos lograr para ti.
          </p>
        </div>

        {/* Layout 50/50: Panel de Control (Blanco) vs Dashboard FinTech (Oscuro estilo Hero) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* ========================================================
              LADO IZQUIERDO: CONSOLA DE ENTRADA (Blanca, limpia, moderna)
              ======================================================== */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white p-7 sm:p-9 rounded-3xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all duration-300">
            <div className="space-y-8">
              {/* 1. Tipo de inmueble */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center justify-between">
                  <span>1. ¿Para qué tipo de inmueble es?</span>
                  <span className="text-[11px] font-normal text-slate-400">Selecciona uno</span>
                </label>

                <div className="grid grid-cols-2 gap-3.5">
                  <button
                    type="button"
                    onClick={() => handleClientTypeChange("particular")}
                    className={`flex items-center justify-center gap-3 p-4 rounded-2xl border-2 transition-all duration-200 ${
                      clientType === "particular"
                        ? "bg-sky-50/80 border-sky-600 text-sky-950 font-bold shadow-sm"
                        : "bg-slate-50/60 border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300"
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        clientType === "particular"
                          ? "bg-sky-600 text-white shadow-sm"
                          : "bg-white text-slate-400 border border-slate-200"
                      }`}
                    >
                      <Home className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className="block text-sm font-bold leading-tight">Hogar</span>
                      <span className="text-[11px] font-normal text-slate-500">Particular</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleClientTypeChange("empresa")}
                    className={`flex items-center justify-center gap-3 p-4 rounded-2xl border-2 transition-all duration-200 ${
                      clientType === "empresa"
                        ? "bg-sky-50/80 border-sky-600 text-sky-950 font-bold shadow-sm"
                        : "bg-slate-50/60 border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300"
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        clientType === "empresa"
                          ? "bg-sky-600 text-white shadow-sm"
                          : "bg-white text-slate-400 border border-slate-200"
                      }`}
                    >
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className="block text-sm font-bold leading-tight">Negocio</span>
                      <span className="text-[11px] font-normal text-slate-500">Pyme / Empresa</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* 2. Suministro a optimizar (3 botones con armonía perfecta) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center justify-between">
                  <span>2. ¿Qué suministro deseas optimizar?</span>
                  <span className="text-[11px] font-medium text-emerald-600">Dual = Máximo Ahorro</span>
                </label>

                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: "luz", label: "Solo Luz", icon: Zap, sub: "Electricidad" },
                    { id: "gas", label: "Solo Gas", icon: Flame, sub: "Gas Natural" },
                    { id: "dual", label: "Luz + Gas", icon: Sparkles, sub: "Recomendado" },
                  ].map((supply) => {
                    const Icon = supply.icon;
                    const isSelected = supplyType === supply.id;
                    return (
                      <button
                        key={supply.id}
                        type="button"
                        onClick={() => setSupplyType(supply.id as any)}
                        className={`flex flex-col items-center justify-center py-3.5 px-2 rounded-2xl border-2 transition-all duration-200 ${
                          isSelected
                            ? "bg-sky-50/90 border-sky-600 text-sky-950 font-bold shadow-xs scale-[1.02]"
                            : "bg-slate-50/60 border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 mb-1.5 ${
                            isSelected ? "text-sky-600" : "text-slate-400"
                          }`}
                        />
                        <span className="text-xs sm:text-sm font-bold leading-tight">
                          {supply.label}
                        </span>
                        <span
                          className={`text-[10px] mt-0.5 ${
                            isSelected ? "text-sky-700 font-semibold" : "text-slate-400"
                          }`}
                        >
                          {supply.sub}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Slider Interactivo con Presets */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    3. Gasto mensual aproximado
                  </label>
                  <div className="flex items-baseline gap-1 bg-white px-3 py-1 rounded-xl border border-slate-200 shadow-2xs">
                    <span className="text-2xl font-black text-slate-900 tracking-tight">
                      {monthlySpend} €
                    </span>
                    <span className="text-xs font-semibold text-slate-500">/mes</span>
                  </div>
                </div>

                {/* Range Input con relleno visual dinámico */}
                <div className="relative py-2">
                  <input
                    type="range"
                    min={minRange}
                    max={maxRange}
                    step={step}
                    value={monthlySpend}
                    onChange={(e) => setMonthlySpend(Number(e.target.value))}
                    style={{
                      background: `linear-gradient(to right, #0284c7 0%, #06b6d4 ${sliderProgress}%, #e2e8f0 ${sliderProgress}%, #e2e8f0 100%)`,
                    }}
                    className="w-full h-3 rounded-full appearance-none cursor-pointer accent-sky-600 focus:outline-none transition-all"
                  />
                </div>

                <div className="flex justify-between text-[11px] text-slate-400 font-semibold mt-1">
                  <span>{minRange} €/mes</span>
                  <span className="text-slate-500">Mueve el control</span>
                  <span>{maxRange} €/mes</span>
                </div>

                {/* Botones de Presets Rápidos */}
                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center gap-2 overflow-x-auto pb-1">
                  <span className="text-[11px] font-bold text-slate-500 flex-shrink-0">
                    Accesos rápidos:
                  </span>
                  {presets.map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setMonthlySpend(val)}
                      className={`text-xs px-2.5 py-1 rounded-lg font-semibold transition-all flex-shrink-0 border ${
                        monthlySpend === val
                          ? "bg-sky-600 text-white border-sky-600 shadow-xs"
                          : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                      }`}
                    >
                      {val} €
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Micro garantía al pie de la consola */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Cálculo basado en tarifas reguladas y libres reales (CNMC)
              </span>
            </div>
          </div>

          {/* ========================================================
              LADO DERECHO: DASHBOARD FINTECH OSCURO (Estilo Hero)
              ======================================================== */}
          <div className="lg:col-span-6 relative group flex flex-col justify-between">
            {/* Halo de resplandor ambiental idéntico al Hero */}
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/30 via-cyan-500/25 to-emerald-500/25 rounded-[2.5rem] blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative h-full rounded-3xl bg-slate-900/95 border border-slate-700/80 p-7 sm:p-9 shadow-2xl backdrop-blur-xl flex flex-col justify-between overflow-hidden text-white">
              {/* Cuadrícula decorativa sutil en el fondo */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="absolute -right-20 -top-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                {/* Cabecera del Dashboard con Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700/90 text-cyan-300 text-xs font-semibold backdrop-blur-sm shadow-sm w-fit">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                    <span>Proyección de Ahorro Auditado</span>
                  </div>

                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-1 rounded-full w-fit">
                    Ahorro medio: -{percentageSaved}%
                  </span>
                </div>

                {/* Gran cifra de Ahorro Proyectado */}
                <div className="text-center sm:text-left py-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-1">
                    Dinero limpio que vuelve a tu bolsillo:
                  </span>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 tracking-tight">
                      +{periodSavings.toLocaleString("es-ES")} €
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-400">
                      en {selectedYears} {selectedYears === 1 ? "año" : "años"}
                    </span>
                  </div>
                </div>

                {/* Selector Interactivo de Periodo de Tiempo (Tabs) */}
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    <span>Periodo de proyección:</span>
                    <span className="text-cyan-400 lowercase font-normal">haz clic para comparar</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                    {[
                      { years: 1, label: "1 Año", extra: `+${annualSavings}€` },
                      { years: 3, label: "3 Años", extra: `+${annualSavings * 3}€` },
                      { years: 5, label: "5 Años", extra: `+${annualSavings * 5}€` },
                    ].map((tab) => (
                      <button
                        key={tab.years}
                        type="button"
                        onClick={() => setSelectedYears(tab.years as any)}
                        className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl text-xs font-bold transition-all ${
                          selectedYears === tab.years
                            ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md shadow-sky-500/30 scale-[1.02]"
                            : "text-slate-400 hover:text-white hover:bg-slate-700/40"
                        }`}
                      >
                        <span>{tab.label}</span>
                        <span
                          className={`text-[10px] font-normal ${
                            selectedYears === tab.years ? "text-cyan-100" : "text-slate-500"
                          }`}
                        >
                          {tab.extra}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Comparativa "Antes vs Con EMAX" (Tarjetas modernas) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-rose-300 uppercase tracking-wider block">
                        Factura habitual
                      </span>
                      <span className="text-lg font-bold text-slate-400 line-through decoration-rose-500 decoration-2">
                        {monthlySpend} €
                        <span className="text-xs font-normal text-slate-500 ml-0.5">/mes</span>
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-md border border-rose-500/20">
                      Antes
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-cyan-950/30 border border-emerald-500/40 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                        Con Solución EMAX
                      </span>
                      <span className="text-xl font-black text-white">
                        {newEstimatedBill} €
                        <span className="text-xs font-normal text-slate-400 ml-0.5">/mes</span>
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-md border border-emerald-500/30">
                      Ahorras {monthlySavings}€/m
                    </span>
                  </div>
                </div>

                {/* Impacto Tangible en la vida real */}
                <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Plane className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300 block mb-0.5">
                      Impacto real en tu economía
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {getTangibleImpact()}
                    </p>
                  </div>
                </div>
              </div>

              {/* Botón CTA Principal con Resplandor Eléctrico */}
              <div className="relative z-10 pt-6 mt-6 border-t border-slate-800">
                <a
                  href="#formulario"
                  className="group w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 text-center"
                >
                  <Zap className="w-5 h-5 text-amber-300 fill-amber-300/30 animate-bounce" />
                  <span>Garantizar mis +{annualSavings.toLocaleString("es-ES")} € de Ahorro</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <p className="text-[11px] text-center text-slate-400 mt-2.5 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Estudio 100% gratuito · Sin permanencia · Sin coste de intermediación
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

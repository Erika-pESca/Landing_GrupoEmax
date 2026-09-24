"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, Zap, Flame, Building2, Home, Sparkles, Leaf } from "lucide-react";

export const SavingsSimulator: React.FC = () => {
  const [clientType, setClientType] = useState<"particular" | "empresa">("particular");
  const [supplyType, setSupplyType] = useState<"luz" | "gas" | "dual">("dual");
  const [monthlySpend, setMonthlySpend] = useState<number>(120);

  // Switch defaults when changing client type
  const handleClientTypeChange = (type: "particular" | "empresa") => {
    setClientType(type);
    if (type === "particular" && monthlySpend > 400) {
      setMonthlySpend(120);
    } else if (type === "empresa" && monthlySpend < 200) {
      setMonthlySpend(650);
    }
  };

  // Savings estimation percentages
  const savingsRate = clientType === "particular" ? 0.32 : 0.36; // 32% to 36%
  const monthlySavings = Math.round(monthlySpend * savingsRate);
  const annualSavings = monthlySavings * 12;
  const newEstimatedBill = Math.round(monthlySpend - monthlySavings);
  const co2Reduction = Math.round((annualSavings / 100) * 85); // Estimated CO2 reduction in kg

  const minRange = clientType === "particular" ? 40 : 150;
  const maxRange = clientType === "particular" ? 450 : 2500;
  const step = clientType === "particular" ? 10 : 50;

  return (
    <section id="simulador" className="py-20 md:py-28 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Simulador de Ahorro en Tiempo Real
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Descubre en 10 segundos{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              cuánto dinero estás perdiendo
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Ajusta los parámetros según tu consumo habitual y comprueba la estimación media de ahorro que logramos para perfiles similares al tuyo.
          </p>
        </div>

        {/* Simulator Interactive Box */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900 text-white shadow-2xl border border-slate-800 p-6 sm:p-10 relative overflow-hidden">
          {/* Background decorative glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Client Type Toggle */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  1. ¿Para qué tipo de inmueble es?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleClientTypeChange("particular")}
                    className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl font-bold text-sm transition-all duration-200 border ${
                      clientType === "particular"
                        ? "bg-sky-600 text-white border-sky-400 shadow-md shadow-sky-600/30"
                        : "bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800"
                    }`}
                  >
                    <Home className="w-4 h-4" />
                    <span>Hogar / Particular</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleClientTypeChange("empresa")}
                    className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl font-bold text-sm transition-all duration-200 border ${
                      clientType === "empresa"
                        ? "bg-sky-600 text-white border-sky-400 shadow-md shadow-sky-600/30"
                        : "bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800"
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    <span>Negocio / Empresa</span>
                  </button>
                </div>
              </div>

              {/* Supply Type Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  2. ¿Qué suministros deseas optimizar?
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { id: "luz", label: "Solo Luz", icon: Zap },
                    { id: "gas", label: "Solo Gas", icon: Flame },
                    { id: "dual", label: "Luz + Gas", icon: Sparkles },
                  ].map((supply) => {
                    const Icon = supply.icon;
                    const isSelected = supplyType === supply.id;
                    return (
                      <button
                        key={supply.id}
                        type="button"
                        onClick={() => setSupplyType(supply.id as any)}
                        className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                          isSelected
                            ? "bg-slate-800 text-cyan-300 border-cyan-500/80 shadow-inner"
                            : "bg-slate-800/40 text-slate-400 border-slate-700 hover:text-slate-200"
                        }`}
                      >
                        <Icon className="w-4 h-4 text-cyan-400" />
                        <span>{supply.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Spend Slider */}
              <div className="pt-2">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    3. Gasto medio mensual aproximado
                  </label>
                  <span className="text-2xl font-black text-white bg-slate-800 px-3.5 py-1 rounded-lg border border-slate-700">
                    {monthlySpend} €
                    <span className="text-xs font-normal text-slate-400 ml-1">/mes</span>
                  </span>
                </div>

                <input
                  type="range"
                  min={minRange}
                  max={maxRange}
                  step={step}
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />

                <div className="flex justify-between text-[11px] text-slate-500 font-medium mt-1">
                  <span>{minRange} €/mes</span>
                  <span>Promedio habitual</span>
                  <span>{maxRange} €/mes</span>
                </div>
              </div>
            </div>

            {/* Right Output Results Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-850/90 border border-slate-700 p-6 sm:p-7 flex flex-col justify-between shadow-xl">
                <div className="border-b border-slate-700/80 pb-4 mb-4">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    Ahorro Anual Estimado
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                      {annualSavings} €
                    </span>
                    <span className="text-sm font-semibold text-emerald-400">
                      /año
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Equivale a pagar aprox.{" "}
                    <strong className="text-slate-200">{newEstimatedBill} €/mes</strong> en vez de {monthlySpend} €/mes.
                  </p>
                </div>

                {/* Micro breakdowns */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-400">Ahorro mensual directo:</span>
                    <span className="font-bold text-emerald-400">~{monthlySavings} €/mes</span>
                  </div>

                  <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-400">Porcentaje estimado:</span>
                    <span className="font-bold text-cyan-300">Entre el 28% y 38%</span>
                  </div>

                  <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                      Reducción huella de carbono:
                    </span>
                    <span className="font-bold text-slate-300">~{co2Reduction} kg CO₂/año</span>
                  </div>
                </div>

                {/* Direct CTA */}
                <a
                  href="#formulario"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-lg shadow-emerald-500/20 transition-all duration-200 text-center"
                >
                  <span>Garantizar mi Ahorro</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </a>

                <span className="text-[11px] text-center text-slate-400 mt-2 block">
                  Estudio gratuito y confidencial según RGPD
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

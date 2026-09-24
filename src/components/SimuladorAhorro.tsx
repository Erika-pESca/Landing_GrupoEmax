"use client";

import React, { useState } from "react";
import { Zap, Flame, Sparkles, Building2, Home, TrendingDown, ArrowRight, PiggyBank } from "lucide-react";

export const SimuladorAhorro: React.FC = () => {
  const [clientType, setClientType] = useState<"particular" | "empresa">("particular");
  const [supplyType, setSupplyType] = useState<"luz" | "gas" | "dual">("dual");
  const [monthlySpend, setMonthlySpend] = useState<number>(120);

  // Cambiar valores por defecto según el tipo de cliente
  const handleClientTypeChange = (type: "particular" | "empresa") => {
    setClientType(type);
    if (type === "particular" && monthlySpend > 400) {
      setMonthlySpend(120);
    } else if (type === "empresa" && monthlySpend < 200) {
      setMonthlySpend(650);
    }
  };

  // Porcentajes de estimación de ahorro
  const savingsRate = clientType === "particular" ? 0.32 : 0.36; // 32% a 36%
  const monthlySavings = Math.round(monthlySpend * savingsRate);
  const annualSavings = monthlySavings * 12;
  const newEstimatedBill = Math.round(monthlySpend - monthlySavings);

  // RANGOS
  const minRange = clientType === "particular" ? 40 : 150;
  const maxRange = clientType === "particular" ? 450 : 2500;
  const step = clientType === "particular" ? 10 : 50;

  // Lógica para gráfica de Barras de Ahorro Acumulado (1 a 5 años)
  const chartYears = [1, 2, 3, 4, 5];
  const savingsData = chartYears.map(year => annualSavings * year);
  
  // El tope del eje Y se basa en el ahorro MÁXIMO posible con el slider a tope (a 5 años)
  const maxPossibleAnnualSavings = Math.round(maxRange * savingsRate) * 12;
  const maxChartY = (maxPossibleAnnualSavings * 5) * 1.1; // 10% padding extra

  return (
    <section id="simulador" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-y border-slate-200">
      
      {/* Fondo ultra limpio con toques de color sutiles y manchas brillantes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-200/40 rounded-full blur-[100px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-200/30 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Descubre tu ahorro en <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">tiempo real</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Ajusta tu consumo actual y descubre cuánto dinero dejarás de perder si te cambias a EMAX hoy mismo.
          </p>
        </div>

        {/* Layout Principal 50/50 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* ========================================================
              LADO IZQUIERDO: FORMULARIO INTERACTIVO (Colorido)
              ======================================================== */}
          <div className="flex flex-col space-y-8 bg-white p-6 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            
            {/* 1. Tipo de inmueble */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                1. ¿Para qué tipo de inmueble es?
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => handleClientTypeChange("particular")}
                  className={`flex flex-col items-center justify-center gap-3 p-5 sm:p-6 rounded-2xl border-2 transition-all duration-300 ${
                    clientType === "particular"
                      ? "bg-gradient-to-br from-sky-600 to-cyan-500 border-transparent text-white shadow-lg shadow-sky-500/30 scale-[1.02]"
                      : "bg-slate-50 border-slate-200 text-slate-400 hover:border-sky-300 hover:text-sky-600"
                  }`}
                >
                  <Home className="w-8 h-8 sm:w-10 sm:h-10" />
                  <span className="text-base font-bold">Hogar</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleClientTypeChange("empresa")}
                  className={`flex flex-col items-center justify-center gap-3 p-5 sm:p-6 rounded-2xl border-2 transition-all duration-300 ${
                    clientType === "empresa"
                      ? "bg-gradient-to-br from-sky-600 to-cyan-500 border-transparent text-white shadow-lg shadow-sky-500/30 scale-[1.02]"
                      : "bg-slate-50 border-slate-200 text-slate-400 hover:border-sky-300 hover:text-sky-600"
                  }`}
                >
                  <Building2 className="w-8 h-8 sm:w-10 sm:h-10" />
                  <span className="text-base font-bold">Empresa</span>
                </button>
              </div>
            </div>

            {/* 2. Tipo de suministro */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                2. ¿Qué suministro deseas optimizar?
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "luz", label: "Energía", icon: Zap, activeColor: "text-amber-300" },
                  { id: "gas", label: "Gas", icon: Flame, activeColor: "text-orange-300" },
                  { id: "dual", label: "Ambos", icon: Sparkles, activeColor: "text-white" },
                ].map((supply) => {
                  const Icon = supply.icon;
                  const isSelected = supplyType === supply.id;
                  return (
                    <button
                      key={supply.id}
                      type="button"
                      onClick={() => setSupplyType(supply.id as any)}
                      className={`flex flex-col items-center justify-center gap-2 py-5 px-2 rounded-2xl border-2 transition-all duration-300 ${
                        isSelected
                          ? "bg-slate-900 border-slate-900 text-white shadow-lg scale-[1.02]"
                          : "bg-slate-50 border-slate-200 text-slate-400 hover:border-slate-300 hover:text-slate-600"
                      }`}
                    >
                      <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${isSelected ? supply.activeColor : ""}`} />
                      <span className="text-xs sm:text-sm font-bold">{supply.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Slider Interactivo */}
            <div className="bg-gradient-to-br from-slate-50 to-sky-50 p-6 sm:p-8 rounded-[2rem] border border-sky-100 shadow-inner relative">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-sky-600 mb-2">
                    3. Tu Gasto Mensual Actual
                  </label>
                  <div className="inline-flex items-center gap-1.5 text-rose-600 text-xs font-bold bg-white px-3 py-1.5 rounded-lg shadow-sm border border-rose-100 animate-pulse">
                    <TrendingDown className="w-3.5 h-3.5" />
                    <span>¡Estás regalando ~{annualSavings} € al año!</span>
                  </div>
                </div>
                <div className="text-4xl font-black text-sky-900">
                  {monthlySpend} €
                  <span className="text-base font-medium text-sky-600/70 ml-1">/mes</span>
                </div>
              </div>

              <div className="relative w-full py-4">
                <input
                  type="range"
                  min={minRange}
                  max={maxRange}
                  step={step}
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full h-4 bg-white border border-slate-200 rounded-full appearance-none cursor-pointer accent-sky-500 hover:accent-sky-400 focus:outline-none focus:ring-4 focus:ring-sky-500/40 shadow-inner transition-all"
                />
              </div>

              <div className="flex justify-between text-xs text-sky-600/60 font-bold mt-2">
                <span>{minRange} €</span>
                <span>Arrastra el círculo</span>
                <span>{maxRange} €</span>
              </div>
            </div>

          </div>

          {/* ========================================================
              LADO DERECHO: GRÁFICA DE BARRAS DE AHORRO ACUMULADO
              ======================================================== */}
          <div className="flex flex-col h-full bg-white border border-slate-100 rounded-[2.5rem] p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
            
            {/* Cabecera Resultados */}
            <div className="mb-8 relative z-10 flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 text-sky-600 text-sm font-bold uppercase tracking-widest mb-4 border border-sky-100">
                <PiggyBank className="w-4 h-4" /> Dinero Recuperado con EMAX
              </span>
              <div className="text-[4rem] sm:text-6xl leading-none font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400 drop-shadow-sm tracking-tight mb-4">
                +{annualSavings} € <span className="text-2xl text-slate-400 font-medium tracking-normal">/año</span>
              </div>
              <p className="text-base text-slate-500 font-medium">
                Pagarías aprox. <strong className="text-slate-900 bg-slate-50 px-2 py-1 rounded-md border border-slate-200">{newEstimatedBill} €/mes</strong> (Ahorras {monthlySavings}€ todos los meses).
              </p>
            </div>

            {/* Gráfico SVG de Barras (Crece dinámicamente) */}
            <div className="bg-slate-50 p-5 sm:p-8 rounded-[2rem] border border-slate-100 shadow-inner flex-grow flex flex-col justify-end relative z-10">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center mb-10">
                Tu ahorro acumulado en 5 años
              </div>
              
              <div className="relative w-full h-[220px] sm:h-[260px] flex items-end">
                <svg viewBox="0 0 800 300" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                  
                  {/* Grid lines horizontales (Fondo) */}
                  <line x1="0" y1="60" x2="800" y2="60" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="120" x2="800" y2="120" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="180" x2="800" y2="180" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="240" x2="800" y2="240" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="300" x2="800" y2="300" stroke="#cbd5e1" strokeWidth="2" />

                  {/* Barras de Ahorro */}
                  {savingsData.map((amount, i) => {
                    const totalBars = 5;
                    const spacing = 800 / totalBars;
                    const barWidth = 60;
                    const x = (i * spacing) + (spacing / 2) - (barWidth / 2);
                    
                    // Cálculo de altura dinámica. Usamos maxChartY para que no cambie la escala.
                    const barHeight = (amount / maxChartY) * 280; 
                    const y = 300 - barHeight;

                    return (
                      <g key={i}>
                        {/* Barra */}
                        <rect 
                          x={x} 
                          y={y} 
                          width={barWidth} 
                          height={barHeight} 
                          fill="url(#gradBar)" 
                          rx="8" 
                          className="transition-all duration-300 drop-shadow-md hover:opacity-80 cursor-pointer" 
                        />
                        
                        {/* Texto flotante encima de la barra */}
                        <text 
                          x={x + barWidth / 2} 
                          y={y - 15} 
                          textAnchor="middle" 
                          className="text-base sm:text-xl font-black fill-sky-600 transition-all duration-300"
                        >
                          +{amount.toLocaleString('es-ES')}€
                        </text>
                        
                        {/* Etiqueta del Año (Eje X) */}
                        <text 
                          x={x + barWidth / 2} 
                          y={325} 
                          textAnchor="middle" 
                          className="text-sm font-bold fill-slate-400"
                        >
                          Año {chartYears[i]}
                        </text>
                      </g>
                    );
                  })}

                  <defs>
                    <linearGradient id="gradBar" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0ea5e9" />    {/* Sky 500 */}
                      <stop offset="100%" stopColor="#06b6d4" />  {/* Cyan 500 */}
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="mt-8 relative z-10">
              <a
                href="#formulario"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-bold text-base sm:text-lg text-white bg-gradient-to-r from-sky-600 to-cyan-500 hover:from-sky-500 hover:to-cyan-400 shadow-lg shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <span>Obtener mi estudio de ahorro GRATIS</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

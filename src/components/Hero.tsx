"use client";

import React from "react";
import { RedEnergiaFondo } from "./RedEnergiaFondo";
import {
  ArrowRight,
  TrendingDown,
  ShieldCheck,
  Zap,
  CheckCircle2,
  FileSpreadsheet,
  Clock,
  Sparkles,
} from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Red cibernética de constelaciones y circuitos estilo banner tecnológico */}
      <RedEnergiaFondo />

      {/* 1. Auroras ambientales animadas */}
      <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-sky-600/30 via-cyan-500/20 to-emerald-400/15 blur-[130px] pointer-events-none rounded-full animate-blob-1" />
      <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-gradient-to-br from-cyan-600/20 via-teal-500/20 to-emerald-500/25 blur-[140px] pointer-events-none rounded-full animate-blob-2" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/15 blur-[110px] pointer-events-none rounded-full animate-blob-1" />

      {/* 2. Efecto de barrido de luz láser */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-laser-sweep" />
      </div>

      {/* 3. Malla cuadrícula animada de fondo */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none animate-grid-scan"
        style={{
          backgroundImage: `radial-gradient(circle at 1.5px 1.5px, #38bdf8 1.5px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* 4. Partículas relucientes de energía flotantes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_12px_#38bdf8] animate-particle-slow opacity-75" />
        <div className="absolute top-1/3 left-2/3 w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_15px_#34d399] animate-particle-fast opacity-80" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-2/3 left-1/12 w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8] animate-particle-slow opacity-60" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-4/5 w-2 h-2 rounded-full bg-teal-300 shadow-[0_0_12px_#5eead4] animate-particle-fast opacity-70" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_14px_#22d3ee] animate-particle-slow opacity-65" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Columna izquierda: Propuesta de valor */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Insignia superior */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700/80 text-cyan-300 text-xs font-semibold mb-6 shadow-xl backdrop-blur-md hover:border-cyan-500/50 transition-all">
              <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span>Asesoramiento Energético Independiente en España</span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400 font-bold">100% Imparcial</span>
            </div>

            {/* Título principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Paga solo por la{" "}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent animate-pulse-subtle">
                energía real
              </span>{" "}
              que consumes.
            </h1>

            {/* Subtítulo */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Auditamos tu factura de <strong className="text-white font-semibold">luz y gas</strong>, eliminamos potencias sobredimensionadas y negociamos la tarifa más económica del mercado español.{" "}
              <span className="text-cyan-300 font-medium">Sin coste, sin papeleo y sin permanencia.</span>
            </p>

            {/* Botones de llamada a la acción (CTA) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#formulario"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <Zap className="w-5 h-5 text-amber-300 fill-amber-300/30 animate-bounce" />
                <span>Solicitar Estudio Gratuito</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#simulador"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-base text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 hover:border-slate-600 transition-all duration-200 text-center backdrop-blur-sm"
              >
                <span>Calcular mi Ahorro</span>
                <TrendingDown className="w-4 h-4 text-emerald-400" />
              </a>
            </div>

            {/* Barra de métricas de confianza */}
            <div className="pt-6 border-t border-slate-800/80 w-full grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Hasta 40%
                </p>
                <p className="text-xs sm:text-sm text-slate-400 font-medium">
                  Ahorro medio en factura
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight">
                  0 €
                </p>
                <p className="text-xs sm:text-sm text-slate-400 font-medium">
                  Coste del diagnóstico
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400 tracking-tight">
                  +2.800
                </p>
                <p className="text-xs sm:text-sm text-slate-400 font-medium">
                  Hogares y empresas
                </p>
              </div>
            </div>
          </div>

          {/* Columna derecha: Tarjeta interactiva de comparación de diagnóstico */}
          <div className="lg:col-span-5 relative">
            {/* Insignia flotante de energía (Superior derecha) */}
            <div className="hidden sm:flex absolute -top-6 -right-4 z-20 items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-emerald-300 text-xs font-bold shadow-2xl backdrop-blur-md animate-float-slow">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>⚡ Auditoría 100% Sin Coste</span>
            </div>

            {/* Insignia flotante de energía (Inferior izquierda) */}
            <div className="hidden sm:flex absolute -bottom-5 -left-6 z-20 items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-bold shadow-2xl backdrop-blur-md animate-float-slow" style={{ animationDelay: "2s" }}>
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>🌱 Garantía de Ahorro Real</span>
            </div>

            <div className="relative mx-auto max-w-md w-full">
              {/* Fondo brillante animado */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 rounded-3xl blur-xl opacity-45 animate-pulse-subtle" />

              {/* Contenedor de la tarjeta */}
              <div className="relative rounded-2xl bg-slate-900/95 border border-slate-700/80 p-6 sm:p-7 shadow-2xl backdrop-blur-2xl">
                {/* Encabezado de la tarjeta */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
                      <FileSpreadsheet className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Caso Real Auditado por EMAX
                      </h4>
                      <p className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-cyan-400" />
                        Auditoría completada en 24h
                      </p>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    Ahorro Activo
                  </span>
                </div>

                {/* Bloque de comparación */}
                <div className="space-y-4 mb-6">
                  {/* Antes */}
                  <div className="p-3.5 rounded-xl bg-slate-800/60 border border-rose-950/60 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-medium text-rose-300 uppercase tracking-wide">
                        Factura habitual (Antes)
                      </span>
                      <p className="text-xs text-slate-400">
                        Potencia 5.5 kW + Tarifa desactualizada
                      </p>
                    </div>
                    <span className="text-lg font-bold text-slate-300 line-through decoration-rose-500 decoration-2">
                      154,20 €<span className="text-xs font-normal">/mes</span>
                    </span>
                  </div>

                  {/* Después */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/50 to-cyan-950/40 border border-emerald-500/40 flex items-center justify-between shadow-inner">
                    <div>
                      <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wide flex items-center gap-1">
                        <Sparkles className="w-3 h-3 animate-spin" style={{ animationDuration: "6s" }} />
                        Con Solución Grupo EMAX
                      </span>
                      <p className="text-xs text-slate-300">
                        Potencia ajustada a 3.8 kW + Mejor tarifa
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-white">
                        89,50 €
                      </span>
                      <span className="text-xs text-slate-400">/mes</span>
                    </div>
                  </div>
                </div>

                {/* Banner destacado de ahorro */}
                <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-xl p-3.5 text-slate-950 flex items-center justify-between font-bold mb-5 shadow-lg shadow-emerald-500/20 transform hover:scale-[1.02] transition-transform">
                  <div className="flex items-center gap-2">
                    <TrendingDown className="w-5 h-5 text-slate-950" />
                    <span className="text-sm">Ahorro garantizado:</span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-black tracking-tight">
                      -41,9% (776,40 €/año)
                    </span>
                  </div>
                </div>

                {/* Micro garantías */}
                <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Sin cortes de suministro ni cambios de contador</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Gestión administrativa 100% realizada por EMAX</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Garantía de revisión anual de tarifas</span>
                  </li>
                </ul>

                {/* Enlace inferior */}
                <div className="mt-5 text-center">
                  <a
                    href="#formulario"
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors"
                  >
                    ¿Quieres ver cuánto puedes ahorrar tú? Envíanos tu factura →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

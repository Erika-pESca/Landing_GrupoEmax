"use client";

import React, { useState, useEffect } from "react";
import {
  Shield,
  Search,
  Zap,
  Layers,
  HeartHandshake,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  TrendingDown,
  Clock,
} from "lucide-react";

export const Solucion: React.FC = () => {
  const pillars = [
    {
      step: "01",
      name: "Auditoría 360°",
      icon: Search,
      prefix: "Auditoría Técnica y ",
      highlight: "Comparación Imparcial",
      description:
        "Analizamos los últimos 12 meses de tu curva de consumo real, no solo la última factura. Comparamos más de 40 comercializadoras activas en el mercado español para dar con la fórmula matemática más ventajosa para ti.",
      pill: "40+ Comercializadoras",
      featureBadge: "Sin sesgo de marca propia ni comisiones ocultas",
      color: "sky",
      iconGradient: "from-sky-500 via-sky-600 to-cyan-500",
      iconShadow: "shadow-sky-500/30",
      badgeClass: "bg-sky-50 border-sky-200 text-sky-700",
      highlightGradient: "from-sky-600 via-cyan-500 to-blue-600",
      cardBorder: "border-sky-200/90",
      cardGlow: "bg-sky-400/25",
      activeTab: "bg-sky-600 text-white shadow-md shadow-sky-500/30",
      dotActive: "w-8 bg-sky-500 shadow-sm shadow-sky-500/50",
    },
    {
      step: "02",
      name: "Potencia Óptima",
      icon: Zap,
      prefix: "Optimización Quirúrgica de ",
      highlight: "Potencia Contratada (kW)",
      description:
        "Calculamos la potencia pico exacta que demandan tus electrodomésticos o maquinaria. Reducimos los tramos sobredimensionados para que dejes de regalar dinero cada mes en el término fijo de potencia.",
      pill: "Ajuste Fino de kW",
      featureBadge: "Hasta 240 €/año recuperados en término fijo",
      color: "indigo",
      iconGradient: "from-indigo-600 via-violet-600 to-indigo-500",
      iconShadow: "shadow-indigo-500/30",
      badgeClass: "bg-indigo-50 border-indigo-200 text-indigo-700",
      highlightGradient: "from-indigo-600 via-violet-600 to-sky-600",
      cardBorder: "border-indigo-200/90",
      cardGlow: "bg-indigo-400/25",
      activeTab: "bg-indigo-600 text-white shadow-md shadow-indigo-500/30",
      dotActive: "w-8 bg-indigo-600 shadow-sm shadow-indigo-500/50",
    },
    {
      step: "03",
      name: "Ecosistema 360°",
      icon: Layers,
      prefix: "Soluciones 360° en un ",
      highlight: "Único Punto de Contacto",
      description:
        "Desde la luz y el gas de tu hogar o empresa, hasta climatización eficiente (aerotermia), autoconsumo con placas solares y baterías inteligentes con IA. Si genera o consume energía, EMAX lo optimiza.",
      pill: "Luz, Gas, Solar & IA",
      featureBadge: "Energía solar, aerotermia y baterías inteligentes",
      color: "emerald",
      iconGradient: "from-emerald-500 via-teal-600 to-emerald-400",
      iconShadow: "shadow-emerald-500/30",
      badgeClass: "bg-emerald-50 border-emerald-200 text-emerald-700",
      highlightGradient: "from-emerald-600 via-teal-500 to-cyan-600",
      cardBorder: "border-emerald-200/90",
      cardGlow: "bg-emerald-400/25",
      activeTab: "bg-emerald-600 text-white shadow-md shadow-emerald-500/30",
      dotActive: "w-8 bg-emerald-500 shadow-sm shadow-emerald-500/50",
    },
    {
      step: "04",
      name: "Asesor Dedicado",
      icon: HeartHandshake,
      prefix: "Asesor Personal Dedicado ",
      highlight: "Todo el Año",
      description:
        "Nos convertimos en tu departamento energético particular. Vigilamos el mercado constantemente y, si surge una mejor opción o intentan subirte los precios al renovar, te avisamos para actuar a tiempo.",
      pill: "Blindaje Antisubidas",
      featureBadge: "Vigilancia constante y aviso antes de cada renovación",
      color: "amber",
      iconGradient: "from-amber-500 via-orange-500 to-amber-400",
      iconShadow: "shadow-amber-500/30",
      badgeClass: "bg-amber-50 border-amber-200 text-amber-800",
      highlightGradient: "from-amber-600 via-orange-500 to-rose-500",
      cardBorder: "border-amber-200/90",
      cardGlow: "bg-amber-400/25",
      activeTab: "bg-amber-600 text-white shadow-md shadow-amber-500/30",
      dotActive: "w-8 bg-amber-500 shadow-sm shadow-amber-500/50",
    },
  ];

  const [activePillarIndex, setActivePillarIndex] = useState(0);

  const nextSlide = () => {
    setActivePillarIndex((current) => (current + 1) % pillars.length);
  };
  const prevSlide = () => {
    setActivePillarIndex((current) => (current - 1 + pillars.length) % pillars.length);
  };
  const setSlide = (idx: number) => {
    setActivePillarIndex(idx);
  };

  // Auto-rotar cada 6 segundos.
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePillarIndex((current) => (current + 1) % pillars.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [activePillarIndex, pillars.length]);

  const activePillar = pillars[activePillarIndex];

  return (
    <section id="solucion" className="py-10 md:py-14 bg-slate-50 relative overflow-hidden">
      {/* Acentos ambientales dinámicos que cambian suavemente de color según el pilar activo */}
      <div
        className={`absolute top-1/2 left-0 w-80 h-80 rounded-full blur-[110px] pointer-events-none -translate-y-1/2 transition-colors duration-700 ${activePillar.cardGlow}`}
      />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Encabezado General */}
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Shield className="w-3.5 h-3.5 text-sky-600" />
            La Solución EMAX 360°
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Soluciones energéticas{" "}
            <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
              diseñadas a tu medida
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Olvídate de las tarifas enlatadas. Analizamos tus hábitos reales para minimizar tu gasto mes a mes.
          </p>
        </div>

        {/* 2. Contenedor Medio: Tarjeta Dinámica de Paso + Dispositivo Multimedia (SIEMPRE LADO A LADO) */}
        <div className="flex flex-row items-center gap-3 sm:gap-6 lg:gap-12 mb-2 md:mb-4">
          {/* Columna Izquierda: Tarjetas con Texto y Controles */}
          <div className="w-1/2 lg:w-7/12">
            {/* Pestañas Rápidas de Navegación por Paso con Código de Color */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              {pillars.map((p, idx) => {
                const isSelected = idx === activePillarIndex;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSlide(idx)}
                    className={`flex items-center justify-center gap-1 sm:gap-1.5 py-1.5 sm:py-2 px-1.5 sm:px-2.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold transition-all duration-300 border ${
                      isSelected
                        ? `${p.activeTab} border-transparent shadow-xs`
                        : "bg-white/80 border-slate-200/90 text-slate-600 hover:bg-white hover:text-slate-900"
                    }`}
                  >
                    <span>{p.step}.</span>
                    <span className="truncate">{p.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Tarjeta Principal con Transición de Contenido y Color */}
            <div
              className={`relative rounded-2xl sm:rounded-3xl bg-white border ${activePillar.cardBorder} p-3.5 sm:p-6 lg:p-8 shadow-xl shadow-slate-200/50 transition-all duration-500 overflow-hidden min-h-[300px] sm:min-h-[320px] lg:min-h-[330px] flex flex-col justify-between`}
            >
              {/* Barra superior de acento con el color del paso actual */}
              <div
                className={`absolute top-0 inset-x-0 h-1 sm:h-1.5 bg-gradient-to-r ${activePillar.iconGradient}`}
              />

              {/* Contenedor relativo de los 4 pilares con animación horizontal perceptible */}
              <div className="relative flex-1">
                {pillars.map((pillar, index) => {
                  const Icon = pillar.icon;
                  const isActive = index === activePillarIndex;

                  return (
                    <div
                      key={index}
                      className={`transition-all duration-500 ease-out flex flex-col justify-between ${
                        isActive
                          ? "opacity-100 translate-x-0 scale-100 relative z-10"
                          : "opacity-0 -translate-x-6 scale-95 absolute inset-0 -z-10 pointer-events-none"
                      }`}
                    >
                      {/* Top Bar: Icono Colorido + Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 mb-2 sm:mb-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div
                            className={`w-8 h-8 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-tr ${pillar.iconGradient} text-white flex items-center justify-center flex-shrink-0 shadow-md sm:shadow-lg ${pillar.iconShadow} transform hover:scale-105 transition-transform`}
                          >
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                          </div>
                          <div>
                            <span className="block text-[9px] sm:text-[11px] font-black uppercase tracking-wider text-slate-400">
                              Paso {pillar.step} de 04
                            </span>
                            <span
                              className={`inline-block px-2 py-0.5 rounded-full border text-[9px] sm:text-[11px] font-extrabold uppercase tracking-wide ${pillar.badgeClass}`}
                            >
                              {pillar.pill}
                            </span>
                          </div>
                        </div>

                        {/* Chip de garantía / característica */}
                        <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-[11px] font-semibold text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span>{pillar.featureBadge}</span>
                        </div>
                      </div>

                      {/* Título con Parte Resaltada en Color del Paso */}
                      <h3 className="text-sm sm:text-xl lg:text-3xl font-extrabold text-slate-900 tracking-tight mb-1.5 sm:mb-3">
                        {pillar.prefix}
                        <span
                          className={`text-transparent bg-clip-text bg-gradient-to-r ${pillar.highlightGradient}`}
                        >
                          {pillar.highlight}
                        </span>
                      </h3>

                      {/* Descripción */}
                      <p className="text-[11px] sm:text-sm md:text-base text-slate-600 leading-relaxed mb-2 sm:mb-4">
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Controles de Navegación: Flechas + Puntos de Progreso Coloridos */}
              <div className="pt-2 sm:pt-4 border-t border-slate-100 flex items-center justify-between z-20">
                {/* Flechas de navegación */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <button
                    type="button"
                    onClick={prevSlide}
                    className="p-1 sm:p-2 rounded-lg sm:rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors shadow-2xs hover:-translate-x-0.5 active:translate-x-0"
                    aria-label="Paso anterior"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    className="p-1 sm:p-2 rounded-lg sm:rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors shadow-2xs hover:translate-x-0.5 active:translate-x-0"
                    aria-label="Paso siguiente"
                  >
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                  <span className="text-[10px] sm:text-xs text-slate-400 font-semibold ml-1 sm:ml-2">
                    {activePillarIndex + 1} / {pillars.length}
                  </span>
                </div>

                {/* Puntitos de avance con el color dinámico del paso activo */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {pillars.map((p, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSlide(idx)}
                      className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                        idx === activePillarIndex
                          ? `${p.dotActive} w-5 sm:w-7`
                          : "w-2 sm:w-2.5 bg-slate-200 hover:bg-slate-300"
                      }`}
                      aria-label={`Ver paso ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Dispositivo Multimedia con Avatar EMAX (Siempre a un lado) */}
          <div className="w-1/2 lg:w-5/12 flex justify-center relative">
            {/* Destello Glow detrás del video que refleja el color del paso actual */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[100%] rounded-3xl blur-[75px] pointer-events-none transition-colors duration-700 ${activePillar.cardGlow}`}
            />

            {/* Marco de video con borde azul eléctrico corporativo */}
            <div className="relative w-full aspect-[4/5] max-w-[200px] sm:max-w-xs lg:max-w-sm rounded-2xl sm:rounded-[2.5rem] bg-slate-900 border-[3px] sm:border-[5px] border-sky-500 shadow-2xl shadow-sky-500/30 ring-1 sm:ring-2 ring-sky-400/40 flex flex-col items-center justify-center overflow-hidden transition-all duration-500">
              {/* Video: Celular (Solo visible en pantallas pequeñas) */}
              <div className="block md:hidden w-full h-full absolute inset-0 z-10">
                <video
                  src="/imagenes/avatar_celular.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Video: Tablet (Solo visible en pantallas medianas) */}
              <div className="hidden md:block lg:hidden w-full h-full absolute inset-0 z-10">
                <video
                  src="/imagenes/avatar_tablet.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Video: Computador (Solo visible en pantallas grandes) */}
              <div className="hidden lg:block w-full h-full absolute inset-0 z-10">
                <video
                  src="/imagenes/avatar_computador.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, Shield, Search, Zap, Layers, HeartHandshake, ChevronLeft, ChevronRight } from "lucide-react";

export const Solucion: React.FC = () => {
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

  // Auto-rotar cada 6 segundos. Si el usuario hace clic, se reinicia el temporizador de 6s automáticamente.
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePillarIndex((current) => (current + 1) % pillars.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [activePillarIndex, pillars.length]);

  return (
    <section id="solucion" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Acentos de fondo */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Encabezado General (Arriba y Centrado) */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-5">
            <Shield className="w-3.5 h-3.5 text-sky-600" />
            La Solución EMAX
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Soluciones energéticas{" "}
            <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
              diseñadas a tu medida
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            Olvídate de las tarifas enlatadas. Analizamos tus hábitos reales para minimizar tu gasto mes a mes.
          </p>
        </div>

        {/* 2. Contenedor Medio: Texto Dinámico + Videos Responsivos */}
        <div className="flex flex-row items-center gap-4 md:gap-12 mb-20">
          
          {/* Columna Izquierda: Pilares dinámicos (Script de presentación) */}
          <div className="w-1/2 lg:w-7/12 relative h-[30rem] sm:h-80 lg:h-72 flex flex-col justify-center">
             {pillars.map((pillar, index) => {
               const Icon = pillar.icon;
               const isActive = index === activePillarIndex;
               return (
                 <div 
                   key={index}
                   className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-in-out ${
                     isActive ? "opacity-100 translate-y-0 z-10" : "opacity-0 translate-y-8 -z-10"
                   }`}
                 >
                    <div className="inline-flex items-center gap-2 md:gap-3 mb-3 md:mb-5">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-gradient-to-tr from-sky-600 to-cyan-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-sky-500/30">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7" />
                      </div>
                      <span className="text-[10px] sm:text-xs md:text-sm font-extrabold text-sky-600 tracking-widest uppercase">Paso 0{index + 1}</span>
                    </div>
                    <h3 className="text-[15px] leading-tight sm:text-lg md:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight mb-2 md:mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] leading-snug sm:text-sm md:text-lg text-slate-600">
                      {pillar.description}
                    </p>
                 </div>
               );
             })}
             
             {/* Controles: Flechas e Indicadores de progreso (Puntitos interactivos) */}
             <div className="absolute bottom-0 left-0 flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-6 z-20">
               {/* Flechas de navegación con estilo premium */}
               <div className="flex gap-2 md:gap-3">
                 <button 
                   onClick={prevSlide}
                   className="p-1.5 md:p-2.5 rounded-lg md:rounded-xl bg-gradient-to-b from-white to-slate-50 border border-slate-200 text-slate-700 hover:text-white hover:from-sky-500 hover:to-cyan-500 hover:border-transparent shadow-sm hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-x-1"
                   aria-label="Paso anterior"
                 >
                   <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                 </button>
                 <button 
                   onClick={nextSlide}
                   className="p-1.5 md:p-2.5 rounded-lg md:rounded-xl bg-gradient-to-b from-white to-slate-50 border border-slate-200 text-slate-700 hover:text-white hover:from-sky-500 hover:to-cyan-500 hover:border-transparent shadow-sm hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300 hover:translate-x-1"
                   aria-label="Paso siguiente"
                 >
                   <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                 </button>
               </div>
               
               {/* Puntitos interactivos */}
               <div className="flex gap-2 md:gap-3 sm:ml-2">
                 {pillars.map((_, idx) => (
                   <button 
                     key={idx}
                     onClick={() => setSlide(idx)}
                     className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${
                       idx === activePillarIndex ? "w-6 md:w-10 bg-gradient-to-r from-sky-500 to-cyan-500 shadow-md shadow-sky-500/20" : "w-2 md:w-2.5 bg-slate-300 hover:bg-sky-400"
                     }`}
                     aria-label={`Ver paso ${idx + 1}`}
                   />
                 ))}
               </div>
             </div>
          </div>

          {/* Columna Derecha: Contenedor para Videos Responsivos (Celular / Tablet / Computador) */}
          <div className="w-1/2 lg:w-5/12 flex justify-center relative">
            
            {/* Destello Glow detrás del video: Azul a la izquierda, Verde a la derecha */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[100%] bg-gradient-to-r from-sky-500/50 to-emerald-500/50 rounded-3xl blur-[80px] pointer-events-none" />

            <div className="relative w-full aspect-[4/5] max-w-sm rounded-2xl md:rounded-[3rem] bg-slate-900 border-[2px] md:border-[4px] border-slate-900 shadow-2xl flex flex-col items-center justify-center overflow-hidden ring-1 ring-slate-800/50">
              
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

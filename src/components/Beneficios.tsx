"use client";

import React from "react";
import { 
  FileText, 
  Search, 
  ThumbsUp, 
  ShieldCheck, 
  TrendingDown, 
  FileEdit, 
  Lightbulb, 
  Users, 
  Lock
} from "lucide-react";

export const Beneficios: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-200/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-200/20 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera Principal */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block py-1.5 px-4 rounded-full bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-widest mb-6 border border-sky-200 shadow-sm">
            ¿Por qué elegir Grupo EMAX?
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-6">
            Beneficios pensados para tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">tranquilidad y bolsillo</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
            Un servicio integral y transparente que convierte el laberinto de las eléctricas en una experiencia simple, rentable y segura.
          </p>
        </div>

        {/* ========================================================
            BENTO BOX GRID (ESTILO APPLE)
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">

          {/* ----------------------------------------------------
              NIVEL 1: CÓMO FUNCIONA (Los 3 Pasos) - Tarjetas Superiores
              ---------------------------------------------------- */}
          
          {/* PASO 1 */}
          <div 
            className="md:col-span-4 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group bg-cover bg-center"
            style={{ backgroundImage: 'url("/imagenes/enviarfoto.webp")' }}
          >
            {/* Capa Oscura Overlay */}
            <div className="absolute inset-0 bg-slate-900/80 group-hover:bg-slate-900/70 transition-colors duration-500 z-0"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 bg-sky-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-sky-500/30">
                  <FileText className="w-6 h-6 text-sky-400" />
                </div>
                <span className="text-5xl font-black text-white/10 group-hover:text-white/20 transition-colors duration-500">01</span>
              </div>
              <h3 className="text-sm font-bold text-sky-400 uppercase tracking-widest mb-2">Menos de 1 minuto</h3>
              <h4 className="text-xl font-bold text-white mb-3">Nos envías tu factura</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Adjuntas una foto o PDF de tu última factura de luz o gas a través del formulario. No necesitas recopilar historiales ni hacer papeleos aburridos.
              </p>
            </div>
          </div>

          {/* PASO 2 */}
          <div 
            className="md:col-span-4 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group bg-cover bg-center"
            style={{ backgroundImage: 'url("/imagenes/revicion.jpg")' }}
          >
            {/* Capa Oscura Overlay */}
            <div className="absolute inset-0 bg-slate-900/80 group-hover:bg-slate-900/70 transition-colors duration-500 z-0"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 bg-emerald-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-emerald-500/30">
                  <Search className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="text-5xl font-black text-white/10 group-hover:text-white/20 transition-colors duration-500">02</span>
              </div>
              <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-2">Análisis en 24h</h3>
              <h4 className="text-xl font-bold text-white mb-3">Auditamos tu consumo</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Nuestros consultores analizan tu curva horaria de potencia y comparan los precios con las mejores ofertas del mercado regulado y libre en España.
              </p>
            </div>
          </div>

          {/* PASO 3 */}
          <div 
            className="md:col-span-4 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group bg-cover bg-center"
            style={{ backgroundImage: 'url("/imagenes/recibe_propuesta.jpg")' }}
          >
            {/* Capa Oscura Overlay */}
            <div className="absolute inset-0 bg-slate-900/80 group-hover:bg-slate-900/70 transition-colors duration-500 z-0"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 bg-amber-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-amber-500/30">
                  <ThumbsUp className="w-6 h-6 text-amber-400" />
                </div>
                <span className="text-5xl font-black text-white/10 group-hover:text-white/20 transition-colors duration-500">03</span>
              </div>
              <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-2">Libertad total</h3>
              <h4 className="text-xl font-bold text-white mb-3">Recibes tu propuesta</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Te presentamos un informe claro con los euros exactos que ahorrarás. Si das tu visto bueno, tramitamos el cambio sin cortes ni complicaciones.
              </p>
            </div>
          </div>

          {/* ----------------------------------------------------
              NIVEL 2: BENEFICIOS (Tarjetas Variadas)
              ---------------------------------------------------- */}
          
          {/* Tarjeta Ancha (Sin Riesgo) */}
          <div className="md:col-span-8 bg-slate-900 p-8 sm:p-10 rounded-[2rem] border border-slate-800 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <ShieldCheck className="w-32 h-32 text-emerald-400" />
            </div>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-500/30">
                <ShieldCheck className="w-3.5 h-3.5" /> Ventaja Garantizada
              </span>
              <h4 className="text-2xl sm:text-3xl font-black text-white mb-4">100% Gratuito y Sin Permanencia</h4>
              <p className="text-slate-300 text-base leading-relaxed max-w-xl">
                El diagnóstico y auditoría <strong>no tienen coste para ti</strong>. Si tras analizar tu factura vemos que ya tienes la mejor opción, te lo decimos con honestidad y sigues igual. Cero riesgos.
              </p>
            </div>
          </div>

          {/* Tarjeta Alta (Gestión Total) */}
          <div className="md:col-span-4 md:row-span-2 bg-gradient-to-b from-sky-50 to-white p-8 sm:p-10 rounded-[2rem] border border-sky-100 shadow-sm flex flex-col items-center text-center justify-center group hover:shadow-lg transition-all duration-300">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">
              <FileEdit className="w-8 h-8 text-sky-500" />
            </div>
            <h4 className="text-2xl font-black text-slate-900 mb-4">Cero Papeleos:<br/>Nos encargamos de todo</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              Olvídate de trámites farragosos, formularios confusos o esperas interminables al teléfono. Nuestro equipo gestiona la transición de principio a fin por ti.
            </p>
          </div>

          {/* Tarjeta Mediana (Hasta 40% ahorro) */}
          <div className="md:col-span-4 bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-emerald-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 leading-tight">Ahorro directo desde el 1er mes</h4>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Reducimos tanto el término fijo (potencia) como el término variable (energía), logrando un recorte de <strong>hasta el 40%</strong> en tu recibo mensual.
            </p>
          </div>

          {/* Tarjeta Mediana (100% Seguro) */}
          <div className="md:col-span-4 bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
                <Lock className="w-6 h-6 text-sky-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 leading-tight">Suministro 100% Garantizado</h4>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              El cambio es puramente administrativo según la normativa. <strong>Jamás habrá cortes de luz o gas</strong> ni visitas molestas de técnicos a tu domicilio.
            </p>
          </div>

          {/* Tarjeta Cuadrada Larga (Trato Humano) */}
          <div className="md:col-span-6 bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex items-center gap-6 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex flex-shrink-0 items-center justify-center">
              <Users className="w-8 h-8 text-orange-500" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Tu propio asesor dedicado</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Nada de hablar con contestadores impersonales. Tendrás un asesor personal asignado con contacto directo para ti.
              </p>
            </div>
          </div>

          {/* Tarjeta Cuadrada Larga (Blindaje continuo) */}
          <div className="md:col-span-6 bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex items-center gap-6 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex flex-shrink-0 items-center justify-center">
              <Lightbulb className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Blindaje frente a subidas</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Monitorizamos tu contrato continuamente. Antes de la renovación, revisamos las condiciones para evitar tarifas abusivas.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

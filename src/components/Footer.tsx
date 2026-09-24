"use client";

import React from "react";
import { Logo } from "./Logo";
import { Phone, Mail, MapPin, ShieldCheck, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      {/* Pie de página superior: Columnas principales */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Información de la marca */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Grupo EMAX es un centro independiente de soluciones energéticas 360°. Auditamos y optimizamos los suministros de luz y gas para particulares y empresas en toda España, garantizando el máximo ahorro con total transparencia.
            </p>
            <div className="pt-2 text-xs text-slate-500">
              <p className="font-semibold text-slate-400">Metamorfosis Energética S.L.</p>
              <p>NIF: B-67891234 · Sede en Granollers (Barcelona), España</p>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#problema" className="hover:text-cyan-400 transition-colors">
                  Por qué pagar menos
                </a>
              </li>
              <li>
                <a href="#solucion" className="hover:text-cyan-400 transition-colors">
                  Solución 360° EMAX
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-cyan-400 transition-colors">
                  Simulador de ahorro
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-cyan-400 transition-colors">
                  Beneficios del servicio
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-cyan-400 transition-colors">
                  Cómo funciona en 3 pasos
                </a>
              </li>
              <li>
                <a href="#faq-chatbot" className="hover:text-cyan-400 transition-colors">
                  Asistente IA / Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Soluciones Energéticas
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#formulario" className="hover:text-cyan-400 transition-colors">
                  Auditoría Luz y Gas Hogares
                </a>
              </li>
              <li>
                <a href="#formulario" className="hover:text-cyan-400 transition-colors">
                  Optimización Potencia Pymes
                </a>
              </li>
              <li>
                <a href="#formulario" className="hover:text-cyan-400 transition-colors">
                  Eliminación de Energía Reactiva
                </a>
              </li>
              <li>
                <a href="#formulario" className="hover:text-cyan-400 transition-colors">
                  Autoconsumo y Placas Solares
                </a>
              </li>
              <li>
                <a href="#formulario" className="hover:text-cyan-400 transition-colors">
                  Baterías Inteligentes con IA
                </a>
              </li>
              <li>
                <a href="#formulario" className="hover:text-cyan-400 transition-colors">
                  Climatización y Aerotermia
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto directo */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Atención al Cliente
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="tel:+34900831204" className="hover:text-white transition-colors">
                  900 831 204 <span className="text-[10px] text-emerald-400">(Llamada gratis)</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="mailto:info@grupo-emax.es" className="hover:text-white transition-colors">
                  info@grupo-emax.es
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>Granollers, Barcelona · Cobertura en toda España</span>
              </li>
            </ul>

            <div className="pt-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                Agente independiente registrado
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Barra legal y derechos de autor */}
      <div className="border-t border-slate-900 py-8 px-4 sm:px-6 lg:px-8 bg-slate-950/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Grupo EMAX. Todos los derechos reservados. Operado por Metamorfosis Energética S.L.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="#aviso-legal" className="hover:text-slate-300 transition-colors">
              Aviso Legal
            </a>
            <span className="text-slate-700">•</span>
            <a href="#privacidad" className="hover:text-slate-300 transition-colors">
              Política de Privacidad
            </a>
            <span className="text-slate-700">•</span>
            <a href="#cookies" className="hover:text-slate-300 transition-colors">
              Política de Cookies
            </a>
            <span className="text-slate-700">•</span>
            <a href="#condiciones" className="hover:text-slate-300 transition-colors">
              Condiciones del Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

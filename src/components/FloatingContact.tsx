"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, X, Sparkles } from "lucide-react";

export const FloatingContact: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="Contacto rápido" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {/* Speech bubble badge */}
      {showTooltip && (
        <div className="bg-slate-900 text-white text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-slate-700 max-w-xs flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-medium text-slate-200">
              ¿Dudas con tu factura? Te ayudamos por WhatsApp
            </span>
          </div>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white"
            title="Cerrar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Buttons Group */}
      <div className="flex items-center gap-2.5">
        <a
          href="tel:+34900831204"
          className="w-12 h-12 rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-xl border border-slate-700 flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 group"
          title="Llamar gratis al 900 831 204"
        >
          <Phone className="w-5 h-5 text-sky-400 group-hover:rotate-12 transition-transform" />
        </a>

        <a
          href="https://wa.me/34900831204?text=Hola%20Grupo%20EMAX,%20tengo%20una%20duda%20sobre%20mi%20factura%20de%20luz/gas."
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-xl shadow-emerald-600/30 flex items-center justify-center transition-all transform hover:scale-110 active:scale-95"
          title="Abrir chat de WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-sky-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
            1
          </span>
        </a>
      </div>
    </aside>
  );
};

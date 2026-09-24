"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  MessageCircle,
  Phone,
  X,
  Sparkles,
  Send,
  Bot,
  RotateCcw,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

interface MensajeChat {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  actionText?: string;
  actionHref?: string;
}

const PREGUNTAS_RAPIDAS = [
  {
    id: "coste",
    chip: "⚡ ¿El estudio es 100% gratuito?",
    pregunta: "¿Tiene algún coste el diagnóstico de mi factura?",
    respuesta:
      "**Totalmente 0 €.** La auditoría energética y el estudio de optimización son 100% gratuitos y sin ningún compromiso ni permanencia. Si vemos que ya tienes la mejor tarifa, te lo decimos con honestidad y no te cobramos nada.",
    actionText: "Solicitar estudio gratuito",
    actionHref: "#formulario",
  },
  {
    id: "factura",
    chip: "📄 ¿Cómo os envío mi factura?",
    pregunta: "¿Qué necesito para que reviséis mi caso?",
    respuesta:
      "Solo necesitas adjuntar una foto o archivo PDF de tu última factura de luz o gas en nuestro formulario web (o por WhatsApp). Con eso auditamos tu consumo real en menos de 24h.",
    actionText: "Subir mi factura ahora",
    actionHref: "#formulario",
  },
  {
    id: "ahorro",
    chip: "📉 ¿Cuánto puedo ahorrar?",
    pregunta: "¿Cuánto dinero puedo ahorrar en mi recibo?",
    respuesta:
      "En promedio logramos entre un **28% y un 41% de ahorro** ajustando potencias sobredimensionadas y negociando precios por kWh sin permanencia.",
    actionText: "Calcular mi ahorro en simulador",
    actionHref: "#simulador",
  },
  {
    id: "permanencia",
    chip: "🔒 ¿Tengo permanencia?",
    pregunta: "¿Existe algún tipo de contrato de permanencia?",
    respuesta:
      "**Ninguna.** Trabajas con nosotros con total libertad. Si en el futuro decides cambiar, eres 100% libre sin penalizaciones.",
  },
];

export const ContactoFlotante: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [mensajes, setMensajes] = useState<MensajeChat[]>([
    {
      id: "bienvenida-1",
      sender: "bot",
      text: "¡Hola! 👋 Soy **Maxi**, tu asesor virtual de Grupo EMAX.\n\n¿Tienes dudas sobre cómo ahorrar en tu factura de luz o gas? Elige una consulta rápida o escríbeme directamente.",
      timestamp: "Ahora",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [mensajes, isTyping, isOpen]);

  const handleSelectPregunta = (item: (typeof PREGUNTAS_RAPIDAS)[0]) => {
    const userMsg: MensajeChat = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: item.pregunta,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMensajes((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: MensajeChat = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: item.respuesta,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        actionText: item.actionText,
        actionHref: item.actionHref,
      };
      setMensajes((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleEnviarMensaje = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const textoUsuario = inputText.trim();
    const userMsg: MensajeChat = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: textoUsuario,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMensajes((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      const query = textoUsuario.toLowerCase();
      const coincidencia = PREGUNTAS_RAPIDAS.find(
        (p) =>
          query.includes("cost") ||
          query.includes("gratis") ||
          query.includes("ahorr") ||
          query.includes("factura") ||
          query.includes("permanencia")
      );

      const respuestaBot = coincidencia
        ? coincidencia.respuesta
        : "¡Entendido! Para analizar tu caso específico de forma 100% personalizada e imparcial, nos puedes enviar tu factura en el formulario o escribirnos directamente por WhatsApp.";

      const botMsg: MensajeChat = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: respuestaBot,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        actionText: coincidencia?.actionText || "Enviar factura para estudio",
        actionHref: coincidencia?.actionHref || "#formulario",
      };
      setMensajes((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <aside aria-label="Asistente flotante" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
      {/* 1. Ventana emergente flotante del Chatbot en la esquina */}
      {isOpen && (
        <div className="w-[92vw] sm:w-96 max-h-[75vh] h-[500px] shrink-0 rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300 backdrop-blur-2xl">
          {/* Encabezado del Chatbot flotante con Avatar de Maxi */}
          <div className="p-4 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full border-2 border-cyan-400 p-0.5 bg-slate-800 overflow-hidden shadow-md">
                <img
                  src="/imagenes/avatar_chatbot.jpg"
                  alt="Maxi Asistente IA EMAX"
                  className="w-full h-full object-cover rounded-full"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900 animate-pulse" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                  Maxi · Asistente IA
                  <span className="text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.2 rounded-full">
                    En línea
                  </span>
                </h3>
                <p className="text-[11px] text-slate-400">Asesoramiento Energético EMAX</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title="Cerrar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Área de mensajes con scroll */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 chat-scrollbar bg-slate-950/60">
            {mensajes.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-sky-600 to-cyan-600 text-white rounded-br-none shadow-md"
                      : "bg-slate-800/90 text-slate-200 border border-slate-700/80 rounded-bl-none shadow-sm"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text.replace(/\*\*(.*?)\*\*/g, "$1")}</p>

                  {msg.actionText && msg.actionHref && (
                    <div className="mt-3 pt-2 border-t border-slate-700/60">
                      <a
                        href={msg.actionHref}
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1.5 font-bold text-cyan-300 hover:text-cyan-200 transition-colors text-xs"
                      >
                        <span>{msg.actionText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
                <span className="text-[10px] text-slate-500 mt-1 px-1">{msg.timestamp}</span>
              </div>
            ))}

            {/* Indicador de escribiendo */}
            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-800/80 border border-slate-700 px-3 py-2 rounded-xl w-fit">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "0.2s" }} />
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "0.4s" }} />
                <span className="ml-1 text-[11px]">Maxi está escribiendo...</span>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Chips de preguntas frecuentes rápidas */}
          <div className="p-3 bg-slate-900 border-t border-slate-800/80">
            <p className="text-[11px] font-semibold text-slate-400 mb-2">Preguntas frecuentes rápidas:</p>
            <div className="flex gap-1.5 overflow-x-auto pb-1 chat-scrollbar">
              {PREGUNTAS_RAPIDAS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectPregunta(item)}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-cyan-300 text-[11px] font-medium border border-slate-700 transition-colors flex-shrink-0"
                >
                  {item.chip}
                </button>
              ))}
            </div>
          </div>

          {/* Formulario de entrada de texto */}
          <form onSubmit={handleEnviarMensaje} className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Escribe tu consulta aquí..."
              className="flex-1 bg-slate-800 text-white text-xs rounded-xl px-3.5 py-2.5 border border-slate-700 focus:outline-none focus:border-cyan-400 placeholder:text-slate-500"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
              title="Enviar mensaje"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* 2. Bocadillo informativo arriba de los botones flotantes */}
      {!isOpen && showTooltip && (
        <div className="bg-slate-900 text-white text-xs py-2.5 px-4 rounded-2xl shadow-2xl border border-cyan-500/40 max-w-xs flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 text-left hover:text-cyan-300 transition-colors"
          >
            <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 border border-cyan-400">
              <img
                src="/imagenes/avatar_chatbot.jpg"
                alt="Avatar Maxi"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-medium text-slate-200 leading-snug">
              💬 ¡Hola! Soy <strong className="text-cyan-300">Maxi</strong>. ¿Dudas con tu factura de luz o gas?
            </span>
          </button>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-1"
            title="Cerrar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* 3. Grupo de Botones Flotantes en la esquina */}
      <div className="flex flex-col items-center gap-3">
        {!isOpen && (
          <>
            {/* Botón de Llamada directa */}
            <a
              href="tel:+34900831204"
              className="w-12 h-12 rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-xl border border-slate-700 flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 group"
              title="Llamar gratis al 900 831 204"
            >
              <Phone className="w-5 h-5 text-sky-400 group-hover:rotate-12 transition-transform" />
            </a>

            {/* Botón de WhatsApp directo */}
            <a
              href="https://wa.me/34900831204?text=Hola%20Grupo%20EMAX,%20tengo%20una%20duda%20sobre%20mi%20factura%20de%20luz/gas."
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-xl shadow-emerald-600/30 flex items-center justify-center transition-all transform hover:scale-105 active:scale-95"
              title="Chat de WhatsApp directo"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </>
        )}

        {/* Botón Principal del Chatbot con la foto de avatar_chatbot.jpg */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-sky-500 via-cyan-500 to-emerald-500 p-[3px] shadow-2xl shadow-cyan-500/40 transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center group"
          title="Abrir Asistente Virtual Maxi"
        >
          <div className="w-full h-full rounded-full bg-slate-900 p-0.5 overflow-hidden flex items-center justify-center">
            <img
              src="/imagenes/avatar_chatbot.jpg"
              alt="Avatar Chatbot Maxi"
              className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Insignia notificadora interactiva */}
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 text-slate-950 text-[11px] font-black rounded-full flex items-center justify-center border-2 border-slate-900 shadow-md">
            1
          </span>
        </button>
      </div>
    </aside>
  );
};

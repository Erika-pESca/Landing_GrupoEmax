"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Bot,
  Send,
  Sparkles,
  RotateCcw,
  ListFilter,
  MessageSquare,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

interface FaqItem {
  id: string;
  category: string;
  question: string;
  shortChip: string;
  answer: string;
  actionText?: string;
  actionHref?: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: "coste",
    category: "Coste",
    shortChip: "💸 ¿Tiene algún coste?",
    question: "¿Tiene algún coste el estudio energético?",
    answer:
      "¡Ninguno! En Grupo EMAX la auditoría y diagnóstico de tu factura de luz y gas es **100% gratuita y sin compromiso**. Analizamos tu consumo y te mostramos las opciones de ahorro. Si decides no hacer ningún cambio, no pagas absolutamente nada.",
    actionText: "Solicitar mi estudio gratis",
    actionHref: "#formulario",
  },
  {
    id: "cambio",
    category: "Compañías",
    shortChip: "🔄 ¿Cambio obligatorio?",
    question: "¿Tengo que cambiarme de compañía obligatoriamente?",
    answer:
      "**No, en absoluto.** No representamos a ninguna comercializadora en exclusiva, defendemos tus intereses. Si tras auditar tu factura comprobamos que tu contrato actual ya es el más ventajoso del mercado, te lo diremos con honestidad y no te tocaremos nada. Solo te propondremos un cambio si el ahorro es real y significativo.",
    actionText: "Comprobar mi tarifa",
    actionHref: "#simulador",
  },
  {
    id: "tiempo",
    category: "Plazos",
    shortChip: "⏱️ ¿Cuánto tarda?",
    question: "¿Cuánto tarda la revisión de mi factura?",
    answer:
      "En menos de **24 a 48 horas laborables** nuestros ingenieros y consultores energéticos completan el análisis de tu curva de consumo. Te enviaremos un informe comparativo claro y detallado con el ahorro anual exacto en euros.",
    actionText: "Enviar factura para revisión",
    actionHref: "#formulario",
  },
  {
    id: "suministro",
    category: "Seguridad",
    shortChip: "⚡ ¿Corte de suministro?",
    question: "¿Me puedo quedar sin luz o gas durante el cambio?",
    answer:
      "**Jamás.** Por legislación española (CNMC), el cambio de comercializadora es un trámite **100% administrativo**. La distribuidora de tu zona sigue siendo la misma, no se interrumpe el suministro ni un segundo y no hace falta cambiar cables, contadores ni aparatos.",
  },
  {
    id: "requisitos",
    category: "Documentación",
    shortChip: "📄 ¿Qué necesito para empezar?",
    question: "¿Qué documentos necesito para que analicéis mi caso?",
    answer:
      "Únicamente necesitamos **tu última factura de luz o gas** (en PDF o foto legible). En ella aparecen los datos técnicos necesarios (código CUPS, potencia contratada y consumo mensual) para calcular tu optimización exacta.",
    actionText: "Subir mi factura ahora",
    actionHref: "#formulario",
  },
  {
    id: "empresas",
    category: "Empresas",
    shortChip: "🏢 ¿Aplica a empresas?",
    question: "¿Aplica también para pymes, comercios y empresas?",
    answer:
      "**Sí, con resultados aún mayores.** En empresas, oficinas, industrias y locales comerciales solemos detectar importantes penalizaciones por energía reactiva y excesos de potencia contratada. En negocios conseguimos ahorros de miles de euros al año.",
    actionText: "Consultoría para empresas",
    actionHref: "#formulario",
  },
  {
    id: "solar",
    category: "Sostenibilidad",
    shortChip: "☀️ ¿Instaláis placas solares?",
    question: "¿Ofrecéis también placas solares, baterías y aerotermia?",
    answer:
      "¡Sí! Somos un centro de soluciones energéticas 360°. Desarrollamos proyectos llave en mano de **autoconsumo fotovoltaico**, baterías inteligentes con IA, gestión de subvenciones públicas y climatización eficiente (aerotermia).",
  },
];

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  actionText?: string;
  actionHref?: string;
}

export const FaqChatbot: React.FC = () => {
  const [viewMode, setViewMode] = useState<"chat" | "accordion">("chat");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "¡Hola! 👋 Soy **Maxi**, tu asesor energético virtual de Grupo EMAX.\n\n¿Tienes dudas sobre cómo ahorrar en tu factura de luz o gas? Haz clic en cualquiera de las preguntas frecuentes más habituales abajo o escribe tu consulta.",
      timestamp: "Ahora",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState("");
  const [openAccordionId, setOpenAccordionId] = useState<string | null>("coste");

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (viewMode === "chat") {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, viewMode]);

  const handleSelectFaq = (faq: FaqItem) => {
    // Add user message
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: faq.question,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // Simulate realistic typing
    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: faq.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        actionText: faq.actionText,
        actionHref: faq.actionHref,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const query = inputText.trim().toLowerCase();
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: inputText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      // Find matching FAQ
      const matchedFaq = FAQ_DATA.find((faq) =>
        query.split(" ").some(
          (word) =>
            word.length > 3 &&
            (faq.question.toLowerCase().includes(word) ||
              faq.answer.toLowerCase().includes(word) ||
              faq.category.toLowerCase().includes(word))
        )
      );

      let replyText = "";
      let actionText = undefined;
      let actionHref = undefined;

      if (matchedFaq) {
        replyText = matchedFaq.answer;
        actionText = matchedFaq.actionText;
        actionHref = matchedFaq.actionHref;
      } else {
        replyText =
          "¡Gracias por tu consulta! Cada instalación o factura puede tener particularidades específicas. Si quieres una respuesta detallada adaptada a tu suministro, puedes solicitar la revisión gratuita en nuestro formulario o llamarnos al 900 831 204.";
        actionText = "Hablar con un asesor humano";
        actionHref = "#formulario";
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        actionText,
        actionHref,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "welcome-reset",
        sender: "bot",
        text: "Conversación reiniciada. ¿En qué más puedo orientarte hoy sobre tu factura energética?",
        timestamp: "Ahora",
      },
    ]);
  };

  return (
    <section id="faq-chatbot" className="py-20 md:py-28 bg-slate-100/70 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Bot className="w-3.5 h-3.5 text-cyan-600" />
            Asistente Inteligente de Preguntas Frecuentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            ¿Tienes dudas? Consulta con{" "}
            <span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
              nuestro Asesor Virtual EMAX
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Hemos preparado respuestas directas a las preguntas que más nos hacen nuestros clientes en España.
          </p>

          {/* Toggle between Chatbot Mode and Classic Accordion */}
          <div className="mt-6 inline-flex p-1 rounded-xl bg-slate-200/80 border border-slate-300/80">
            <button
              type="button"
              onClick={() => setViewMode("chat")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                viewMode === "chat"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <MessageSquare className="w-4 h-4 text-sky-600" />
              <span>Modo Chatbot Interactivo</span>
              <span className="px-1.5 py-0.2 rounded text-[10px] bg-emerald-100 text-emerald-700 font-extrabold">
                Recomendado
              </span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("accordion")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                viewMode === "accordion"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <ListFilter className="w-4 h-4 text-slate-500" />
              <span>Modo Lista Clásica</span>
            </button>
          </div>
        </div>

        {/* CHATBOT VIEW */}
        {viewMode === "chat" && (
          <div className="rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden max-w-3xl mx-auto flex flex-col h-[680px]">
            {/* Chatbot Header */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-500 to-cyan-400 p-[2px] shadow-sm">
                    <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-cyan-400">
                      <Bot className="w-6 h-6" />
                    </div>
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-white text-base">
                      Maxi · Asistente Grupo EMAX
                    </h4>
                    <span className="text-[10px] bg-sky-950 text-sky-300 border border-sky-800 rounded px-1.5 py-0.5 font-semibold">
                      IA Asesor
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>En línea · Responde al instante</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleResetChat}
                  title="Reiniciar chat"
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors text-xs flex items-center gap-1"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span className="hidden sm:inline">Reiniciar</span>
                </button>
              </div>
            </div>

            {/* Quick Question Chips Banner */}
            <div className="bg-slate-50 border-b border-slate-200/80 px-4 py-2.5 overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-2 min-w-max">
                <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  Preguntas rápidas:
                </span>
                {FAQ_DATA.map((faq) => (
                  <button
                    key={faq.id}
                    type="button"
                    onClick={() => handleSelectFaq(faq)}
                    className="px-3 py-1.5 rounded-full bg-white hover:bg-sky-50 text-slate-700 hover:text-sky-700 border border-slate-200 hover:border-sky-300 text-xs font-medium transition-all shadow-2xs whitespace-nowrap active:scale-95"
                  >
                    {faq.shortChip}
                  </button>
                ))}
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 sm:p-6 overflow-y-auto chat-scrollbar space-y-4 bg-slate-50/50">
              {messages.map((msg) => {
                const isBot = msg.sender === "bot";
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 ${
                      isBot ? "justify-start" : "justify-end"
                    }`}
                  >
                    {isBot && (
                      <div className="w-8 h-8 rounded-xl bg-sky-600 text-white flex items-center justify-center flex-shrink-0 text-xs shadow-sm mt-0.5">
                        <Bot className="w-4 h-4" />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 text-sm shadow-xs ${
                        isBot
                          ? "bg-white text-slate-800 border border-slate-200/90 rounded-tl-sm"
                          : "bg-gradient-to-r from-sky-600 to-cyan-600 text-white rounded-tr-sm"
                      }`}
                    >
                      <p className="whitespace-pre-line leading-relaxed">
                        {msg.text}
                      </p>

                      {/* Action button inside bot bubble if applicable */}
                      {msg.actionText && (
                        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                          <a
                            href={msg.actionHref || "#formulario"}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold text-xs border border-emerald-200 transition-colors"
                          >
                            <span>{msg.actionText}</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                      )}

                      <span
                        className={`block text-[10px] mt-1 text-right ${
                          isBot ? "text-slate-400" : "text-sky-200"
                        }`}
                      >
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Live typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 text-slate-400 text-xs pl-1">
                  <div className="w-8 h-8 rounded-xl bg-sky-600/10 text-sky-600 flex items-center justify-center">
                    <Bot className="w-4 h-4 animate-pulse" />
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl px-4 py-2.5 shadow-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce"></span>
                    <span
                      className="w-2 h-2 rounded-full bg-slate-400 animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></span>
                    <span
                      className="w-2 h-2 rounded-full bg-slate-400 animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></span>
                    <span className="text-xs text-slate-500 font-medium ml-1">
                      Maxi está respondiendo...
                    </span>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Chat Input Bar */}
            <form
              onSubmit={handleCustomSubmit}
              className="p-3 sm:p-4 bg-white border-t border-slate-200 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Escribe tu pregunta (ej: ¿cuánto cuesta?, ¿placas solares?)..."
                className="flex-1 bg-slate-100/80 hover:bg-slate-100 focus:bg-white text-slate-900 text-sm rounded-xl px-4 py-3 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none transition-all placeholder:text-slate-400"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="p-3 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:opacity-40 disabled:hover:bg-sky-600 text-white shadow-md shadow-sky-600/20 transition-all flex items-center justify-center"
                title="Enviar mensaje"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {/* ACCORDION CLASSIC VIEW */}
        {viewMode === "accordion" && (
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQ_DATA.map((faq) => {
              const isOpen = openAccordionId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition-all"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenAccordionId(isOpen ? null : faq.id)
                    }
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-sky-600 transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "rotate-180 text-sky-600" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      <p className="whitespace-pre-line">{faq.answer}</p>
                      {faq.actionText && (
                        <div className="mt-3">
                          <a
                            href={faq.actionHref || "#formulario"}
                            className="inline-flex items-center gap-1.5 font-bold text-xs text-sky-600 hover:text-sky-700"
                          >
                            <span>{faq.actionText}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom guarantee trust mark */}
        <div className="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>
            Todas las respuestas son transparentes y avaladas por consultores energéticos certificados.
          </span>
        </div>
      </div>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  Send,
  UploadCloud,
  FileCheck,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building2,
  Home,
  Briefcase,
  Zap,
  Flame,
  Phone,
  Mail,
  User,
  Clock,
  MessageCircle,
} from "lucide-react";

export const Formulario: React.FC = () => {
  const [clientType, setClientType] = useState<"particular" | "autonomo" | "empresa">("particular");
  const [supplyType, setSupplyType] = useState<"luz" | "gas" | "dual">("dual");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [acceptTerms, setAcceptTerms] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!fullName.trim()) {
      setFormError("Por favor, introduce tu nombre completo.");
      return;
    }
    if (!phone.trim()) {
      setFormError("Por favor, introduce un teléfono de contacto válido.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setFormError("Por favor, introduce un correo electrónico válido.");
      return;
    }
    if (!acceptTerms) {
      setFormError("Debes aceptar la política de privacidad para procesar el estudio gratuito.");
      return;
    }

    setIsLoading(true);

    // Simular procesamiento de servidor
    setTimeout(() => {
      setIsLoading(false);
      const generatedTicket = `EMAX-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketNumber(generatedTicket);
      setIsSubmitted(true);

      // Lanzar confeti de celebración
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // Captura segura en caso de fallo
      }
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setFileName(null);
  };

  return (
    <section id="formulario" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative backdrop elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Reassurance & Value propositions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Estudio 100% Gratuito y Confidencial
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Solicita tu auditoría energética y empieza a pagar menos.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Rellena este formulario en 30 segundos. Un consultor experto de Grupo EMAX revisará tu factura y te contactará con un plan de ahorro concreto para tu caso.
            </p>

            {/* Check guarantees */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Respuesta garantizada en 24 horas
                  </h4>
                  <p className="text-xs text-slate-500">
                    No te haremos esperar. Revisamos tu factura con rapidez y rigor técnico.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Sin llamadas comerciales pesadas
                  </h4>
                  <p className="text-xs text-slate-500">
                    Solo te contactaremos para entregarte los resultados de tu estudio energético.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Protección estricta de datos (RGPD)
                  </h4>
                  <p className="text-xs text-slate-500">
                    Tus facturas y datos están protegidos y jamás se ceden a terceros.
                  </p>
                </div>
              </div>
            </div>

            {/* Support box */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500">¿Prefieres atención telefónica directa?</p>
                <a
                  href="tel:+34900831204"
                  className="text-base font-bold text-slate-900 hover:text-sky-600 transition-colors"
                >
                  900 831 204 <span className="text-xs text-emerald-600 font-semibold">(Llamada gratis)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-2xl relative">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Client Type selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Tipo de cliente <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {[
                        { id: "particular", label: "Particular", icon: Home },
                        { id: "autonomo", label: "Autónomo", icon: Briefcase },
                        { id: "empresa", label: "Empresa", icon: Building2 },
                      ].map((item) => {
                        const Icon = item.icon;
                        const isSelected = clientType === item.id;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setClientType(item.id as any)}
                            className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                              isSelected
                                ? "bg-sky-50 border-sky-600 text-sky-700 shadow-2xs font-bold"
                                : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                            }`}
                          >
                            <Icon className={`w-4 h-4 ${isSelected ? "text-sky-600" : "text-slate-400"}`} />
                            <span>{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Supply Type selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Suministro a revisar <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {[
                        { id: "luz", label: "Electricidad", icon: Zap },
                        { id: "gas", label: "Gas Natural", icon: Flame },
                        { id: "dual", label: "Luz + Gas", icon: Sparkles },
                      ].map((item) => {
                        const Icon = item.icon;
                        const isSelected = supplyType === item.id;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setSupplyType(item.id as any)}
                            className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                              isSelected
                                ? "bg-sky-50 border-sky-600 text-sky-700 shadow-2xs font-bold"
                                : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                            }`}
                          >
                            <Icon className={`w-4 h-4 ${isSelected ? "text-sky-600" : "text-slate-400"}`} />
                            <span>{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 3: Contact Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Nombre completo <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Ej: Carlos Fernández"
                          className="w-full bg-slate-50 pl-10 pr-4 py-3 rounded-xl text-sm border border-slate-200 text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none transition-all placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Teléfono de contacto <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Ej: 612 345 678"
                          className="w-full bg-slate-50 pl-10 pr-4 py-3 rounded-xl text-sm border border-slate-200 text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none transition-all placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Correo electrónico <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tuemail@ejemplo.es"
                        className="w-full bg-slate-50 pl-10 pr-4 py-3 rounded-xl text-sm border border-slate-200 text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Optional File upload */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Adjuntar última factura (Opcional - agiliza el estudio)
                    </label>
                    <label className="border-2 border-dashed border-slate-200 hover:border-sky-400 bg-slate-50/70 hover:bg-sky-50/40 rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer transition-all">
                      <input
                        type="file"
                        accept=".pdf,.png,.jpg,.jpeg"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      {fileName ? (
                        <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm">
                          <FileCheck className="w-5 h-5" />
                          <span>{fileName} (Archivo listo para análisis)</span>
                        </div>
                      ) : (
                        <div className="text-center">
                          <UploadCloud className="w-6 h-6 text-sky-500 mx-auto mb-1" />
                          <p className="text-xs font-semibold text-slate-700">
                            Haz clic para subir o arrastra tu factura
                          </p>
                          <p className="text-[11px] text-slate-400">
                            PDF, JPG o PNG (máx. 10 MB)
                          </p>
                        </div>
                      )}
                    </label>
                  </div>

                  {/* Message area */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Mensaje o consulta adicional (Opcional)
                    </label>
                    <textarea
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Indícanos si tienes dudas con algún aspecto específico de tu factura..."
                      className="w-full bg-slate-50 p-3 rounded-xl text-sm border border-slate-200 text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Terms acceptance */}
                  <div
                    onClick={() => setAcceptTerms(!acceptTerms)}
                    className="flex items-start gap-2.5 pt-1 cursor-pointer select-none"
                  >
                    <input
                      type="checkbox"
                      id="terms"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500 cursor-pointer"
                    />
                    <label htmlFor="terms" className="text-xs text-slate-500 leading-tight cursor-pointer">
                      Acepto la{" "}
                      <span className="text-sky-600 underline">
                        política de privacidad
                      </span>{" "}
                      y autorizo el tratamiento de mis datos para la realización del estudio energético gratuito por parte de Grupo EMAX.
                    </label>
                  </div>

                  {/* Form Error alert if any */}
                  {formError && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
                      <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 px-6 rounded-xl font-bold text-base text-white bg-gradient-to-r from-sky-600 via-sky-500 to-emerald-500 hover:from-sky-700 hover:to-emerald-600 shadow-xl shadow-sky-600/25 hover:shadow-sky-600/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:hover:transform-none flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Procesando y registrando solicitud...</span>
                      </>
                    ) : (
                      <>
                        <span>Solicitar Estudio Gratuito y Sin Compromiso</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-400 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    Tus datos están protegidos bajo cifrado SSL y la ley RGPD de España.
                  </p>
                </form>
              ) : (
                /* SUCCESS CONFIRMATION MODAL STATE */
                <div className="text-center py-8 px-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 mb-3">
                    Solicitud Registrada con Éxito
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                    ¡Gracias, {fullName || "cliente"}!
                  </h3>

                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                    Hemos recibido correctamente tus datos. Uno de nuestros consultores energéticos está revisando las tarifas más competitivas para tu suministro.
                  </p>

                  {/* Ticket Details Box */}
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 max-w-sm mx-auto text-left mb-6 space-y-2">
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>Nº de Radicado:</span>
                      <strong className="text-slate-900 font-mono">{ticketNumber}</strong>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>Tiempo estimado:</span>
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <Clock className="w-3 h-3" /> En menos de 24 horas
                      </span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>Canal preferente:</span>
                      <span className="text-slate-700 font-medium">{phone}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <a
                      href="https://wa.me/34900831204?text=Hola%20Grupo%20EMAX,%20acabo%20de%20solicitar%20mi%20estudio%20gratuito."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Contactar por WhatsApp
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 font-semibold text-xs transition-colors"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

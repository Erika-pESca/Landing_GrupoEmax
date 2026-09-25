"use client";

import React, { useState, useRef, useEffect } from "react";
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
  Volume2,
  VolumeX,
  RotateCcw,
  Play,
  Pause,
  ArrowRight,
  ArrowLeft,
  X,
  FileText,
  Lock,
} from "lucide-react";

export const Formulario: React.FC = () => {
  // Stepper state (Step 1: Supply & Invoice, Step 2: Contact Details)
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);

  // Form fields
  const [clientType, setClientType] = useState<"particular" | "autonomo" | "empresa">("particular");
  const [supplyType, setSupplyType] = useState<"luz" | "gas" | "dual">("dual");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileSize, setFileSize] = useState<string | null>(null);
  const [acceptTerms, setAcceptTerms] = useState(true);

  // Submission state
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  // Video & Audio state
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAudioBadge, setShowAudioBadge] = useState(true);

  // 1. Intersection Observer: reproduce el video cuando el usuario se desplaza hasta el formulario
  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            // Intentar reproducir (por defecto silenciado si el navegador bloquea autoplay con sonido)
            videoRef.current
              .play()
              .then(() => {
                setIsPlaying(true);
              })
              .catch(() => {
                if (videoRef.current) {
                  videoRef.current.muted = true;
                  setIsMuted(true);
                  videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
                }
              });
          } else if (!entry.isIntersecting && videoRef.current) {
            // Pausar si sale de la vista para optimizar recursos
            videoRef.current.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(currentSection);
    return () => observer.disconnect();
  }, []);

  // 2. Al sentir el cursor (MouseEnter sobre el video): activar audio y reproducir de inmediato
  const handleVideoMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      setShowAudioBadge(false);

      if (videoRef.current.paused) {
        videoRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.log("Autoplay con audio requiere interacción previa:", err);
          });
      }
    }
  };

  // Alternar Mute / Sonido
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted) {
        setShowAudioBadge(false);
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  };

  // Alternar Play / Pause
  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Reiniciar Video desde el segundo 0 con sonido
  const handleRestart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      setIsMuted(false);
      setShowAudioBadge(false);
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  // Manejo de archivo de factura
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      const sizeInMb = (file.size / (1024 * 1024)).toFixed(1);
      setFileSize(`${sizeInMb} MB`);
    }
  };

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFileName(null);
    setFileSize(null);
  };

  // Paso 1 -> Paso 2
  const handleNextStep = () => {
    setFormError(null);
    setCurrentStep(2);
  };

  // Envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!fullName.trim()) {
      setFormError("Por favor, introduce tu nombre completo.");
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, "").length < 8) {
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

    // Simular procesamiento del servidor
    setTimeout(() => {
      setIsLoading(false);
      const generatedTicket = `EMAX-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketNumber(generatedTicket);
      setIsSubmitted(true);

      // Lanzar confeti de éxito
      try {
        confetti({
          particleCount: 110,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // Fallback seguro
      }
    }, 1100);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setFullName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setFileName(null);
    setFileSize(null);
  };

  return (
    <section
      ref={sectionRef}
      id="formulario"
      className="py-10 md:py-14 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
    >
      {/* Luces y degradados decorativos sutiles de fondo */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-200/30 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-200/25 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ========================================================
              COLUMNA IZQUIERDA: VIDEO ASESOR INTERACTIVO CON MAXI
              ======================================================== */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Contenedor del video con diseño de tarjeta/dispositivo estilizado */}
            <div
              onMouseEnter={handleVideoMouseEnter}
              onClick={handleVideoMouseEnter}
              className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-[32px] overflow-hidden bg-slate-900 border-2 border-sky-400/40 shadow-2xl shadow-sky-500/20 group cursor-pointer transition-all duration-300 hover:border-sky-400 hover:shadow-sky-500/30"
              style={{ aspectRatio: "9/15" }}
            >
              {/* Elemento de video */}
              <video
                ref={videoRef}
                src="/imagenes/avatar_solicitaAuditoria.mp4"
                playsInline
                loop
                muted={isMuted}
                preload="auto"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-cover object-center"
              />

              {/* Degradado superior para legibilidad del header */}
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent pointer-events-none" />

              {/* Header flotante sobre el video */}
              <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-auto">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/15 shadow-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-white tracking-wide">Maxi · Asesor EMAX</span>
                </div>

                <div className="flex items-center gap-1">
                  {/* Botón Reiniciar */}
                  <button
                    type="button"
                    onClick={handleRestart}
                    title="Reiniciar mensaje"
                    className="p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white backdrop-blur-md border border-white/15 transition-all shadow-md active:scale-95"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>

                  {/* Botón Mute / Sonido */}
                  <button
                    type="button"
                    onClick={toggleMute}
                    title={isMuted ? "Activar audio" : "Silenciar audio"}
                    className={`p-2 rounded-full backdrop-blur-md border transition-all shadow-md active:scale-95 flex items-center gap-1.5 ${
                      isMuted
                        ? "bg-slate-900/80 hover:bg-slate-800 text-amber-300 border-white/15"
                        : "bg-emerald-600/90 hover:bg-emerald-500 text-white border-emerald-400/40"
                    }`}
                  >
                    {isMuted ? (
                      <VolumeX className="w-3.5 h-3.5" />
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5" />
                        {/* Ecualizador animado */}
                        <div className="flex items-end gap-0.5 h-3">
                          <span className="w-0.5 bg-white rounded-full animate-pulse h-full" />
                          <span className="w-0.5 bg-white rounded-full animate-ping h-2/3" />
                          <span className="w-0.5 bg-white rounded-full animate-pulse h-4/5" />
                        </div>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Prompt interactivo: Si está silenciado, invita a pasar el cursor o hacer clic */}
              {isMuted && showAudioBadge && (
                <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
                  <div className="px-4 py-2.5 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-sky-400/60 shadow-xl flex items-center gap-2.5 animate-bounce text-center max-w-[270px]">
                    <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0">
                      <Volume2 className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-white">Escuchar a Maxi</p>
                      <p className="text-[10px] text-sky-200">Pasa el cursor o haz clic</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Degradado inferior para subtítulos y controles */}
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent pointer-events-none" />

              {/* Subtítulo dinámico / Transcripción accesible del mensaje */}
              <div className="absolute bottom-4 inset-x-4 pointer-events-auto">
                <div className="p-3 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-white/10 text-white text-xs leading-snug shadow-lg">
                  <p className="flex items-start gap-2">
                    <span className="text-sky-400 font-bold flex-shrink-0">Maxi:</span>
                    <span className="text-slate-200 text-[11px] sm:text-xs">
                      &quot;Solicita tu auditoría, solo te toma 30 segundos. Revisamos tu factura y te contactamos en menos de 24 horas, sin compromiso.&quot;
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Micro-banner de atención telefónica opcional debajo del video */}
            <div className="mt-5 w-full max-w-[340px] sm:max-w-[380px] p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 font-medium">¿Prefieres atención telefónica?</p>
                  <a
                    href="tel:+34692427690"
                    className="text-xs font-bold text-slate-900 hover:text-sky-600 transition-colors"
                  >
                    +34 692 42 76 90 <span className="text-emerald-600 font-semibold">(Gratis)</span>
                  </a>
                </div>
              </div>
              <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                Inmediato
              </span>
            </div>
          </div>

          {/* ========================================================
              COLUMNA DERECHA: FORMULARIO FINTECH EN 2 PASOS ÁGILES
              ======================================================== */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 md:p-10 shadow-xl shadow-slate-200/50 relative">
              {!isSubmitted ? (
                <>
                  {/* Encabezado del Formulario */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 mb-2">
                      <Sparkles className="w-4 h-4 text-sky-500" />
                      <span>Auditoría Energética Gratuita</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      Ahorra hasta un 40% en tu factura
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Completar este formulario te toma menos de 30 segundos. Sin permanencia ni coste.
                    </p>
                  </div>

                  {/* Barra de Progreso de 2 Pasos */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className={`flex items-center gap-2 py-2 px-3 rounded-xl border text-xs font-bold transition-all text-left ${
                        currentStep === 1
                          ? "bg-sky-50 border-sky-500 text-sky-700 shadow-2xs"
                          : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                          currentStep === 1 ? "bg-sky-600 text-white" : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        1
                      </div>
                      <span className="truncate">Suministro y Factura</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className={`flex items-center gap-2 py-2 px-3 rounded-xl border text-xs font-bold transition-all text-left ${
                        currentStep === 2
                          ? "bg-sky-50 border-sky-500 text-sky-700 shadow-2xs"
                          : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                          currentStep === 2 ? "bg-sky-600 text-white" : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        2
                      </div>
                      <span className="truncate">Tus Datos de Contacto</span>
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* ====================================================
                        PASO 1: TIPO DE CLIENTE + SUMINISTRO + SUBIR FACTURA
                        ==================================================== */}
                    {currentStep === 1 && (
                      <div className="space-y-5 animate-in fade-in duration-200">
                        {/* Selector de Cliente */}
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
                                  className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-3 px-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all border ${
                                    isSelected
                                      ? "bg-sky-50 border-sky-600 text-sky-800 shadow-sm font-bold ring-2 ring-sky-500/20"
                                      : "bg-slate-50/70 border-slate-200 text-slate-600 hover:bg-slate-100"
                                  }`}
                                >
                                  <Icon className={`w-4 h-4 ${isSelected ? "text-sky-600" : "text-slate-400"}`} />
                                  <span>{item.label}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Selector de Suministro */}
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
                                  className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-3 px-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all border ${
                                    isSelected
                                      ? "bg-sky-50 border-sky-600 text-sky-800 shadow-sm font-bold ring-2 ring-sky-500/20"
                                      : "bg-slate-50/70 border-slate-200 text-slate-600 hover:bg-slate-100"
                                  }`}
                                >
                                  <Icon className={`w-4 h-4 ${isSelected ? "text-sky-600" : "text-slate-400"}`} />
                                  <span>{item.label}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Dropzone de subida de factura */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Adjuntar última factura{" "}
                            <span className="text-emerald-600 font-semibold normal-case">
                              (Opcional · Acelera el estudio a 24h)
                            </span>
                          </label>

                          <label className="border-2 border-dashed border-sky-200 hover:border-sky-500 bg-sky-50/30 hover:bg-sky-50/60 rounded-2xl p-5 flex flex-col items-center justify-center cursor-pointer transition-all duration-200">
                            <input
                              type="file"
                              accept=".pdf,.png,.jpg,.jpeg"
                              onChange={handleFileChange}
                              className="hidden"
                            />
                            {fileName ? (
                              <div className="flex items-center justify-between w-full p-2.5 rounded-xl bg-emerald-50 border border-emerald-200">
                                <div className="flex items-center gap-2.5 truncate">
                                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                                    <FileCheck className="w-4 h-4" />
                                  </div>
                                  <div className="text-left truncate">
                                    <p className="text-xs font-bold text-emerald-900 truncate">{fileName}</p>
                                    <p className="text-[10px] text-emerald-700">{fileSize || "Listo para análisis"}</p>
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  onClick={removeFile}
                                  className="p-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                                  title="Quitar factura"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            ) : (
                              <div className="text-center">
                                <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mx-auto mb-2">
                                  <UploadCloud className="w-5 h-5" />
                                </div>
                                <p className="text-xs font-bold text-slate-800">
                                  Arrastra aquí tu factura o <span className="text-sky-600 underline">haz clic para examinar</span>
                                </p>
                                <p className="text-[11px] text-slate-400 mt-0.5">
                                  PDF, JPG o PNG (máx. 10 MB)
                                </p>
                              </div>
                            )}
                          </label>
                        </div>

                        {/* Botón Siguiente Paso */}
                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={handleNextStep}
                            className="w-full py-4 px-6 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 hover:from-sky-700 hover:to-cyan-600 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                          >
                            <span>Continuar a Datos de Contacto</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* ====================================================
                        PASO 2: DATOS DE CONTACTO + ENVÍO
                        ==================================================== */}
                    {currentStep === 2 && (
                      <div className="space-y-4 animate-in fade-in duration-200">
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

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Mensaje o consulta adicional (Opcional)
                          </label>
                          <textarea
                            rows={2}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Coméntanos si tienes dudas sobre tu potencia actual o servicios adicionales..."
                            className="w-full bg-slate-50 p-3 rounded-xl text-sm border border-slate-200 text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none transition-all placeholder:text-slate-400"
                          />
                        </div>

                        {/* Aceptación de Términos */}
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
                            y autorizo el análisis energético gratuito de mi factura por Grupo EMAX.
                          </label>
                        </div>

                        {/* Error de validación */}
                        {formError && (
                          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
                            <span className="w-2 h-2 rounded-full bg-rose-500" />
                            <span>{formError}</span>
                          </div>
                        )}

                        {/* Botones de acción */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                          <button
                            type="button"
                            onClick={() => setCurrentStep(1)}
                            className="sm:w-1/3 py-3.5 px-4 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                          >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            <span>Paso anterior</span>
                          </button>

                          <button
                            type="submit"
                            disabled={isLoading}
                            className="sm:w-2/3 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-600 via-cyan-600 to-emerald-500 hover:from-sky-700 hover:to-emerald-600 shadow-xl shadow-sky-600/25 hover:shadow-sky-600/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:hover:transform-none flex items-center justify-center gap-2"
                          >
                            {isLoading ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span>Generando tu estudio...</span>
                              </>
                            ) : (
                              <>
                                <span>Solicitar Estudio Gratuito (0 €)</span>
                                <Send className="w-4 h-4" />
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    )}
                  </form>

                  {/* Micro-píldoras de confianza al pie del formulario */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      Cifrado SSL & RGPD España
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-sky-500" />
                      Respuesta en menos de 24h
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-slate-400" />
                      Cero llamadas pesadas
                    </span>
                  </div>
                </>
              ) : (
                /* ========================================================
                    MODAL DE ÉXITO Y CONFIRMACIÓN
                    ======================================================== */
                <div className="text-center py-6 px-2 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 mb-3">
                    Solicitud Registrada con Éxito
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                    ¡Gracias, {fullName || "cliente"}!
                  </h3>

                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                    Hemos recibido correctamente tus datos. Uno de nuestros consultores energéticos ya está auditando las mejores tarifas para tu suministro.
                  </p>

                  {/* Detalles del Radicado */}
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 max-w-sm mx-auto text-left mb-6 space-y-2">
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>Nº de Radicado:</span>
                      <strong className="text-slate-900 font-mono">{ticketNumber}</strong>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>Tiempo estimado:</span>
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <Clock className="w-3 h-3" /> Menos de 24 horas
                      </span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>Contacto registrado:</span>
                      <span className="text-slate-700 font-medium">{phone}</span>
                    </div>
                  </div>

                  {/* Acciones del Usuario */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <a
                      href="https://wa.me/34692427690?text=Hola%20Grupo%20EMAX,%20acabo%20de%20solicitar%20mi%20estudio%20gratuito."
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

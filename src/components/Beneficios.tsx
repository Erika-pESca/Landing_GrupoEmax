"use client";

import React from "react";
import {
  FileText,
  Search,
  TrendingDown,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
  Zap,
  Clock,
  UserCheck,
} from "lucide-react";

export const Beneficios: React.FC = () => {
  const stepsWithBenefits = [
    {
      step: "01",
      badge: "Menos de 1 minuto",
      title: "Nos envías tu factura",
      description:
        "Adjuntas una foto o PDF de tu última factura de luz o gas a través de nuestro formulario seguro. Sin recopilar historiales ni trámites bancarios complejos.",
      bgImage: "/imagenes/enviarfoto.webp",
      accentColor: "sky",
      icon: FileText,
      benefits: [
        {
          title: "100% Gratuito y sin ataduras",
          desc: "El análisis no tiene ningún coste para ti ni exige permanencia.",
        },
        {
          title: "Cero papeleos aburridos",
          desc: "Nosotros digitalizamos y extraemos todos los datos técnicos (CUPS, peajes).",
        },
        {
          title: "Privacidad blindada (RGPD)",
          desc: "Tus datos personales y de suministro están estrictamente protegidos.",
        },
      ],
      tagline: "Inicio ágil",
    },
    {
      step: "02",
      badge: "Análisis en 24h laborables",
      title: "Auditamos tu consumo real",
      description:
        "Nuestros consultores analizan tu curva horaria de potencia y contrastan tu tarifa con más de 40 comercializadoras activas en el mercado español.",
      bgImage: "/imagenes/revicion.jpg",
      accentColor: "emerald",
      icon: Search,
      benefits: [
        {
          title: "Ajuste quirúrgico de potencia",
          desc: "Eliminamos los kW sobrantes para que dejes de pagar por potencia no usada.",
        },
        {
          title: "Comparación 100% imparcial",
          desc: "No vendemos tarifas de marca propia; defendemos tus intereses de forma neutral.",
        },
        {
          title: "Detección de cobros ocultos",
          desc: "Identificamos servicios extra innecesarios y penalizaciones por reactiva.",
        },
      ],
      tagline: "Rigor técnico",
    },
    {
      step: "03",
      badge: "Libertad total de decisión",
      title: "Recibes tu propuesta y ahorras",
      description:
        "Te presentamos un informe nítido con los euros exactos que ahorrarás al año. Si das tu visto bueno, gestionamos la transición administrativa de inmediato.",
      bgImage: "/imagenes/recibe_propuesta.jpg",
      accentColor: "cyan",
      icon: TrendingDown,
      benefits: [
        {
          title: "Hasta 40% de ahorro directo",
          desc: "Recorte visible desde tu primer recibo tanto en potencia como en consumo.",
        },
        {
          title: "Suministro 100% ininterrumpido",
          desc: "El cambio es puramente administrativo. Jamás habrá cortes ni cambios de contador.",
        },
        {
          title: "Asesor personal y blindaje anual",
          desc: "Monitorizamos tus renovaciones para evitar subidas de precio sorpresa a futuro.",
        },
      ],
      tagline: "Tranquilidad garantizada",
    },
  ];

  return (
    <section id="beneficios" className="py-10 md:py-14 bg-slate-50 relative overflow-hidden">
      {/* Anclaje para navegación "Ahorrar en 3 Pasos" */}
      <div id="como-funciona" className="absolute -top-24 left-0 w-full pointer-events-none" />

      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-200/25 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-200/25 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera Principal */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4 border border-sky-200 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            El Método EMAX · Cómo Funciona y qué Ganas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Un proceso simple con{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500">
              beneficios garantizados
            </span>{" "}
            en cada paso
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminamos la complejidad del mercado energético. Conoce cómo transformamos tu factura paso a paso y qué ventajas reales obtienes desde el primer minuto.
          </p>
        </div>

        {/* ========================================================
            3 COLUMNAS MAJESTUOSAS: PASO + BENEFICIOS ASOCIADOS
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-8 md:mb-10">
          {stepsWithBenefits.map((item, index) => {
            const Icon = item.icon;

            // Paleta temática personalizada por paso
            const colorThemes: Record<
              string,
              {
                borderHover: string;
                shadowHover: string;
                topBarGradient: string;
                glowBg: string;
                badgeBg: string;
                iconBgHover: string;
                taglineText: string;
              }
            > = {
              sky: {
                borderHover: "hover:border-sky-400/90",
                shadowHover: "hover:shadow-sky-500/20",
                topBarGradient: "via-sky-400",
                glowBg: "bg-sky-400/15",
                badgeBg: "bg-sky-500/25 text-sky-200 border-sky-400/40",
                iconBgHover: "group-hover:bg-sky-500/30 group-hover:border-sky-300/50",
                taglineText: "text-sky-600",
              },
              emerald: {
                borderHover: "hover:border-emerald-400/90",
                shadowHover: "hover:shadow-emerald-500/20",
                topBarGradient: "via-emerald-400",
                glowBg: "bg-emerald-400/15",
                badgeBg: "bg-emerald-500/25 text-emerald-200 border-emerald-400/40",
                iconBgHover: "group-hover:bg-emerald-500/30 group-hover:border-emerald-300/50",
                taglineText: "text-emerald-600",
              },
              cyan: {
                borderHover: "hover:border-cyan-400/90",
                shadowHover: "hover:shadow-cyan-500/20",
                topBarGradient: "via-cyan-400",
                glowBg: "bg-cyan-400/15",
                badgeBg: "bg-cyan-500/25 text-cyan-200 border-cyan-400/40",
                iconBgHover: "group-hover:bg-cyan-500/30 group-hover:border-cyan-300/50",
                taglineText: "text-cyan-600",
              },
            };

            const theme = colorThemes[item.accentColor] || colorThemes.sky;

            return (
              <div
                key={index}
                className={`relative flex flex-col rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl ${theme.borderHover} ${theme.shadowHover} transform hover:-translate-y-3 transition-all duration-500 ease-out overflow-hidden group cursor-pointer`}
              >
                {/* 1. Barra superior de acento dinámico (se expande al pasar el cursor) */}
                <div
                  className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent ${theme.topBarGradient} to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-30`}
                />

                {/* 2. Resplandor ambiental de esquina en hover */}
                <div
                  className={`absolute -top-16 -right-16 w-44 h-44 rounded-full blur-2xl ${theme.glowBg} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10`}
                />

                {/* 3. Header Visual con Zoom Parallax de la Imagen y Rayo de Luz */}
                <div className="relative h-56 p-6 flex flex-col justify-between overflow-hidden">
                  {/* Capa de Imagen con Zoom suave en hover */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url('${item.bgImage}')` }}
                  />

                  {/* Degradado oscuro para legibilidad impecable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/60 group-hover:via-slate-950/70 transition-colors duration-500" />

                  {/* Rayo de luz reflectante (Shimmer Sheen) al hacer hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none z-20" />

                  {/* Top Bar: Icono Flotante + Número Gigante */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-md transform group-hover:scale-110 group-hover:rotate-6 ${theme.iconBgHover} transition-all duration-300`}
                    >
                      <Icon className="w-6 h-6 text-cyan-300 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-5xl font-black text-white/20 group-hover:text-white/50 group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300 font-mono select-none">
                      {item.step}
                    </span>
                  </div>

                  {/* Bottom Header: Badge + Título del Paso */}
                  <div className="relative z-10">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-md ${theme.badgeBg} text-[11px] font-bold uppercase tracking-wider mb-1.5 backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-md`}
                    >
                      {item.badge}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors duration-300">
                      Paso {item.step}: {item.title}
                    </h3>
                  </div>
                </div>

                {/* 4. Cuerpo: Explicación y Lista Interactiva de Beneficios */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Separador con Título de Beneficios */}
                    <div className="pt-4 border-t border-slate-100 mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-3">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        Garantías y beneficios en este paso:
                      </span>

                      {/* Lista de Beneficios con Micro-Hover por elemento */}
                      <ul className="space-y-2.5">
                        {item.benefits.map((benefit, bIndex) => (
                          <li
                            key={bIndex}
                            className="group/item flex items-start gap-2.5 p-1.5 -mx-1.5 rounded-xl hover:bg-slate-50 transition-all duration-200 cursor-default hover:translate-x-1"
                          >
                            <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-200 group-hover/item:scale-115 group-hover/item:bg-emerald-500 group-hover/item:text-white group-hover/item:border-emerald-500 transition-all duration-200 shadow-2xs">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                            </span>
                            <div className="text-xs">
                              <strong className="block text-slate-900 font-semibold mb-0.5 group-hover/item:text-sky-700 transition-colors">
                                {benefit.title}
                              </strong>
                              <span className="text-slate-500 leading-relaxed">
                                {benefit.desc}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Micro-footer con flecha que se desplaza en hover */}
                  <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                    <span
                      className={`inline-flex items-center gap-1.5 ${theme.taglineText} group-hover:translate-x-1.5 transition-transform duration-300`}
                    >
                      <span>{item.tagline}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </span>
                    <span className="text-slate-400 font-normal">Fase {index + 1} de 3</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================
            BANNER FINAL: GARANTÍA GLOBAL & CTA DIRECTO (ESTILO HERO)
            ======================================================== */}
        <div className="relative mx-auto w-full group">
          {/* Ambient aura glow matching Hero */}
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/30 via-cyan-500/25 to-emerald-500/20 rounded-[2.2rem] blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

          <div className="relative rounded-3xl bg-slate-900/95 border border-slate-700/80 p-8 sm:p-10 shadow-2xl backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
            {/* Subtle decorative grid matching Hero */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: "24px 24px",
              }}
            />
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Columna texto */}
            <div className="relative z-10 space-y-2.5 text-center md:text-left max-w-2xl">
              {/* Badge superior igual al Hero */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/90 text-cyan-300 text-xs font-semibold backdrop-blur-sm shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Compromiso de Honestidad Grupo EMAX</span>
                <span className="text-slate-500">•</span>
                <span className="text-emerald-400 font-bold">100% Imparcial</span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                ¿Y si tu tarifa actual ya es{" "}
                <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  la más barata del mercado?
                </span>
              </h4>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Te lo decimos con total transparencia y <strong className="text-white font-semibold">no te cambiamos de compañía</strong>. No cobramos comisiones abusivas ni forzamos cambios innecesarios.
              </p>
            </div>

            {/* Botón CTA con degradado idéntico al Hero */}
            <div className="relative z-10 flex-shrink-0 w-full md:w-auto text-center">
              <a
                href="#formulario"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 text-center w-full md:w-auto"
              >
                <Zap className="w-5 h-5 text-amber-300 fill-amber-300/30 animate-bounce" />
                <span>Comenzar el Paso 1 Gratis</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

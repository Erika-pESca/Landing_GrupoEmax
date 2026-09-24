import { Navegacion } from "@/components/Navegacion";
import { Hero } from "@/components/Hero";
import { Problema } from "@/components/Problema";
import { Solucion } from "@/components/Solucion";
import { SimuladorAhorro } from "@/components/SimuladorAhorro";
import { Beneficios } from "@/components/Beneficios";
import { Testimonios } from "@/components/Testimonios";
import { Formulario } from "@/components/Formulario";
import { Footer } from "@/components/Footer";
import { ContactoFlotante } from "@/components/ContactoFlotante";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* Navegación fija */}
      <Navegacion />

      {/* Secciones principales de la landing */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero principal con propuesta de valor */}
        <Hero />

        {/* 2. Puntos de dolor: El problema del cliente */}
        <Problema />

        {/* 3. La solución EMAX 360° */}
        <Solucion />

        {/* 4. Simulador interactivo de ahorro energético */}
        <SimuladorAhorro />

        {/* 5. Beneficios clave y Cómo Funciona combinados */}
        <Beneficios />

        {/* 7. Casos reales y testimonios */}
        <Testimonios />

        {/* 8. Formulario de contacto y captura con subida de factura */}
        <Formulario />
      </main>

      {/* Pie de página institucional */}
      <Footer />

      {/* Botón de contacto flotante (WhatsApp / Teléfono) */}
      <ContactoFlotante />
    </div>
  );
}

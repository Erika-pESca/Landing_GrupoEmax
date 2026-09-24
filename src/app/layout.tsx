import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Grupo EMAX | Ahorra hasta un 40% en tu Factura de Luz y Gas",
  description:
    "Asesoramiento energético independiente para particulares y empresas en España. Analizamos tu factura gratis, optimizamos tu potencia y negociamos las mejores tarifas del mercado sin permanencia.",
  keywords: [
    "asesoramiento energético",
    "ahorro luz y gas",
    "optimización factura eléctrica",
    "Grupo EMAX",
    "comparador tarifas España",
    "auditoría energética gratuita",
  ],
  authors: [{ name: "Grupo EMAX - Metamorfosis Energética S.L." }],
  openGraph: {
    title: "Grupo EMAX | Tu Centro de Soluciones Energéticas 360°",
    description:
      "Ahorra hasta un 40% en tu factura eléctrica y de gas sin coste ni compromiso. Auditoría independiente para hogares y empresas.",
    url: "https://grupo-emax.es",
    siteName: "Grupo EMAX",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen font-sans bg-slate-50 text-slate-900 antialiased selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}

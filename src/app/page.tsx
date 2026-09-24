import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { SavingsSimulator } from "@/components/SavingsSimulator";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { FaqChatbot } from "@/components/FaqChatbot";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Landing Sections */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero Section with Value Proposition and Invoice Audit Card */}
        <Hero />

        {/* 2. Customer Pain Points: The Problem */}
        <ProblemSection />

        {/* 3. The 360° EMAX Solution: Independent Energy Center */}
        <SolutionSection />

        {/* 4. Interactive Energy Savings Simulator */}
        <SavingsSimulator />

        {/* 5. Core Benefits (3 to 6 Key Benefits) */}
        <BenefitsSection />

        {/* 6. How It Works (3 Clear Steps) */}
        <HowItWorks />

        {/* 7. Real Case Studies & Testimonials */}
        <Testimonials />

        {/* 8. Interactive FAQ Chatbot Assistant ("Maxi") */}
        <FaqChatbot />

        {/* 9. High-Conversion Lead Capture Form with File Upload & Confetti */}
        <LeadForm />
      </main>

      {/* Institutional Legal Footer */}
      <Footer />

      {/* Floating Action Button for WhatsApp & Quick Phone */}
      <FloatingContact />
    </div>
  );
}

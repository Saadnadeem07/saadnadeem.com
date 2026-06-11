import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Skills } from "./components/sections/Skills";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { ScrollProgress } from "./components/layout/ScrollProgress";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-heading relative overflow-hidden">
      <ScrollProgress />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]">
        <div className="absolute top-20 left-20 h-32 w-32 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 h-48 w-48 bg-muted rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 h-24 w-24 bg-accent rounded-full blur-2xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

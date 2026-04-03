import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IdeasSection } from "@/components/IdeasSection";
import { SectionDeveloper } from "@/components/SectionDeveloper";
import { SectionEditor } from "@/components/SectionEditor";
import { SkillsSection } from "@/components/SkillsSection";
import { TimelineSection } from "@/components/TimelineSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionDeveloper />
      <SectionEditor />
      <IdeasSection />
      <AboutSection />
      <SkillsSection />
      <TimelineSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

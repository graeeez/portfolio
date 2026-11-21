import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShowroomSection from "@/components/showroom/ShowroomSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSkillsSection from "@/components/AboutSkillsSection";
import HonorsSection from "@/components/HonorsSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors duration-300">
      <Navbar />
      <main>
        <HeroSection />
        <div className="theme-adapt">
          <ShowroomSection />
          <ProjectsSection />
          <AboutSkillsSection />
          <HonorsSection />
          <ContactSection />
        </div>
      </main>
    </div>
  );
}

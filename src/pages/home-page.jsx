import NavBar from '../components/nav-bar'
import HeroSection from '../components/sections/hero-section'
import AboutSection from '../components/sections/about-section'
import AiMindsetSection from '../components/sections/ai-mindset-section'
import ExperienceSection from '../components/sections/experience-section'
import SkillsSection from '../components/sections/skills-section'
import ProjectsSection from '../components/sections/projects-section'
import CertificationsSection from '../components/sections/certifications-section'
import FooterSection from '../components/sections/footer-section'

/** Single-page portfolio landing — composes every section in design order. */
export default function HomePage() {
  return (
    <>
      <NavBar />
      <main id="top">
        <HeroSection />
        <AboutSection />
        <AiMindsetSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
      </main>
      <FooterSection />
    </>
  )
}

// src/app/page.tsx
import Hero from '@/components/sections/Hero';
import SkillsHighlight from '@/components/sections/SkillsHighlight';
import ProjectsShowcase from '@/components/sections/ProjectsShowcase';
import HomeBlogNewsletter from '@/components/sections/HomeBlogNewsletter';
import ContactHomeSection from '@/components/sections/ContactHome';

export default function Home() {
  return (
    <main>
      <Hero />
      <SkillsHighlight />
      <ProjectsShowcase />
      <HomeBlogNewsletter />
      <ContactHomeSection />
    </main>
  );
}
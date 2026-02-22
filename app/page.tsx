import FeaturedProjects from '@/components/FeaturedProjects';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Stats from '@/components/Stats';
import TechStack from '@/components/TechStack';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Skills />
      <TechStack />
      <FeaturedProjects />
    </>
  );
}

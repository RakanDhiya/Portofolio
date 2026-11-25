import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import SelectedWorks from "@/components/sections/SelectedWorks";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <SelectedWorks />
      <Skills />
      <Contact />
    </main>
  );
}
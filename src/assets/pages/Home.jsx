import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/*Theme toggle*/}
      <ThemeToggle />
      {/*background effect*/}
      <StarBackground />
      {/*Navbar */}
      <NavBar />
      {/*Main Content*/}
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Contacts />
      </main>

      {/*Footer */}
      <Footer />
    </div>
  );
};

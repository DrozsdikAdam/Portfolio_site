import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { Skills } from "@/components/Skills";

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
      </main>

      {/*Footer */}
    </div>
  );
};

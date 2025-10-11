import { About } from "@/components/sections/about";
import { Expertise } from "@/components/sections/expertise";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

import { Expertise } from "@/components/sections/expertise";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { AboutMe } from "@/components/sections/about";
import { SEO } from "@/components/seo";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <SEO
        title="Experienced Frontend Developer & React Expert"
        description="Mulugeta Adamu is an Experienced Frontend Developer specializing in React, Next.js, and modern web technologies. Building scalable applications for Ethiopian businesses and global clients with expertise in responsive design and SEO optimization."
        keywords="Frontend Developer, React Developer, Next.js Expert, TypeScript Developer, Web Developer Ethiopia, JavaScript Developer, UI/UX Developer, Fullstack Developer, Ethiopian Developer, Addis Ababa Developer, Mobile App Developer, Web Application Developer, SEO Expert, Responsive Design"
      />
      <div className="relative min-h-screen">
        <Header />
        <main className="relative">
          <Hero />
          <AboutMe />
          <Expertise />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

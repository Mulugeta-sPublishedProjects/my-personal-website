import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { AboutMe } from "@/components/sections/about";
import { SEO } from "@/components/seo";
import Hero from "@/components/hero";
import { Expertise, Projects, Contact } from "@/components/client-wrapper";

// Memoize SEO props to reduce bundle size
const homeSEOProps = {
  title: "Experienced Frontend Developer & React Expert",
  description:
    "Mulugeta Adamu is an Experienced Frontend Developer specializing in React, Next.js, and modern web technologies. Building scalable applications for Ethiopian businesses and global clients with expertise in responsive design and SEO optimization.",
  keywords:
    "Frontend Developer, React Developer, Next.js Expert, TypeScript Developer, Web Developer Ethiopia, JavaScript Developer, UI/UX Developer, Fullstack Developer, Ethiopian Developer, Addis Ababa Developer, Mobile App Developer, Web Application Developer, SEO Expert, Responsive Design",
};

export default function Home() {
  return (
    <>
      <SEO {...homeSEOProps} />
      <div className="relative min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
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

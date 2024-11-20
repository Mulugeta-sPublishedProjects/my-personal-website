export const AboutText = () => {
  return (
    <div className="text-gray-900 dark:text-gray-300 text-base md:text-lg font-medium leading-relaxed mt-4 min-h-[3em]">
      <AboutIntro />
      <Skills />
      <Specializations />
    </div>
  );
};

const AboutIntro = () => (
  <p className="mb-4">
    As a Senior Frontend Developer, I thrive on tackling complex projects with
    innovative teams.
  </p>
);

const Skills = () => (
  <p className="mb-4">
    My skill set includes <strong className="font-semibold">ReactJS</strong>,{" "}
    <strong className="font-semibold">Next.js</strong>,{" "}
    <strong className="font-semibold">React Native</strong>,{" "}
    <strong className="font-semibold">JavaScript</strong>,{" "}
    <strong className="font-semibold">TypeScript</strong>, and{" "}
    <strong className="font-semibold">TailwindCSS</strong>.
  </p>
);

const Specializations = () => (
  <p>
    I specialize in{" "}
    <strong className="font-semibold">frontend architecture</strong> and{" "}
    <strong className="font-semibold">monorepo management</strong> with{" "}
    <strong className="font-semibold">TurboRepo</strong> and{" "}
    <strong className="font-semibold">Nx</strong>. My strengths lie in
    delivering <strong className="font-semibold">high-quality, scalable</strong>{" "}
    solutions for{" "}
    <strong className="font-semibold">seamless user experiences</strong>.
  </p>
);

export default AboutText;

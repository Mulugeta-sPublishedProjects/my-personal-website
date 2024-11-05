import AboutMe from "./components/about-me";
import Greeting from "./components/home";

export default function Home() {
  return (
    <div className="mt-12">
      <Greeting />
      <AboutMe />
    </div>
  );
}

import { About } from "./sections/About";
import { Blogs } from "./sections/Blogs";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Experience />
      <Blogs />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

import Separator from "./components/ui/Separator";
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
    <div className="w-3/4 mx-auto py-20 flex flex-col gap-10">
      <Header />
      <div className="flex flex-col gap-7 py-10">
        <About />
        <Separator />
        <Experience />
        <Separator />
        <Blogs />
        <Separator />
        <Projects />
        <Separator />
        <Skills />
        <Separator />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

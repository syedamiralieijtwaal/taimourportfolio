import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6">
        <Hero />
        <Experience />
        <Skills />
        <Education />
      </main>
      <div className="mx-auto max-w-3xl px-6">
        <Footer />
      </div>
    </>
  );
}

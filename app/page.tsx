import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { HowItWorks } from "../components/HowItWorks";
import { Benefits } from "../components/Benefits";
import { Gallery } from "../components/Gallery";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";
import { Contact } from "../components/Contact";
import { business } from "../content";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Benefits />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <footer className="bg-muted border-t border-ink/10 px-6 py-10 text-center text-sm text-ink/60">
        <img
          src="/woofylogonew.png"
          alt={business.name}
          className="h-56 w-auto mx-auto mb-4"
        />
        © {new Date().getFullYear()} {business.name} · Made with Claude Code in Berlin
      </footer>
    </>
  );
}

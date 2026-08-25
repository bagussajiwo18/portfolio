import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import ScrollReveal from '@/components/ScrollReveal';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

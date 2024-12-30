import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Download from "./components/Download";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      {/* <Features />
      <Pricing />
      <Faq />
      <Download />
      <Footer /> */}
    </main>
  );
}

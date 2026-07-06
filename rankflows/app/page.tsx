import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PopularExams from "../components/PopularExams";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularExams />
      <Features />
      <Footer />
    </>
  );
}

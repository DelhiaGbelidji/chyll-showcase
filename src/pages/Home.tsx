import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ChyllSection from "../components/ChyllSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SkillsSection />
        <ChyllSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

import Navbar from "@/shared/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import CardsSection from "@/components/vertical-cards/CardsSection";
import CarouselSection from "@/components/carousel/CarouselSection";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CardsSection />
      <CarouselSection />
    </>
  );
};

export default App;

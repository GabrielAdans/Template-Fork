import bgImg from "../assets/importAssets/bg2.jpg";
import BlankParallaxe from "../components/sectionElements/BlankParallaxe";
import AboutUs from "../components/sections/AboutUs";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import BannersCarousel from "../components/sections/BannersCarousel";
import OurProducts from "../components/sections/OurProducts";
import FrequentlyAskedQuestions from "../components/sections/FrenquentlyAskedQuestions";
import Courses from "../components/sections/Courses";
import AvoidAccidents from "../components/sections/AvoidAcidents";
import Numbers from "../components/sections/Numbers";
import NavbarSection from "../components/sections/NavbarSection";
import HeroSection from "../components/sections/HeroSection";

export default function ImportPage() {
  return (
    <div className="content">
      <NavbarSection />
      <HeroSection />
      <AboutUs />
      <Numbers />
      <OurProducts />
      <AvoidAccidents />

      <Courses />
      <BlankParallaxe bgImg={bgImg} />
      <BannersCarousel />
      <BackToTopButton />
      <FrequentlyAskedQuestions />
      <FloatingWhatsappButton />
    </div>
  );
}

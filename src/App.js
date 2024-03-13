import NavbarUp from "./componenets/NavbarUp";
import "./App.css";
import NavbarDown from "./componenets/NavbarDown";

import Footer from "./componenets/Footer";

import ContactDetail from "./componenets/ContactDetail";

import Testimonial from "./componenets/Testimonial";
import HeroSection from "./componenets/HeroSection";
import Achievement from "./componenets/Achievement";
import Video from "./componenets/Video";
import CoachDetail from "./componenets/CoachDetail";
import MedalWinner from "./componenets/MedalWinner";
import FeatureStar from "./componenets/FeatureStar";

function App() {
  return (
    <>
      <NavbarUp />
      <NavbarDown />
      <HeroSection />
      <Achievement />
      <Video />
      <CoachDetail />
      <MedalWinner />
      <FeatureStar/>

      <Testimonial />
      <ContactDetail />
      <Footer />
    </>
  );
}

export default App;

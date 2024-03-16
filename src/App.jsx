import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Concept from "./Components/Concept";
import Footer from "./Components/Footer";
import pirateship from "./assets/pirateship.jpg";
import { ParallaxBanner } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import stocks from "./assets/stocks.jpg";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Concept />
      <Footer />
    </>
  );
}

export default App;

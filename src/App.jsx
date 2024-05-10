import Hero from "./Components/Hero";
import Herovideo from "./Components/Herovideo";

import Navbar from "./Components/Navbar";
import Concept from "./Components/Concept";
import Footer from "./Components/Footer";
import { ParallaxBanner } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import stocks from "./assets/stocks.jpg";

function App() {
  return (
    <>
      <Navbar />
      <Herovideo />
      <Concept />
      <Footer />
    </>
  );
}

export default App;

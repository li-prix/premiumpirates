import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Concept from "./Components/Concept";
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
      <div className="mt-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a lacus
        libero. Suspendisse euismod nisl rutrum nulla sodales, id dictum est
        blandit. Mauris a magna vel ipsum cursus egestas. Suspendisse faucibus
        consequat cursus. Proin scelerisque turpis metus, sed ultrices dolor
        porta ac. Phasellus luctus gravida tortor at ornare.
      </div>
    </>
  );
}

export default App;

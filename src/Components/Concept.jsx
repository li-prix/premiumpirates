import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import stocks from "../assets/stocks.jpg";

function Concept() {
  return (
    <>
      <div>
        <div className="flex justify-center">
          <h1 className="text-2xl font-medium text-center">OUR SERVICES</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-8">
        <div>
          <div className="flex flex-col items-center shadow-md w-3/4 mx-auto">
            <div className="bg-black p-8 w-1/6 mb-4" />
            <p className="w-3/4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
              lacus libero. Suspendisse euismod nisl rutrum nulla sodales, id
              dictum est blandit. Mauris a magna vel ipsum cursus egestas.
              Suspendisse faucibus consequat cursus. Proin scelerisque turpis
              metus, sed ultrices dolor porta ac. Phasellus luctus gravida
              tortor at ornare.
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center shadow-md w-3/4 mx-auto">
            <div className="bg-black p-8 w-1/6 mb-4" />
            <p className="w-3/4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
              lacus libero. Suspendisse euismod nisl rutrum nulla sodales, id
              dictum est blandit. Mauris a magna vel ipsum cursus egestas.
              Suspendisse faucibus consequat cursus. Proin scelerisque turpis
              metus, sed ultrices dolor porta ac. Phasellus luctus gravida
              tortor at ornare.
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center shadow-md w-3/4 mx-auto">
            <div className="bg-black p-8 w-1/6 mb-4" />
            <p className="w-3/4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
              lacus libero. Suspendisse euismod nisl rutrum nulla sodales, id
              dictum est blandit. Mauris a magna vel ipsum cursus egestas.
              Suspendisse faucibus consequat cursus. Proin scelerisque turpis
              metus, sed ultrices dolor porta ac. Phasellus luctus gravida
              tortor at ornare.
            </p>
          </div>
        </div>
      </div>
      <div>
        <ParallaxBanner
          layers={[{ image: "src/assets/stocks.jpg", speed: -20 }]}
          className="aspect-[2/1] h-[80vh]"
        >
          <div className=""></div>
        </ParallaxBanner>
      </div>
    </>
  );
}

export default Concept;

import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { GiPirateFlag } from "react-icons/gi";
import stocks from "../assets/stocks.jpg";

function Concept() {
  return (
    <>
      <div>
        <div className="flex justify-center">
          <GiPirateFlag size={30} className="mt-6 me-3" />
          <h1 className="text-2xl md:text-3xl font-medium text-center mt-5">
            PREMIUM PIRATES
          </h1>
          <GiPirateFlag size={30} className="mt-6 ms-3" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[4rem] md:gap-4 p-8 mb-8">
        <div>
          <div
            className="flex flex-col items-center shadow-lg w-5/6 md:w-4/5
           mx-auto"
          >
            <div className="bg-black p-8 w-1/6 mb-4" />
            <p className="text-center p-2">
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
          <div className="flex flex-col items-center shadow-md w-5/6 md:w-4/5 mx-auto">
            <div className="bg-black p-8 w-1/6 mb-4" />
            <p className="text-center p-2">
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
          <div className="flex flex-col items-center shadow-md w-5/6 md:w-3/4 mx-auto">
            <div className="bg-black p-8 w-1/6 mb-4" />
            <p className="text-center p-2">
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
          className="aspect-[2/1] h-[80vh] bg-gray"
        >
          <div className="absolute z-9 inset-0 flex items-center justify-center">
            <div className="text-justify w-4/5 md:w-1/2">
              <h1 className="text-3xl font-medium text-center text-white mb-5">
                Inovating Options Trading
              </h1>
              <p className="text-center text-sm md:text-lg text-white font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
                lacus libero. Suspendisse euismod nisl rutrum nulla sodales, id
                dictum est blandit. Mauris a magna vel ipsum cursus egestas.
                Suspendisse faucibus consequat cursus.
              </p>
            </div>
          </div>
        </ParallaxBanner>
        <div className="p-12 text-center my-10">NOT SURE WHAT TO DO HERE</div>
      </div>
    </>
  );
}

export default Concept;

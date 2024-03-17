import { ParallaxBanner } from "react-scroll-parallax";

function Hero() {
  return (
    <>
      <ParallaxBanner
        layers={[{ image: "src/assets/treasuremap1.jpg", speed: -18 }]}
        className="aspect-[2/1] h-[95vh]"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-justify w-4/5 md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-medium text-center text-white mb-8">
              Inovating Options Trading
            </h1>
            <p className="text-white text-center text-sm md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
              lacus libero. Suspendisse euismod nisl rutrum nulla sodales, id
              dictum est blandit. Mauris a magna vel ipsum cursus egestas.
              Suspendisse faucibus consequat cursus.
            </p>
            <div className="flex justify-center mt-8">
              <button className="bg-white text-black text-sm  py-4 px-5 font-medium hover:bg-slate-700 hover:text-white ease-in-out duration-400">
                CREATE AN ACCOUNT NOW
              </button>
            </div>
          </div>
        </div>
      </ParallaxBanner>
      {/* <div className="bg-black p-1 border-spacing-2 w-full"></div> */}
    </>
  );
}

export default Hero;

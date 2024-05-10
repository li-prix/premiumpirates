import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

function Hero() {
  return (
    <div className="bg-black">
      <ParallaxBanner className="h-[550px]">
        <ParallaxBannerLayer
          image="src/assets/ship.jpg"
          speed={-20}
          style={{ backgroundPosition: "center",
                  backgroundSize: "",
                  backgroundRepeat: "no-repeat"
           }}
          className="opacity-[.70] md:bg-left"
        />
        <ParallaxBannerLayer>
          <div className="absolute inset-0 flex flex-row items-center justify-start px-6 md:ms-20">
            <div className="text-justify text-white md:w-1/2">
              <h1 className="text-2xl uppercase md:text-3xl font-medium text-left mb-10">
                Innovating Options Trading
              </h1>
              <p className="md:text-lg leading-snug mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
                lacus libero. Suspendisse euismod nisl rutrum nulla sodales, id
                dictum est blandit. Mauris a magna vel ipsum cursus egestas.
                Suspendisse faucibus consequat cursus. INSERT CATCHY MESSAGE
                HERE.
              </p>
              <div className="flex">
                <button className="bg-white text-black text-md py-4 px-5 hover:bg-stone-600 hover:text-white ease-in-out duration-500 uppercase">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </div>
  );
}

export default Hero;

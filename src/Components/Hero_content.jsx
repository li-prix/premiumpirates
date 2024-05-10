import React, { useState, useEffect } from "react";

const DelayedDiv = () => {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDiv(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div
        className={`${
          showDiv ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000 ease-in-out`}
      >
        {showDiv && (
          <div className="absolute inset-0 flex flex-row items-center justify-center px-6 md:ms-12">
            <div className="text-justify text-white md:w-1/2">
              <h1 className="text-2xl text-center uppercase md:text-3xl font-medium mb-10">
                Innovating Options Trading
              </h1>
              <p className="md:text-lg text-center leading-snug mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
                lacus libero. Suspendisse euismod nisl rutrum nulla sodales, id
                dictum est blandit. Mauris a magna vel ipsum cursus egestas.
                Suspendisse faucibus consequat cursus. INSERT CATCHY MESSAGE
                HERE.
              </p>
              <div className="flex justify-center">
                <button className="bg-white text-black text-md py-4 px-5 hover:bg-stone-900 hover:text-white ease-in-out duration-500 uppercase">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DelayedDiv;

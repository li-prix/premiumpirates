function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 py-8 md:px-16 w-full bg-black md:justify-items-center">
        <div className="flex flex-col text-white text-xl">
          About
          <div className="mt-3 text-sm mb-4 md:mb-0">
            <p className="w-4/5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
              lacus libero. Suspendisse euismod nisl rutrum nulla sodales, id
              dictum est blandit. Mauris a magna vel ipsum cursus egestas.
              Suspendisse faucibus consequat cursus
            </p>
          </div>
        </div>
        <div className="flex flex-col text-white text-xl">
          News
          <div className="flex flex-col mt-3 text-sm mb-4 md:mb-0">
            <a href="" className="mb-1">
              XXXX
            </a>
            <a href="" className="mb-1">
              XXXX
            </a>
            <a href="" className="mb-1">
              XXXX
            </a>
          </div>
        </div>
        <div className="flex flex-col text-white text-xl">
          Terms
          <div className="flex flex-col mt-3 text-sm mb-4 md:mb-0">
            <a href="" className="mb-1">
              Privacy Policy
            </a>
            <a href="" className="mb-1">
              Terms and Conditions
            </a>
            <a href="" className="mb-1">
              Cancelation & Refund
            </a>
            <a href="" className="mb-1">
              Disclaimer
            </a>
          </div>
        </div>
        <div className="flex flex-col text-white text-xl">
          Contact Us
          <div className="mt-3 text-sm mb-4 md:mb-0">
            <div className="mb-1">Phone Number</div>
            <div className="mb-1">Email</div>
            <div className="mb-1">Adress</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

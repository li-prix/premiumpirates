function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-12 w-full bg-black justify-items-center">
        <div className="flex flex-col text-white text-xl">
          About
          <div className="mt-3 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
            lacus libero. Suspendisse euismod nisl rutrum nulla sodales, id
            dictum est blandit. Mauris a magna vel ipsum cursus egestas.
            Suspendisse faucibus consequat cursus
          </div>
        </div>
        <div className="flex flex-col text-white text-xl">
          News
          <div className="flex flex-col mt-3 text-sm">
            <a href="" className="text-white">
              XXXX
            </a>
            <a href="" className="text-white">
              XXXX
            </a>
            <a href="" className="text-white">
              XXXX
            </a>
          </div>
        </div>
        <div className="flex flex-col text-white text-xl">
          Contact Us
          <div className="mt-3 text-sm">Phone Number</div>
          <div className="text-sm">Email</div>
          <div className="text-sm">Adress</div>
        </div>
      </div>
    </>
  );
}

export default Footer;

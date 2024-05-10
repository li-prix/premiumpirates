import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [color, setColor] = useState(false);
  const changecolor = () => {
    if (window.scrollY >= 450) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changecolor);

  const navItems = [
    { id: 1, text: "Log in" },
    { id: 2, text: "Company" },
    { id: 3, text: "How it works" },
    { id: 4, text: "Contact" },
  ];

  return (
    <div className="z-10 w-full absolute">
      <div
        className={
          color
            ? "bg-black flex fixed top-0 justify-between items-center w-full mx-auto py-3 md:py-1 px-4 text-white ease-in-out duration-200"
            : "bg-transparent flex fixed top-3 justify-between items-center w-full mx-auto px-4 text-white"
        }
      >
        <div className="md:ms-2">
          {/* <h1 className="text-2xl md:text-2xl font-bold text-white">PIRATES</h1> */}
          <img src="./src/assets/logo4.png" className="md:w-[280px] w-[220px]" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex ">
          {navItems.map((item) => (
            <li key={item.id} className="p-4 cursor-pointer hover:underline">
              {item.text}
            </li>
          ))}
        </ul>
        {/* Mobile Navigation */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <FaWindowClose size={26} /> : <GiHamburgerMenu size={26} />}
        </div>
        {/* Mobile Navigation Menu*/}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-black ms-4 my-3 mb-16">
            PIRATE
          </h1>
          {/* Mobile Navigation Items*/}
          {navItems.map((item) => (
            <li
              key={item.id}
              className="ms-4 my-12 mt-4 justify-between text-lg"
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

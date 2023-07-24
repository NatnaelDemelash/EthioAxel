import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <navbar className="flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4">
      <h1 className="w-full font-bold text-3xl text-[#3498DB]">
        ⚡EthioAxel⚡
      </h1>
      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        <li className="p-4">
          <a href="#">Home</a>
        </li>
        <li className="p-4">
          <a href="#"> Company</a>
        </li>
        <li className="p-4">
          <a href="#"> Resource</a>
        </li>
        <li className="p-4">
          <a href="#"> About</a>
        </li>
        <li className="p-4">
          <a href="#"> Contact</a>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden z-10">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      {/* Mobile Menu */}
      <div
        className={`${
          nav
            ? "fixed right-0 top-0 w-[50%]  h-[70%] rounded-b-xl  bg-blue-100  ease duration-700"
            : "fixed left-[-300px] "
        }`}
      >
        <ul className="uppercase text-[20px] m-4 pt-24 ">
          <li className="p-4">
            <a href="#">Home</a>
          </li>
          <li className="p-4">
            <a href="#"> Company</a>
          </li>
          <li className="p-4">
            <a href="#"> Resource</a>
          </li>
          <li className="p-4">
            <a href="#"> About</a>
          </li>
          <li className="p-4">
            <a href="#"> Contact</a>
          </li>
        </ul>
      </div>
    </navbar>
  );
};

export default Navbar;

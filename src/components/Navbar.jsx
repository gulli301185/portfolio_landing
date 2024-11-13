import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTimes,
} from "react-icons/fa";
import Logo from "./../assets/EDUCATION LOGO 2023 - Made with PosterMyWall.png";
import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] bg-black text-gray-200 flex justify-between items-center px-4">
      <div>
        <img src={Logo} alt="logo" style={{ width: "50px" }} />
      </div>
      <ul className="md:flex hidden">
        <li className="px-4 cursor-pointer uppercase text-sm font-semibold">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="px-4 cursor-pointer uppercase text-sm font-semibold">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="px-4 cursor-pointer uppercase text-sm font-semibold">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="px-4 cursor-pointer uppercase text-sm font-semibold">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="px-4 cursor-pointer uppercase text-sm font-semibold">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : " w-full h-screen bg-gray-950 text-gray-200 flex flex-col justify-center  items-center absolute top-0 left-0"
        }
      >
        <li className="py-6 text-xl font-semibold uppercase text-gray-400">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-xl font-semibold uppercase text-gray-400">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-xl font-semibold uppercase text-gray-400">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-xl font-semibold uppercase text-gray-400">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-xl font-semibold uppercase text-gray-400">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="hidden lg:flex flex-col fixed top-[35%] left-0 ">
        <ul>
          <li className="w-[160px]  h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-full rounded-l-none mt-2">
            <a
              href="/"
              className="flex justify-around items-center w-full text-gray-400"
            >
              Facebook
              <FaFacebook size={30} />
            </a>
          </li>

          <li className="w-[160px]  h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600 rounded-full rounded-l-none mt-2">
            <a
              href="/"
              className="flex justify-around items-center w-full text-gray-400"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px]  h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black rounded-full rounded-l-none mt-2">
            <a
              href="/"
              className="flex justify-around items-center w-full text-gray-400"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px]  h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-700 rounded-full rounded-l-none mt-2">
            <a
              href="/"
              className="flex justify-around items-center w-full text-gray-400"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

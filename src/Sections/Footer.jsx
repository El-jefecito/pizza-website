import { useDarkMode } from "../DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  FaArrowUp,
  FaFacebook,
  FaInstagram,
  FaMoon,
  FaSun,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-scroll";

function Footer() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <section
        className={`${
          darkMode ? "dark bg-gray-900" : "light bg-black"
        } w-full h-fit lg:px-20 px-10 py-10 flex flex-col justify-center items-center gap-6`}
      >
        <h1 className="text-white font-bold text-5xl ">
          Pizzazz <span className="text-orange-500 italic">Pies</span>
        </h1>
        <p className="text-xl text-slate-100 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          officiis possimus cumque reiciendis? Voluptatum vel.
        </p>
        <div
          id="social-icons"
          className="flex justify-center items-center gap-4"
        >
          <div
            id="icon-box"
            className="p-3 rounded-full bg-orange-500 hover:bg-white text-white hover:text-black cursor-pointer transform hover:scale-105 transsition-transform duration-300 "
          >
            <FaFacebook className="w-[25px] h-[25px]" />
          </div>
          <div
            id="icon-box"
            className="p-3 rounded-full bg-orange-500 hover:bg-white text-white hover:text-black cursor-pointer transform hover:scale-105 transsition-transform duration-300"
          >
            <FaInstagram className="w-[25px] h-[25px]" />
          </div>
          <div
            id="icon-box"
            className="p-3 rounded-full bg-orange-500 hover:bg-white text-white hover:text-black cursor-pointer transform hover:scale-105 transsition-transform duration-300"
          >
            <FaTwitter className="w-[25px] h-[25px]" />
          </div>
          <div
            id="icon-box"
            className="p-3 rounded-full bg-orange-500 hover:bg-white text-white hover:text-black cursor-pointer transform hover:scale-105 transsition-transform duration-300"
          >
            <FaYoutube className="w-[25px] h-[25px]" />
          </div>
        </div>
      </section>

      {/* dark mode toggle button */}
      {/* <div>
        <button
          onClick={toggleDarkMode}
          className="flex items-center p-4 rounded-full bg-orange-500 fixed lg:bottom-6 left-6 bottom-6"
        >
          {darkMode ? (
            <FaMoon size={30} className="text-black" />
          ) : (
            <FaSun size={30} className="text-black" />
          )}
        </button>
      </div> */}

      {/* scroll to top */}
      <div
        id="icon-box"
        className="bg-orange-500 text-black p-2 rounded-full hover:bg-white cursor-pointer fixed lg:bottom-6 right-12 bottom-6"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="w-[35px] h-[35px]" />
        </Link>
      </div>
    </>
  );
}

export default Footer;

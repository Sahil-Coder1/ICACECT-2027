import { useState } from "react";
import { Link } from "react-router-dom";
import displayImage from "../assets/integral_solar2.jpeg";
import NavBar2 from "./NavBar2";
import logo from "../assets/logo.jpeg";
import ieee from "../assets/ieee.png";

function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full min-h-[70vh] lg:h-screen overflow-hidden">
      {/* Background */}
      <img
        src={displayImage}
        alt="Integral University"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

      {/* HEADER */}
      <div className="fixed top-0 left-0 w-full z-30 bg-white shadow-md">
        {/* Top Row */}
        <div className="flex items-center justify-between px-4 lg:px-10 py-2">
          {/* Logos */}
          <div className="flex items-center gap-2 sm:gap-4 h-16 lg:max-w-[400px]">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 object-contain"
              />
            </Link>

            <img
              src={ieee}
              alt="IEEE"
              className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 object-contain scale-90"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <NavBar2 isOpen={open} setIsOpen={setOpen} />
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl font-bold text-gray-800"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <NavBar2 isOpen={open} setIsOpen={setOpen} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex min-h-[70vh] lg:h-full flex-col items-center justify-center text-center px-4 pt-20">
        <h2 className="text-white text-sm sm:text-base md:text-xl lg:text-2xl font-medium">
          Welcome To Integral University
        </h2>

        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-bold my-2">
          <span className="text-red-500 font-extrabold drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">
            ICACECT
          </span>
          -2027
        </h1>

        <p className="text-white text-xs sm:text-sm md:text-base max-w-2xl lg:max-w-3xl">
          International Conference on Advancement in Computer Engineering and
          Communication Technology
        </p>

        <i className="text-slate-200 mb-4 text-xs sm:text-sm md:text-base">
          IEEE Technically Sponsored
        </i>

        <button className="mt-2 px-5 py-2 md:px-8 md:py-3 bg-blue-600 text-white rounded-full">
          18–19 January, 2027
        </button>
      </div>
    </div>
  );
}

export default Hero;

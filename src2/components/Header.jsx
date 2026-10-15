import icacect from "../assets/icacect_logo.png";
import logo from "../assets/logo.jpeg";
import ieee from "../assets/ieee.png";
import { Link } from "react-router-dom";
import NavBar2 from "./NavBar2";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-30 bg-white shadow-md">
        {/* Top Row */}
        <div className="flex items-center justify-between px-3 sm:px-6 lg:px-8 py-1">
          {/* Logos */}
          <div className="flex items-center gap-2 sm:gap-3 h-12 sm:h-14 lg:h-16">
            <Link to="/" className="w-20 sm:w-28 lg:w-32 xl:w-36">
              <img
                src={logo}
                alt="Logo"
                className="h-8 sm:h-10 md:h-11 lg:h-12 xl:h-13 w-full object-contain"
              />
            </Link>
            <div className="w-8 sm:w-10 lg:w-20">
              <img
                src={icacect}
                alt="ICACECT"
                className="h-8 p-0.5 sm:h-10 md:h-11 lg:h-12 xl:h-13 w-full object-contain"
              />
            </div>
            <div className="w-20 sm:w-28 lg:w-32 xl:w-36">
              <img
                src={ieee}
                alt="IEEE"
                className="h-8 sm:h-10 md:h-11 lg:h-12 xl:h-13 w-full object-contain"
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <NavBar2 isOpen={open} setIsOpen={setOpen} />
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-xl font-bold text-gray-800 p-1"
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
      {/* <div className="flex items-center justify-center gap-4 sm:gap-8 px-4 mb-2 w-full mx-auto">
        <Link to="/" className="w-1/2 max-w-[180px] sm:max-w-[240px] lg:max-w-[300px]">
          <img
            src={logo}
            alt="Integral University Logo"
            className="h-16 sm:h-20 lg:h-24 w-full object-contain"
          />
        </Link>
        <div className="w-1/2 max-w-[180px] sm:max-w-[240px] lg:max-w-[300px]">
          <img
            src={ieee}
            alt="IEEE Logo"
            className="h-16 sm:h-20 lg:h-24 w-full object-contain"
          />
        </div>
      </div> */}

      {/* <div className="px-4 sm:px-8  mx-auto">
        <h5 className="mb-4 font-bold tracking-tight text-heading text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-snug">
          IEEE Technically Sponsored International conference on Advancement in
          computer engineering and communication technology ICACECT-2027
        </h5>
      </div> */}

      {/* <div className="marquee-container px-2 sm:px-4  mx-auto">
        <p className="marquee-text text-sm sm:text-base">
          Conference Date May 18 & 19 January 2027 (Last day for Paper
          Submission September 15, 2026)
        </p>
      </div> */}
    </>
  );
}

export default Header;

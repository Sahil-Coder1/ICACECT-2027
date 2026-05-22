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
        <div className="flex items-center justify-between px-4 lg:px-10 py-0">
          {/* Logos */}
          <div className="flex items-center gap-4 h-16 sm:h-20 lg:h-20">
            <Link to="/" className="w-24 sm:w-32 lg:w-40">
              <img
                src={logo}
                alt="Logo"
                className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 w-full object-contain"
              />
            </Link>

            <div className="w-24 sm:w-32 lg:w-40">
              <img
                src={ieee}
                alt="IEEE"
                className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 w-full object-contain"
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

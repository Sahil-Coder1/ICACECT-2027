import logo from "../assets/logo.jpeg";
import ieee from "../assets/ieee.png";
import NavBar from "./NavBar";

function Header() {
  return (
    <>
      <div className="flex items-center justify-center gap-4 px-4 mb-4 max-w-6xl mx-auto">
        <img
          src={logo}
          alt="Integral University Logo"
          className="h-16 sm:h-20 lg:h-24 object-contain"
        />
        <img
          src={ieee}
          alt="IEEE Logo"
          className="h-16 sm:h-20 lg:h-24 object-contain"
        />
      </div>

      <div className="px-4 sm:px-8 max-w-6xl mx-auto">
        <h5 className="mb-4 font-bold tracking-tight text-heading text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-snug">
          IEEE Sponsored International conference on Advancement in computer
          engineering and communication technology ICACECT-2027
        </h5>
      </div>

      <div className="marquee-container px-2 sm:px-4 max-w-6xl mx-auto">
        <p className="marquee-text text-sm sm:text-base">
          Conference Date May 6th and 7th 2026 (Paper Submission date extended
          to February 04, 2026)
        </p>
      </div>

      <NavBar />
    </>
  );
}

export default Header;

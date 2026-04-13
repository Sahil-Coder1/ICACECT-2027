import { useState } from "react";
import { ChevronDown, Home, Menu, X } from "lucide-react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center pt-4 relative">
      <nav className="bg-slate-900 px-4 sm:px-6 py-3 rounded-2xl w-full mx-4 md:text-xs lg:text-sm">
        <div className="flex justify-between items-center lg:hidden">
          <span className="text-white font-semibold">Menu</span>

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white" />
            )}
          </button>
        </div>

        <ul className="hidden lg:flex gap-4 text-white font-medium items-center justify-center">
          <li className="hover:text-blue-400 cursor-pointer">
            <a href="/" className="flex items-center gap-2">
              <Home size={16} /> Home
            </a>
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            <a href="/about-us">About Us</a>
          </li>

          <li className="relative group cursor-pointer py-2">
            <span className="flex items-center gap-1 hover:text-blue-400">
              <a href="/call-for-paper">Call For Paper</a>

              {/* <ChevronDown
                size={16}
                className="transition-transform duration-300 group-hover:rotate-180"
              /> */}
            </span>

            {/* <ul className="absolute left-0 z-50 text-sm top-full mt-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 bg-white text-black rounded-lg shadow-lg min-w-[200px]">
              <li className="px-4 py-2 hover:bg-gray-100 rounded-lg">
                <a href="/instruction">Instruction for Authors</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 rounded-lg">
                <a href="/submit">Paper Submission</a>
              </li>
            </ul> */}
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            <a href="/tracks">Conference Tracks</a>
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            <a href="/technical-sessions">Technical Sessions</a>
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            <a href="/events">Events</a>
          </li>

          <li className="relative group cursor-pointer py-2">
            <span className="flex items-center gap-1 hover:text-blue-400">
              Committee
              <ChevronDown
                size={16}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </span>

            <ul className="absolute left-0 z-50 top-full text-sm mt-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 bg-white text-black rounded-lg shadow-lg min-w-[220px]">
              <li className="px-4 py-2 hover:bg-gray-100 rounded-lg">
                <a href="/committee-members">Committee Members</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 rounded-lg">
                <a href="/advisory-committee">Advisory Board Members</a>
              </li>

              <li className="px-4 py-2 hover:bg-gray-100 rounded-lg">
                <a href="/reviewers">Editorial Board</a>
              </li>
            </ul>
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            <a href="/speakers">Speakers</a>

            {/* <a href="/important-dates">Important Dates</a> */}
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            <a href="/registration">Registration</a>
          </li>
          <li className="hover:text-blue-400 cursor-pointer">
            <a href="/how-to-reach">How to Reach</a>
          </li>
        </ul>

        <div
          className={`lg:hidden absolute top-full left-0 w-full z-50 transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
          }`}
        >
          <ul className="mx-4 mt-3 p-4 rounded-xl bg-slate-900 text-white flex flex-col gap-4 shadow-2xl border border-slate-700">
            <li className="flex items-center gap-2 hover:text-blue-400 transition">
              <a href="/" className="flex items-center gap-2">
                <Home size={16} /> Home
              </a>
            </li>

            <li className="hover:text-blue-400 transition">
              <a href="/about-us">About Us</a>
            </li>

            <li>
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer hover:text-blue-400 transition">
                  <a href="/call-for-paper">Call For Paper</a>
                  {/* <ChevronDown
                    className="transition-transform duration-300 group-open:rotate-180"
                    size={16}
                  /> */}
                </summary>

                {/* <ul className="ml-4 mt-2 text-sm space-y-1 overflow-hidden transition-all duration-300 group-open:animate-slideDown">
                  <li className="py-1 hover:text-blue-300">
                    <a href="/instruction">Instruction for Authors</a>
                  </li>
                  <li className="py-1 hover:text-blue-300">
                    <a href="/submit">Paper Submission</a>
                  </li>
                </ul> */}
              </details>
            </li>

            <li className="hover:text-blue-400 transition">
              <a href="/tracks">Conference Tracks</a>
            </li>
            <li className="hover:text-blue-400 transition">
              <a href="/technical-sessions">Technical Sessions</a>
            </li>
            <li className="hover:text-blue-400 transition">
              <a href="/events">Events</a>
            </li>

            <li>
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer hover:text-blue-400 transition">
                  Committee
                  <ChevronDown
                    className="transition-transform duration-300 group-open:rotate-180"
                    size={16}
                  />
                </summary>

                <ul className="ml-4 mt-2 text-sm space-y-1 overflow-hidden transition-all duration-300 group-open:animate-slideDown">
                  <li className="py-1 hover:text-blue-300">
                    <a href="/committee-members">Committee Members</a>
                  </li>
                  <li className="py-1 hover:text-blue-300">
                    <a href="/advisory-committee">Advisory Board Members</a>
                  </li>
                  <li className="py-1 hover:text-blue-300">
                    <a href="/reviewers">Editorial Board</a>
                  </li>
                </ul>
              </details>
            </li>

            {/* <li className="hover:text-blue-400 transition">
              <a href="/important-dates">Important Dates</a>
            </li> */}
            <li className="hover:text-blue-400 transition">
              <a href="/speakers">Speakers</a>
            </li>
            <li className="hover:text-blue-400 transition">
              <a href="/registration">Registration</a>
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              <a href="/how-to-reach">How to Reach</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

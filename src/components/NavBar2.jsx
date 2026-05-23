import { useState } from "react";
import { ChevronDown, Home, Menu, X } from "lucide-react";

function NavBar2({ isOpen, setIsOpen }) {
  return (
    <div className="flex justify-center lg:pt-4 pt-0 relative w-full">
      <nav className="rounded-2xl w-full mx-4 md:text-xs lg:text-sm">
        {/* MOBILE HEADER */}
        <div className="flex justify-between items-center lg:hidden">
          {/* <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="text-white w-6 h-6" />
            ) : (
              <Menu className="text-white w-6 h-6" />
            )}
          </button> */}
        </div>

        {/* DESKTOP NAV */}
        <ul
          className="hidden text-nowrap lg:flex gap-3 xl:gap-4 2xl:gap-5 text-black font-medium items-center justify-center 
                lg:text-[12px] xl:text-[13px] 2xl:text-xs"
        >
          <li className="hover:text-blue-400 cursor-pointer">
            <a href="/" className="flex items-center gap-2">
              Home
            </a>
          </li>
          <li className="hover:text-blue-400 cursor-pointer">
            <a href="/about-us">About Us</a>
          </li>
          <li className="relative group cursor-pointer py-2">
            <span className="flex items-center gap-1 hover:text-blue-400">
              <a href="/authors-guidelines">Author's Guidelines</a>
            </span>
          </li>
          <li className="hover:text-blue-400 cursor-pointer">
            <a href="/tracks">Conference Tracks</a>
          </li>
          <li className="relative group cursor-pointer py-2">
            <span className="flex items-center gap-1 hover:text-blue-400">
              Committee
              <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
            </span>

            <ul className="absolute left-0 z-50 top-full text-sm mt-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 bg-slate-900 text-white rounded-lg shadow-lg min-w-[220px]">
              <li className="px-4 py-2 hover:bg-gray-800 rounded-lg">
                <a href="/committee-members">Committee Members</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-800 rounded-lg">
                <a href="/advisory-committee">Advisory Board Members</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-800 rounded-lg">
                <a href="/reviewers">Editorial Board</a>
              </li>
            </ul>
          </li>
          <li className="relative group cursor-pointer py-2">
            <span className="flex items-center gap-1 hover:text-blue-400">
              Submissions
              <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
            </span>

            <ul className="absolute left-0 z-50 top-full text-sm mt-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 bg-slate-900 text-white rounded-lg shadow-lg min-w-[220px]">
              <li className="px-4 py-2 hover:bg-gray-800 rounded-lg">
                <a href="/registration">Registration</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-800 rounded-lg">
                <a href="/special-session">Propose a Special Session</a>
              </li>
            </ul>
          </li>
          {/* <li className="hover:text-blue-400 cursor-pointer">
            <a href="/registration">Registration</a>
          </li> */}
          <li className="hover:text-blue-400 transition">
            <a href="/contact">Contact</a>
          </li>
          {/* <li className="hover:text-blue-400 cursor-pointer">
            <a href="/acknowledgment">Acknowledgment</a>
          </li> */}
          <li className="hover:text-blue-400 cursor-pointer">
            <a href="/how-to-reach">How to Reach</a>
          </li>
        </ul>

        {/* MOBILE NAV */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full z-50 transition-all duration-300 ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <ul className="mx-4 mt-3 p-4 rounded-xl bg-slate-900 text-white flex flex-col gap-4 shadow-2xl border border-slate-700">
            <li className="flex items-center gap-2 hover:text-blue-400">
              <a href="/" className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                Home
              </a>
            </li>

            <li className="hover:text-blue-400">
              <a href="/about-us">About Us</a>
            </li>

            <li>
              <details>
                <summary className="flex items-center justify-between cursor-pointer hover:text-blue-400">
                  <a href="/authors-guidelines">Author's Guidelines</a>
                </summary>
              </details>
            </li>

            <li className="hover:text-blue-400">
              <a href="/tracks">Conference Tracks</a>
            </li>

            <li>
              <details>
                <summary className="flex items-center justify-between cursor-pointer hover:text-blue-400">
                  Committee
                  <ChevronDown className="w-5 h-5" />
                </summary>

                <ul className="ml-4 mt-2 text-sm space-y-1">
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
            <li>
              <details>
                <summary className="flex items-center justify-between cursor-pointer hover:text-blue-400">
                  Submissions
                  <ChevronDown className="w-5 h-5" />
                </summary>

                <ul className="ml-4 mt-2 text-sm space-y-1">
                  <li className="py-1 hover:text-blue-300">
                    <a href="/registration">Registration</a>
                  </li>
                  <li className="py-1 hover:text-blue-300">
                    <a href="/special-session">Propose a Special Session</a>
                  </li>
                </ul>
              </details>
            </li>

            {/* <li className="hover:text-blue-400">
              <a href="/registration">Registration</a>
            </li> */}
            <li className="hover:text-blue-400 transition">
              <a href="/contact">Contact</a>
            </li>
            {/* <li className="hover:text-blue-400">
              <a href="/acknowledgment">Acknowledgment</a>
            </li> */}
            <li className="hover:text-blue-400">
              <a href="/how-to-reach">How to Reach</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar2;

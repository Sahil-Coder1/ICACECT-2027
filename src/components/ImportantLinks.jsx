import { CloudDownload } from "lucide-react";
import React, { useState, useEffect } from "react";

const slides = [
  { title: "ICACECT-2026 REGISTRATION", link: "#", showLink: true },
  {
    title: "ICACECT-2026 PAPER FORMAT",
    link: "https://www.ieee.org/conferences/publishing/templates",
    showLink: true,
  },
  { title: "ICACECT-2026 BROCHURE", link: "#", showLink: false },
];

function ImportantLinks() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = slides.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setCurrent((c) => (c + 1) % total), 4000);
    return () => clearInterval(id);
  }, [paused, total]);

  const goTo = (i) => setCurrent(i);
  const next = () => setCurrent((c) => (c + 1) % total);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  const slide = slides[current];

  return (
    <section className="relative py-6 sm:py-8 bg-white overflow-hidden px-4 sm:px-6 lg:px-0">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-slate-800">
        Important Links
      </h2>

      <div
        className="flex flex-col items-center justify-center pt-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative bg-slate-900 text-white rounded-xl sm:rounded-2xl w-full max-w-4xl text-center shadow-xl sm:shadow-2xl overflow-hidden">
          <div className="h-1 bg-slate-700" />

          <div className="px-4 sm:px-8 md:px-14 py-8 sm:py-10 md:py-12 relative">
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 hidden md:flex items-center justify-center border border-slate-600 rounded-full text-slate-400 hover:text-white hover:border-white"
            >
              ‹
            </button>

            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 hidden md:flex items-center justify-center border border-slate-600 rounded-full text-slate-400 hover:text-white hover:border-white"
            >
              ›
            </button>

            <div className="text-xl sm:text-2xl md:text-3xl text-slate-500 mb-3 sm:mb-5">
              ❝
            </div>

            <h2 className="text-base sm:text-xl md:text-3xl font-semibold mb-3 sm:mb-5 leading-snug">
              {slide.title}
            </h2>

            {slide.showLink ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={slide.link}
                className="inline-flex items-center gap-1 text-xs sm:text-sm text-slate-300 hover:text-white underline"
              >
                click here →
              </a>
            ) : (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={slide.link}
                className="inline-flex items-center gap-1 text-xs sm:text-sm text-slate-300 hover:text-white underline"
              >
                <CloudDownload className="w-8 h-8 animate-bounce" />
              </a>
            )}
          </div>
        </div>

        <div className="flex gap-2 mt-3 sm:mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                current === i
                  ? "w-6 sm:w-8 bg-slate-900"
                  : "w-2 sm:w-3 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImportantLinks;

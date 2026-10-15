import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import React, { useState, useEffect } from "react";

const images = [
  { src: "https://picsum.photos/400/300?random=1", title: "Conference Hall" },
  { src: "https://picsum.photos/400/300?random=2", title: "Keynote Speech" },
  {
    src: "https://picsum.photos/400/300?random=3",
    title: "Networking Session",
  },
  { src: "https://picsum.photos/400/300?random=4", title: "Panel Discussion" },
  { src: "https://picsum.photos/400/300?random=5", title: "Workshop" },
  { src: "https://picsum.photos/400/300?random=6", title: "Award Ceremony" },
];

function Events() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const close = () => setCurrentIndex(null);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  const prev = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  useEffect(() => {
    const handleKey = (e) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  return (
    <section className=" mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold">Events</h1>
        <p className="text-gray-600 mt-2">Click image to view</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="relative cursor-pointer overflow-hidden rounded-xl"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-52 object-cover transition duration-300 hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-end">
              <p className="text-white p-3 text-sm font-semibold">
                {img.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={close}
        >
          <div
            className="relative max-w-5xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex].src}
              alt=""
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
            />

            <p className="text-white text-center mt-4 text-lg font-semibold">
              {images[currentIndex].title}
            </p>

            <button
              onClick={close}
              className="absolute top-4 right-6 text-white text-3xl hover:scale-110"
            >
              <Plus className="rotate-45 p-2 h-8 w-8 cursor-pointer bg-red-400 rounded-full" />
            </button>

            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl px-3 hover:scale-110"
            >
              <ChevronLeft
                size={32}
                className="p-2 h-8 w-8 cursor-pointer bg-slate-400 rounded-full"
              />
            </button>

            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl px-3 hover:scale-110"
            >
              <ChevronRight
                size={32}
                className="p-2 h-8 w-8 cursor-pointer bg-slate-400 rounded-full"
              />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Events;

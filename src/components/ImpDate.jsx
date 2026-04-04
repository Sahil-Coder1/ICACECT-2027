import React, { useState, useEffect } from "react";

function ImpDate() {
  const dates = [
    { event: "Call for Papers", date: "Sep 5, 2025" },
    { event: "Paper Submission Deadline", date: "Feb 4, 2026" },
    { event: "Authors Notification", date: "Feb 21, 2026" },
    { event: "Camera-Ready Submission", date: "Mar 15, 2026" },
    { event: "Conference Dates", date: "May 6 & 7, 2026" },
  ];

  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) {
        setCardsPerSlide(1); // ✅ FIX: better for mobile
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(3); // ✅ SAME as your desktop
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);

    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const totalSlides = Math.ceil(dates.length / cardsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="py-10 sm:py-12 px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-slate-800">
          Important Dates
        </h2>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="w-full flex gap-3 sm:gap-6 my-2 flex-shrink-0"
              >
                {dates
                  .slice(
                    slideIndex * cardsPerSlide,
                    slideIndex * cardsPerSlide + cardsPerSlide,
                  )
                  .map((item, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-[24px] sm:rounded-[32px] overflow-hidden bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-slate-200"
                    >
                      <div className="bg-slate-900 py-3 sm:py-4 flex justify-center">
                        <div className="bg-white text-slate-900 px-3 sm:px-5 py-1 rounded-md text-xs sm:text-sm font-semibold">
                          {item.date}
                        </div>
                      </div>

                      <div className="h-[2px] bg-slate-200" />

                      <div className="p-3 sm:p-6 flex items-center justify-center min-h-[90px] sm:min-h-[120px]">
                        <div className="w-full border border-slate-300 rounded-lg p-3 sm:p-4 text-center text-xs sm:text-base text-slate-700 font-medium">
                          {item.event}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-4 sm:mt-6 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 sm:h-3 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-slate-900 w-5 sm:w-6"
                  : "bg-slate-300 w-2.5 sm:w-3"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImpDate;

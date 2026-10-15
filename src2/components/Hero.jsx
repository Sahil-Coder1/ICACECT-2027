import { useEffect, useState } from "react";
import solar from "../assets/integral_solar2.jpeg";
import carousel1 from "../assets/CARAOUSAL1.jpeg";
import carousel2 from "../assets/CARAOUSAL2.jpeg";
import Header from "./Header";

function Hero() {
  const [displayImage, setDisplayImage] = useState(0);

  const images = [solar, carousel1, carousel2];

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[70vh] lg:h-[60%] overflow-hidden">
      {/* Background */}
      {/* Background Slider */}
      <div
        className="absolute inset-0 flex transition-transform duration-[1500ms] ease-in-out"
        style={{
          transform: `translateX(-${displayImage * 100}%)`,
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Integral University"
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

      {/* HEADER */}
      <Header />

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

        <p className="text-white text-sm sm:text-base md:text-lg max-w-2xl lg:max-w-4xl">
          International Conference on Advancement in Computer Engineering and
          Communication Technology
        </p>

        <i className="text-slate-200 mb-4 text-sm sm:text-base md:text-lg">
          IEEE Technically Sponsored | IEEE Conference ID 72374
        </i>
        <button className="mt-2 px-5 py-2 md:px-8 md:py-3 bg-blue-600 hover:bg-white border-2 hover:border-blue-600 duration-400 hover:text-blue-600 text-white rounded-full">
          18 – 19 January, 2027
        </button>
      </div>
    </div>
  );
}

export default Hero;
